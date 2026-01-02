import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload as UploadIcon, FileText, Image, MessageCircle, Check, Loader2 } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

type UploadStep = "idle" | "uploading" | "analyzing" | "organizing" | "complete";

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadStep, setUploadStep] = useState<UploadStep>("idle");
  const [progress, setProgress] = useState(0);

  const simulateUpload = () => {
    setUploadStep("uploading");
    setProgress(0);

    const uploadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setUploadStep("analyzing");
          simulateAnalyze();
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const simulateAnalyze = () => {
    setTimeout(() => {
      setUploadStep("organizing");
      setTimeout(() => {
        setUploadStep("complete");
      }, 1500);
    }, 2000);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    simulateUpload();
  };

  const handleFileInput = () => {
    simulateUpload();
  };

  const resetUpload = () => {
    setUploadStep("idle");
    setProgress(0);
  };

  const handleDemoAction = () => {
    toast({
      title: "Demo Only",
      description: "This feature is not available in the demo.",
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
            Upload Report
          </h1>
          <p className="mt-1 text-muted-foreground">
            Add new medical reports to your health profile
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {uploadStep === "idle" && (
              <motion.div
                key="upload-area"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {/* Drag and drop area */}
                <div
                  className={cn(
                    "relative rounded-2xl border-2 border-dashed p-8 text-center transition-all md:p-12",
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border bg-card hover:border-primary/50 hover:bg-muted/30"
                  )}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                >
                  <motion.div
                    className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary"
                    animate={isDragging ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                  >
                    <UploadIcon className="h-8 w-8 text-primary-foreground" />
                  </motion.div>

                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Drag & drop your report
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    or click to browse from your device
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      PDF
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                      <Image className="h-4 w-4" />
                      Images
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                      JPG, PNG
                    </span>
                  </div>

                  <input
                    type="file"
                    className="absolute inset-0 cursor-pointer opacity-0"
                    onChange={handleFileInput}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                </div>

                {/* Alternative upload methods */}
                <div className="mt-6">
                  <p className="mb-4 text-center text-sm text-muted-foreground">
                    Or forward from messaging apps
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Button
                      variant="outline"
                      className="h-auto flex-col gap-2 py-4"
                      onClick={handleDemoAction}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                        <MessageCircle className="h-5 w-5 text-accent" />
                      </div>
                      <span>WhatsApp</span>
                      <span className="text-xs text-muted-foreground">Visual only</span>
                    </Button>
                    <Button
                      variant="outline"
                      className="h-auto flex-col gap-2 py-4"
                      onClick={handleDemoAction}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                        <MessageCircle className="h-5 w-5 text-secondary" />
                      </div>
                      <span>Telegram</span>
                      <span className="text-xs text-muted-foreground">Visual only</span>
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {(uploadStep === "uploading" ||
              uploadStep === "analyzing" ||
              uploadStep === "organizing") && (
              <motion.div
                key="progress"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card-elevated p-8 text-center"
              >
                {/* Progress indicator */}
                <div className="relative mx-auto mb-6 h-24 w-24">
                  <svg className="h-24 w-24 -rotate-90 transform">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="url(#progressGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 251 }}
                      animate={{
                        strokeDashoffset:
                          uploadStep === "uploading"
                            ? 251 - (progress / 100) * 83
                            : uploadStep === "analyzing"
                            ? 168 - 83
                            : 85 - 85,
                      }}
                      style={{ strokeDasharray: 251 }}
                    />
                    <defs>
                      <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(175, 55%, 42%)" />
                        <stop offset="100%" stopColor="hsl(160, 55%, 45%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-6 flex justify-center gap-8">
                  {["Upload", "Analyze", "Organize"].map((step, index) => {
                    const stepIndex =
                      uploadStep === "uploading" ? 0 : uploadStep === "analyzing" ? 1 : 2;
                    const isActive = index === stepIndex;
                    const isComplete = index < stepIndex;

                    return (
                      <div key={step} className="flex flex-col items-center gap-2">
                        <motion.div
                          className={cn(
                            "flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium transition-colors",
                            isComplete
                              ? "bg-accent text-accent-foreground"
                              : isActive
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          )}
                          animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        >
                          {isComplete ? <Check className="h-4 w-4" /> : index + 1}
                        </motion.div>
                        <span
                          className={cn(
                            "text-sm",
                            isActive ? "font-medium text-foreground" : "text-muted-foreground"
                          )}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground">
                  {uploadStep === "uploading"
                    ? "Uploading your report..."
                    : uploadStep === "analyzing"
                    ? "Analyzing content..."
                    : "Organizing by body system..."}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {uploadStep === "uploading"
                    ? `${progress}% complete`
                    : uploadStep === "analyzing"
                    ? "AI is reading and extracting values"
                    : "Categorizing into the right sections"}
                </p>
              </motion.div>
            )}

            {uploadStep === "complete" && (
              <motion.div
                key="complete"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="card-elevated p-8 text-center"
              >
                <motion.div
                  className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-accent"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <Check className="h-10 w-10 text-accent-foreground" />
                </motion.div>

                <h3 className="font-display text-2xl font-bold text-foreground">
                  Report Added Successfully!
                </h3>
                <p className="mt-2 text-muted-foreground">(Demo)</p>

                <div className="mt-6 rounded-xl bg-muted/50 p-4">
                  <p className="text-sm text-muted-foreground">
                    Your report has been organized into your health profile. View it in your
                    dashboard or reports section.
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                  <Button variant="hero" onClick={() => (window.location.href = "/dashboard")}>
                    Go to Dashboard
                  </Button>
                  <Button variant="outline" onClick={resetUpload}>
                    Upload Another
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </AppLayout>
  );
};

export default Upload;
