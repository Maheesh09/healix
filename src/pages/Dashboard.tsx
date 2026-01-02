import { motion } from "framer-motion";
import {
  FileText,
  AlertTriangle,
  Upload,
  TrendingUp,
  Lightbulb,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  ChevronRight,
  Pill,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { healthSummary, biomarkers, recentActivity, insights } from "@/data/mockData";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Health score ring component
const HealthScoreRing = ({ score }: { score: number }) => {
  const circumference = 2 * Math.PI * 45;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg className="h-32 w-32 -rotate-90 transform">
        <circle
          cx="64"
          cy="64"
          r="45"
          stroke="currentColor"
          strokeWidth="10"
          fill="none"
          className="text-muted"
        />
        <motion.circle
          cx="64"
          cy="64"
          r="45"
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDasharray: circumference }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(175, 55%, 42%)" />
            <stop offset="100%" stopColor="hsl(160, 55%, 45%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <motion.span
          className="font-display text-3xl font-bold text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {score}
        </motion.span>
        <span className="text-xs text-muted-foreground">Health Score</span>
      </div>
    </div>
  );
};

// Biomarker card
const BiomarkerCard = ({ marker }: { marker: typeof biomarkers[0] }) => {
  const statusColors = {
    normal: "bg-accent-light text-accent",
    watch: "bg-warning-light text-warning-foreground",
    alert: "bg-destructive-light text-destructive",
  };

  const trendIcons = {
    up: ArrowUpRight,
    down: ArrowDownRight,
    stable: Minus,
  };

  const TrendIcon = trendIcons[marker.trend];
  const percentage = (marker.value / marker.range.max) * 100;

  return (
    <motion.div
      className="card-elevated p-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{marker.name}</p>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="font-display text-2xl font-bold text-foreground">
              {marker.value}
            </span>
            {marker.secondaryValue && (
              <span className="text-lg text-muted-foreground">
                /{marker.secondaryValue}
              </span>
            )}
            <span className="text-sm text-muted-foreground">{marker.unit}</span>
          </div>
        </div>
        <div
          className={cn(
            "flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium",
            statusColors[marker.status]
          )}
        >
          <TrendIcon className="h-3 w-3" />
          {marker.status.charAt(0).toUpperCase() + marker.status.slice(1)}
        </div>
      </div>
      <div className="mt-3">
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <motion.div
            className={cn(
              "h-full rounded-full",
              marker.status === "normal"
                ? "bg-accent"
                : marker.status === "watch"
                ? "bg-warning"
                : "bg-destructive"
            )}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(percentage, 100)}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>{marker.range.min}</span>
          <span>Optimal range</span>
          <span>{marker.range.max}</span>
        </div>
      </div>
    </motion.div>
  );
};

// Activity item
const ActivityItem = ({ activity, index }: { activity: typeof recentActivity[0]; index: number }) => {
  const iconMap: Record<string, typeof Upload> = {
    Upload,
    TrendingUp,
    Pill,
    Lightbulb,
  };
  const Icon = iconMap[activity.icon] || FileText;

  const typeColors = {
    upload: "bg-primary/10 text-primary",
    view: "bg-secondary/10 text-secondary",
    medication: "bg-accent/10 text-accent",
    insight: "bg-warning/10 text-warning",
  };

  return (
    <motion.div
      className="flex items-start gap-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div
        className={cn(
          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg",
          typeColors[activity.type]
        )}
      >
        <Icon className="h-4 w-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-foreground">{activity.title}</p>
        <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
      </div>
      <span className="text-xs text-muted-foreground whitespace-nowrap">
        {activity.timestamp}
      </span>
    </motion.div>
  );
};

const Dashboard = () => {
  return (
    <AppLayout>
      <div className="container py-6 lg:py-8">
        <motion.div
          variants={stagger}
          initial="initial"
          animate="animate"
          className="space-y-6"
        >
          {/* Header */}
          <motion.div variants={fadeIn} className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                Welcome back, Alex
              </h1>
              <p className="mt-1 text-muted-foreground">
                Here's an overview of your health profile
              </p>
            </div>
            <Link to="/upload" className="hidden md:block">
              <Button variant="hero">
                <Upload className="h-4 w-4" />
                Upload Report
              </Button>
            </Link>
          </motion.div>

          {/* Summary Cards */}
          <motion.div variants={fadeIn} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "Total Reports",
                value: healthSummary.totalReports,
                icon: FileText,
                color: "text-primary",
                bg: "bg-primary/10",
              },
              {
                label: "Active Conditions",
                value: healthSummary.activeConditions,
                icon: AlertTriangle,
                color: "text-warning",
                bg: "bg-warning/10",
              },
              {
                label: "Last Upload",
                value: healthSummary.lastUploadDate,
                icon: Calendar,
                color: "text-secondary",
                bg: "bg-secondary/10",
              },
              {
                label: "Health Alerts",
                value: healthSummary.healthAlerts,
                icon: AlertTriangle,
                color: "text-destructive",
                bg: "bg-destructive/10",
              },
            ].map((card, index) => (
              <motion.div
                key={card.label}
                className="card-elevated p-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl",
                      card.bg
                    )}
                  >
                    <card.icon className={cn("h-5 w-5", card.color)} />
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-sm text-muted-foreground">{card.label}</p>
                  <p className="font-display text-2xl font-bold text-foreground">
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main content grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Health Snapshot */}
            <motion.div
              variants={fadeIn}
              className="card-elevated p-6 lg:col-span-2"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Health Snapshot
                </h2>
                <Link to="/trends">
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {/* Health Score */}
                <div className="flex flex-col items-center justify-center rounded-2xl bg-muted/30 p-6">
                  <HealthScoreRing score={healthSummary.healthScore} />
                  <p className="mt-3 text-center text-sm text-muted-foreground">
                    Based on your latest biomarkers
                  </p>
                </div>

                {/* Key biomarkers */}
                <div className="space-y-3">
                  {biomarkers.slice(0, 3).map((marker) => (
                    <BiomarkerCard key={marker.id} marker={marker} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div variants={fadeIn} className="card-elevated p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Recent Activity
                </h2>
              </div>

              <div className="mt-4 space-y-4">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={activity.id} activity={activity} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Insights */}
          <motion.div variants={fadeIn} className="card-elevated p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Health Insights
              </h2>
              <Link to="/insights">
                <Button variant="ghost" size="sm">
                  View All
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.id}
                  className={cn(
                    "rounded-xl border p-4 transition-colors",
                    insight.severity === "positive"
                      ? "border-accent/30 bg-accent/5"
                      : insight.severity === "watch"
                      ? "border-warning/30 bg-warning/5"
                      : "border-destructive/30 bg-destructive/5"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
                      <Lightbulb className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-foreground">
                        {insight.title}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={fadeIn} className="grid gap-4 sm:grid-cols-3">
            <Link to="/upload">
              <motion.div
                className="card-elevated flex items-center gap-4 p-5 transition-colors hover:border-primary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Upload className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Upload Report</p>
                  <p className="text-sm text-muted-foreground">Add new health data</p>
                </div>
              </motion.div>
            </Link>

            <Link to="/trends">
              <motion.div
                className="card-elevated flex items-center gap-4 p-5 transition-colors hover:border-secondary/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">View Trends</p>
                  <p className="text-sm text-muted-foreground">Analyze your biomarkers</p>
                </div>
              </motion.div>
            </Link>

            <motion.div
              className="card-elevated flex items-center gap-4 p-5 opacity-60"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">Download Summary</p>
                <p className="text-sm text-muted-foreground">Demo only</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
