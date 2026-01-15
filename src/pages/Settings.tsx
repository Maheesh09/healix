import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Globe,
  Shield,
  Moon,
  Sun,
  Download,
  Trash2,
  Lock,
  Mail,
  Smartphone,
  ChevronRight,
  LogOut,
  Eye,
  EyeOff,
  Database,
} from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [medicationReminders, setMedicationReminders] = useState(true);
  const [healthAlerts, setHealthAlerts] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleDemo = () => {
    toast({
      title: "Demo Only",
      description: "This action is not implemented in the demo.",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your health data export will be ready shortly.",
    });
  };

  const handleDelete = () => {
    toast({
      title: "Account Deletion",
      description: "This action requires additional confirmation.",
      variant: "destructive",
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
            Settings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your app preferences and account settings
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-6">
          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated divide-y divide-border"
          >
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Control how you receive notifications
              </p>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications on your device
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "relative h-7 w-12 rounded-full transition-colors",
                  notifications ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setNotifications(!notifications)}
              >
                <motion.div
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
                  animate={{ left: notifications ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Updates</p>
                  <p className="text-sm text-muted-foreground">
                    Weekly health insights digest
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "relative h-7 w-12 rounded-full transition-colors",
                  emailUpdates ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setEmailUpdates(!emailUpdates)}
              >
                <motion.div
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
                  animate={{ left: emailUpdates ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Smartphone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Medication Reminders</p>
                  <p className="text-sm text-muted-foreground">
                    Get reminders for your medications
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "relative h-7 w-12 rounded-full transition-colors",
                  medicationReminders ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setMedicationReminders(!medicationReminders)}
              >
                <motion.div
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
                  animate={{ left: medicationReminders ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                  <Bell className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Health Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Important health notifications
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "relative h-7 w-12 rounded-full transition-colors",
                  healthAlerts ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setHealthAlerts(!healthAlerts)}
              >
                <motion.div
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
                  animate={{ left: healthAlerts ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </motion.div>

          {/* Appearance & Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated divide-y divide-border"
          >
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Appearance & Language
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Customize your app experience
              </p>
            </div>

            <button
              className="flex w-full items-center justify-between p-4 transition-colors hover:bg-muted/30"
              onClick={handleDemo}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Language</p>
                  <p className="text-sm text-muted-foreground">English (US)</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>

            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  {darkMode ? (
                    <Moon className="h-5 w-5 text-accent" />
                  ) : (
                    <Sun className="h-5 w-5 text-accent" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">Theme</p>
                  <p className="text-sm text-muted-foreground">
                    {darkMode ? "Dark mode" : "Light mode"}
                  </p>
                </div>
              </div>
              <button
                className={cn(
                  "relative h-7 w-12 rounded-full transition-colors",
                  darkMode ? "bg-primary" : "bg-muted"
                )}
                onClick={() => setDarkMode(!darkMode)}
              >
                <motion.div
                  className="absolute top-1 h-5 w-5 rounded-full bg-white shadow-sm"
                  animate={{ left: darkMode ? 26 : 4 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </motion.div>

          {/* Privacy & Security */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-elevated divide-y divide-border"
          >
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Privacy & Security
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your data and security settings
              </p>
            </div>

            <button
              className="flex w-full items-center justify-between p-4 transition-colors hover:bg-muted/30"
              onClick={handleDemo}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Change Password</p>
                  <p className="text-sm text-muted-foreground">Update your account password</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>

            <button
              className="flex w-full items-center justify-between p-4 transition-colors hover:bg-muted/30"
              onClick={handleDemo}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>

            <div className="p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Data Privacy</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your health data is encrypted and stored securely. Only you have access
                    to your complete medical records. We never share your data with third
                    parties without your explicit consent.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Data Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-elevated divide-y divide-border"
          >
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-foreground">
                Data Management
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Export or manage your health data
              </p>
            </div>

            <button
              className="flex w-full items-center justify-between p-4 transition-colors hover:bg-muted/30"
              onClick={handleExport}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Download className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Export Data</p>
                  <p className="text-sm text-muted-foreground">
                    Download all your health records
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>

            <button
              className="flex w-full items-center justify-between p-4 transition-colors hover:bg-muted/30"
              onClick={handleDemo}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                  <Database className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-foreground">Data Storage</p>
                  <p className="text-sm text-muted-foreground">
                    Manage your stored data
                  </p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>
          </motion.div>

          {/* Account Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <Button
              variant="outline"
              className="w-full"
              onClick={handleDemo}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>

            <Button
              variant="outline"
              className="w-full border-destructive/30 text-destructive hover:bg-destructive/10"
              onClick={handleDelete}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete Account
            </Button>
          </motion.div>

          {/* Demo notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="rounded-xl bg-muted/50 p-4 text-center text-sm text-muted-foreground"
          >
            This is a demo. Settings changes are not persisted.
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Settings;

