import { motion } from "framer-motion";
import { Pill, Calendar, Clock, AlertCircle } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { medications } from "@/data/mockData";
import { cn } from "@/lib/utils";

const Medications = () => {
  const activeMeds = medications.filter((m) => m.status === "active");
  const pastMeds = medications.filter((m) => m.status === "past");

  return (
    <AppLayout>
      <div className="container py-6 lg:py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
            Medications
          </h1>
          <p className="mt-1 text-muted-foreground">
            Track your current and past medications
          </p>
        </motion.div>

        {/* Current Medications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Current Medications
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {activeMeds.map((med, index) => (
              <motion.div
                key={med.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="card-elevated group p-5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Pill className="h-6 w-6 text-primary" />
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      med.category === "Prescription"
                        ? "bg-secondary/20 text-secondary"
                        : "bg-accent/20 text-accent"
                    )}
                  >
                    {med.category}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {med.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{med.dosage}</p>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {med.frequency}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    Started{" "}
                    {new Date(med.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>

                {med.instructions && (
                  <div className="mt-4 rounded-lg bg-muted/50 px-3 py-2">
                    <p className="text-xs text-muted-foreground">
                      <AlertCircle className="mr-1 inline h-3 w-3" />
                      {med.instructions}
                    </p>
                  </div>
                )}

                {/* Reminder badge (UI only) */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-1 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-xs font-medium text-primary">
                    <Clock className="h-3 w-3" />
                    Reminder set
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Medications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-4 font-display text-lg font-semibold text-foreground">
            Past Medications
          </h2>
          <div className="space-y-3">
            {pastMeds.map((med, index) => (
              <motion.div
                key={med.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="card-flat flex items-center gap-4 p-4 opacity-70"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                  <Pill className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{med.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {med.dosage} • {med.frequency}
                  </p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>
                    {new Date(med.startDate).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {med.endDate
                      ? new Date(med.endDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })
                      : "Present"}
                  </p>
                  {med.instructions && (
                    <p className="mt-0.5 text-xs italic">{med.instructions}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline view placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-2xl border border-dashed border-border p-8 text-center"
        >
          <p className="text-muted-foreground">
            Timeline visualization coming soon...
          </p>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default Medications;
