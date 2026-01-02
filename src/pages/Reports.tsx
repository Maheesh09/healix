import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, Download, Eye, ChevronDown, FileText } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { reports } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const reportTypes = ["All Types", "Blood Test", "Vitals", "Imaging", "Other"];
const years = ["All Years", "2025", "2024", "2023"];
const systems = ["All Systems", "Blood", "Heart", "Kidneys", "Liver", "Brain"];

const statusColors = {
  normal: "bg-accent-light text-accent",
  watch: "bg-warning-light text-warning-foreground",
  alert: "bg-destructive-light text-destructive",
};

const Reports = () => {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedSystem, setSelectedSystem] = useState("All Systems");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedReport, setExpandedReport] = useState<string | null>(null);

  const filteredReports = reports.filter((report) => {
    const matchesType = selectedType === "All Types" || report.type === selectedType;
    const matchesYear =
      selectedYear === "All Years" || report.date.startsWith(selectedYear);
    const matchesSystem =
      selectedSystem === "All Systems" || report.system === selectedSystem;
    const matchesSearch =
      searchQuery === "" ||
      report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.lab.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesYear && matchesSystem && matchesSearch;
  });

  const handleDemo = () => {
    toast({
      title: "Demo Only",
      description: "This action is not implemented in the demo.",
    });
  };

  return (
    <AppLayout>
      <div className="container py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            Reports
          </h1>
          <p className="mt-1 text-muted-foreground">
            View and manage all your medical reports
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 space-y-4"
        >
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-11 w-full rounded-xl border border-input bg-card pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Filters:</span>
            </div>

            {/* Type filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="h-9 rounded-lg border border-input bg-card px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {reportTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            {/* Year filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="h-9 rounded-lg border border-input bg-card px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            {/* System filter */}
            <select
              value={selectedSystem}
              onChange={(e) => setSelectedSystem(e.target.value)}
              className="h-9 rounded-lg border border-input bg-card px-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            >
              {systems.map((system) => (
                <option key={system} value={system}>
                  {system}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Reports list */}
        <div className="space-y-4">
          {filteredReports.map((report, index) => (
            <motion.div
              key={report.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="card-elevated overflow-hidden"
            >
              {/* Main row */}
              <div
                className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-muted/30"
                onClick={() =>
                  setExpandedReport(expandedReport === report.id ? null : report.id)
                }
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{report.name}</h3>
                    <div className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{report.lab}</span>
                      <span>•</span>
                      <span>{new Date(report.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{report.system}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Key values preview */}
                  <div className="hidden items-center gap-2 md:flex">
                    {report.keyValues.slice(0, 2).map((val) => (
                      <span
                        key={val.name}
                        className={cn(
                          "rounded-lg px-2 py-1 text-xs font-medium",
                          statusColors[val.status]
                        )}
                      >
                        {val.name}: {val.value}
                      </span>
                    ))}
                  </div>

                  {/* Status badge */}
                  <span
                    className={cn(
                      "rounded-lg px-3 py-1 text-xs font-medium",
                      statusColors[report.status]
                    )}
                  >
                    {report.status.charAt(0).toUpperCase() + report.status.slice(1)}
                  </span>

                  {/* Expand arrow */}
                  <motion.div
                    animate={{ rotate: expandedReport === report.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  </motion.div>
                </div>
              </div>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedReport === report.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-border/50 p-4">
                      {/* Key values */}
                      <div className="mb-4">
                        <h4 className="mb-2 text-sm font-medium text-foreground">
                          Key Values
                        </h4>
                        <div className="grid gap-2 sm:grid-cols-3">
                          {report.keyValues.map((val) => (
                            <div
                              key={val.name}
                              className={cn(
                                "rounded-xl border p-3",
                                val.status === "normal"
                                  ? "border-accent/30 bg-accent/5"
                                  : val.status === "watch"
                                  ? "border-warning/30 bg-warning/5"
                                  : "border-destructive/30 bg-destructive/5"
                              )}
                            >
                              <p className="text-xs text-muted-foreground">
                                {val.name}
                              </p>
                              <p className="font-display text-lg font-semibold text-foreground">
                                {val.value}{" "}
                                <span className="text-sm font-normal text-muted-foreground">
                                  {val.unit}
                                </span>
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* AI Summary */}
                      <div className="mb-4 rounded-xl bg-muted/50 p-4">
                        <h4 className="mb-2 text-sm font-medium text-foreground">
                          AI Summary (Simple Language)
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {report.summary}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleDemo}>
                          <Eye className="h-4 w-4" />
                          View Full Report
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleDemo}>
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          {filteredReports.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-dashed border-border p-8 text-center"
            >
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <p className="mt-4 font-medium text-foreground">No reports found</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Try adjusting your filters or upload a new report
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default Reports;
