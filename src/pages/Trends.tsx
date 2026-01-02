import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus, Info } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { trendData, insights } from "@/data/mockData";
import { cn } from "@/lib/utils";

const biomarkerOptions = [
  { id: "glucose", name: "Glucose", unit: "mg/dL", color: "hsl(175, 55%, 42%)" },
  { id: "cholesterol", name: "Cholesterol", unit: "mg/dL", color: "hsl(235, 55%, 58%)" },
  { id: "bloodPressure", name: "Blood Pressure", unit: "mmHg", color: "hsl(0, 65%, 55%)" },
  { id: "vitaminD", name: "Vitamin D", unit: "ng/mL", color: "hsl(40, 90%, 50%)" },
];

const timeRanges = ["3M", "6M", "1Y"];

const Trends = () => {
  const [selectedBiomarker, setSelectedBiomarker] = useState("glucose");
  const [selectedTimeRange, setSelectedTimeRange] = useState("6M");

  const currentBiomarker = biomarkerOptions.find((b) => b.id === selectedBiomarker)!;
  const data = trendData[selectedBiomarker as keyof typeof trendData] || trendData.glucose;

  // Calculate trend
  const firstItem = data[0] as { value?: number; systolic?: number };
  const lastItem = data[data.length - 1] as { value?: number; systolic?: number };
  const firstValue = firstItem?.value ?? firstItem?.systolic ?? 0;
  const lastValue = lastItem?.value ?? lastItem?.systolic ?? 0;
  const trendDirection = lastValue > firstValue ? "up" : lastValue < firstValue ? "down" : "stable";
  const trendPercentage = Math.abs(((lastValue - firstValue) / firstValue) * 100).toFixed(1);

  return (
    <AppLayout>
      <div className="container py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            Trends & Analytics
          </h1>
          <p className="mt-1 text-muted-foreground">
            Track how your biomarkers change over time
          </p>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Biomarker selector */}
          <div className="flex flex-wrap gap-2">
            {biomarkerOptions.map((option) => (
              <Button
                key={option.id}
                variant={selectedBiomarker === option.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedBiomarker(option.id)}
                className="transition-all"
              >
                {option.name}
              </Button>
            ))}
          </div>

          {/* Time range selector */}
          <div className="flex gap-1 rounded-lg bg-muted p-1">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => setSelectedTimeRange(range)}
                className={cn(
                  "rounded-md px-4 py-1.5 text-sm font-medium transition-colors",
                  selectedTimeRange === range
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-elevated p-6"
        >
          {/* Chart header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                {currentBiomarker.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                Showing last {selectedTimeRange === "3M" ? "3 months" : selectedTimeRange === "6M" ? "6 months" : "year"}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Current</p>
                <p className="font-display text-2xl font-bold text-foreground">
                  {lastValue}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {currentBiomarker.unit}
                  </span>
                </p>
              </div>
              <div
                className={cn(
                  "flex items-center gap-1 rounded-lg px-3 py-1.5",
                  trendDirection === "down"
                    ? "bg-accent-light text-accent"
                    : trendDirection === "up"
                    ? selectedBiomarker === "cholesterol" || selectedBiomarker === "bloodPressure"
                      ? "bg-warning-light text-warning-foreground"
                      : "bg-accent-light text-accent"
                    : "bg-muted text-muted-foreground"
                )}
              >
                {trendDirection === "up" ? (
                  <TrendingUp className="h-4 w-4" />
                ) : trendDirection === "down" ? (
                  <TrendingDown className="h-4 w-4" />
                ) : (
                  <Minus className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">{trendPercentage}%</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {selectedBiomarker === "bloodPressure" ? (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="systolic"
                    stroke="hsl(0, 65%, 55%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(0, 65%, 55%)", strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="diastolic"
                    stroke="hsl(235, 55%, 58%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(235, 55%, 58%)", strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              ) : (
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={currentBiomarker.color} stopOpacity={0.2} />
                      <stop offset="95%" stopColor={currentBiomarker.color} stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={currentBiomarker.color}
                    strokeWidth={2}
                    fill="url(#colorValue)"
                    dot={{ fill: currentBiomarker.color, strokeWidth: 0 }}
                    activeDot={{ r: 6 }}
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Legend for blood pressure */}
          {selectedBiomarker === "bloodPressure" && (
            <div className="mt-4 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-destructive" />
                <span className="text-sm text-muted-foreground">Systolic</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-secondary" />
                <span className="text-sm text-muted-foreground">Diastolic</span>
              </div>
            </div>
          )}
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6"
        >
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Insights
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, index) => (
              <motion.div
                key={insight.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className={cn(
                  "rounded-xl border p-4",
                  insight.severity === "positive"
                    ? "border-accent/30 bg-accent/5"
                    : insight.severity === "watch"
                    ? "border-warning/30 bg-warning/5"
                    : "border-destructive/30 bg-destructive/5"
                )}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg",
                      insight.severity === "positive"
                        ? "bg-accent/20 text-accent"
                        : insight.severity === "watch"
                        ? "bg-warning/20 text-warning"
                        : "bg-destructive/20 text-destructive"
                    )}
                  >
                    <Info className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{insight.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">{insight.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 rounded-xl bg-muted/50 p-4 text-center text-sm text-muted-foreground"
        >
          <strong>Note:</strong> These insights are for informational purposes only.
          Always consult your healthcare provider for medical advice.
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Trends;
