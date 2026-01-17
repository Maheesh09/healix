import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  TrendingUp,
  Pill,
  Upload,
  User,
  Settings,
  Lightbulb,
  Activity,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Body Systems", href: "/systems", icon: Activity },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Care Circle", href: "/care-circle", icon: Users },
  { name: "Insights", href: "/insights", icon: Lightbulb },
  { name: "Trends", href: "/trends", icon: TrendingUp },
  { name: "Medications", href: "/medications", icon: Pill },
  { name: "Upload", href: "/upload", icon: Upload },
];

const bottomLinks = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="hidden w-64 flex-shrink-0 border-r border-border/50 bg-sidebar lg:block">
      <div className="flex h-full flex-col py-6">
        {/* Main Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Menu
          </p>
          {sidebarLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.name} to={link.href}>
                <motion.div
                  className={cn(
                    "relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-sidebar-primary"
                      layoutId="sidebar-indicator"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <Icon className="h-5 w-5" />
                  {link.name}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Navigation */}
        <nav className="mt-auto space-y-1 border-t border-sidebar-border px-3 pt-4">
          {bottomLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const Icon = link.icon;
            return (
              <Link key={link.name} to={link.href}>
                <motion.div
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-primary"
                      : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                  )}
                  whileHover={{ x: 2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-5 w-5" />
                  {link.name}
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Disclaimer */}
        <div className="mx-3 mt-4 rounded-xl bg-muted/50 p-3">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Healix provides informational insights and does not replace professional medical advice.
          </p>
        </div>
      </div>
    </aside>
  );
};
