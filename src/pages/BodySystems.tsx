import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Brain,
  Wind,
  Activity,
  Droplets,
  Droplet,
  ChevronRight,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { bodySystems } from "@/data/mockData";
import { cn } from "@/lib/utils";

const iconMap: Record<string, typeof Heart> = {
  Heart,
  Brain,
  Wind,
  Activity,
  Droplets,
  Droplet,
};

const statusColors = {
  normal: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
    glow: "hover:shadow-accent/20",
  },
  watch: {
    bg: "bg-warning/10",
    text: "text-warning",
    border: "border-warning/20",
    glow: "hover:shadow-warning/20",
  },
  alert: {
    bg: "bg-destructive/10",
    text: "text-destructive",
    border: "border-destructive/20",
    glow: "hover:shadow-destructive/20",
  },
};

const BodySystems = () => {
  return (
    <AppLayout>
      <div className="container py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            Body Systems
          </h1>
          <p className="mt-1 text-muted-foreground">
            View your health organized by body system
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bodySystems.map((system, index) => {
            const Icon = iconMap[system.icon] || Activity;
            const colors = statusColors[system.status];

            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/systems/${system.id}`}>
                  <motion.div
                    className={cn(
                      "card-elevated group relative overflow-hidden p-6",
                      colors.glow
                    )}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Background decoration */}
                    <div
                      className={cn(
                        "absolute -right-6 -top-6 h-24 w-24 rounded-full opacity-20 blur-2xl transition-opacity group-hover:opacity-40",
                        colors.bg
                      )}
                    />

                    <div className="relative">
                      {/* Icon and status */}
                      <div className="flex items-start justify-between">
                        <motion.div
                          className={cn(
                            "flex h-14 w-14 items-center justify-center rounded-2xl",
                            colors.bg
                          )}
                          whileHover={{ rotate: 5 }}
                        >
                          <Icon className={cn("h-7 w-7", colors.text)} />
                        </motion.div>
                        <div
                          className={cn(
                            "flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium",
                            colors.bg,
                            colors.border,
                            colors.text
                          )}
                        >
                        <span
                          className={cn("h-1.5 w-1.5 rounded-full", {
                            "bg-accent": system.status === "normal",
                            "bg-warning": system.status === "watch",
                          })}
                          />
                          {system.status.charAt(0).toUpperCase() + system.status.slice(1)}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mt-4">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {system.name}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {system.description}
                        </p>
                      </div>

                      {/* Footer */}
                      <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-4">
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>{system.reportsCount} reports</span>
                          <span>Updated {system.lastUpdated}</span>
                        </div>
                        <motion.div
                          className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
                          whileHover={{ x: 2 }}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Human body illustration placeholder */}
        <motion.div
          className="mt-8 rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-muted-foreground">
            Interactive body illustration coming soon...
          </p>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default BodySystems;
