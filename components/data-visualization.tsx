"use client"

import { useEffect, useState } from "react"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

const pieData = [
  { name: "Data Cleaning", value: 25 },
  { name: "Analysis", value: 35 },
  { name: "Visualization", value: 25 },
  { name: "Reporting", value: 15 },
]

const barData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
]

const areaData = [
  { name: "Week 1", value: 4000 },
  { name: "Week 2", value: 3000 },
  { name: "Week 3", value: 5000 },
  { name: "Week 4", value: 2780 },
  { name: "Week 5", value: 1890 },
  { name: "Week 6", value: 2390 },
  { name: "Week 7", value: 3490 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export function DataVisualization() {
  const [activeChart, setActiveChart] = useState<"pie" | "bar" | "area">("pie")
  const [animate, setAnimate] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveChart((prev) => {
        if (prev === "pie") return "bar"
        if (prev === "bar") return "area"
        return "pie"
      })
      setAnimate(true)
      setTimeout(() => setAnimate(false), 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const size = isMobile ? 300 : 400

  return (
    <div
      className={cn(
        "relative w-full max-w-md aspect-square rounded-lg border bg-background p-4 shadow-lg transition-all duration-500",
        animate && "scale-95 opacity-80",
      )}
    >
      <div className="absolute top-2 right-2 flex gap-1">
        <button
          onClick={() => setActiveChart("pie")}
          className={cn("size-3 rounded-full", activeChart === "pie" ? "bg-primary" : "bg-muted")}
        />
        <button
          onClick={() => setActiveChart("bar")}
          className={cn("size-3 rounded-full", activeChart === "bar" ? "bg-primary" : "bg-muted")}
        />
        <button
          onClick={() => setActiveChart("area")}
          className={cn("size-3 rounded-full", activeChart === "area" ? "bg-primary" : "bg-muted")}
        />
      </div>

      <div className="h-full w-full">
        {activeChart === "pie" && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h3 className="mb-4 text-center text-sm font-medium">Time Allocation in Data Projects</h3>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeChart === "bar" && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h3 className="mb-4 text-center text-sm font-medium">Monthly Data Processing Volume</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={barData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {activeChart === "area" && (
          <div className="flex h-full w-full flex-col items-center justify-center">
            <h3 className="mb-4 text-center text-sm font-medium">Weekly Insights Generated</h3>
            <ResponsiveContainer width="100%" height="80%">
              <AreaChart data={areaData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  )
}
