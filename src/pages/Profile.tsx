import { useState } from "react";
import { motion } from "framer-motion";
import { User, Shield, Bell, Globe, ChevronRight, LogOut } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { userData } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);

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
            Profile & Settings
          </h1>
          <p className="mt-1 text-muted-foreground">
            Manage your account and preferences
          </p>
        </motion.div>

        <div className="mx-auto max-w-2xl space-y-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated p-6"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-xl font-bold text-primary-foreground">
                {userData.avatar}
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-foreground">
                  {userData.name}
                </h2>
                <p className="text-muted-foreground">NIC: {userData.nic}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="font-display text-lg font-semibold text-foreground">
                  {userData.age} years
                </p>
              </div>
              <div className="rounded-xl bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">Blood Type</p>
                <p className="font-display text-lg font-semibold text-foreground">
                  {userData.bloodType}
                </p>
              </div>
              <div className="rounded-xl bg-muted/50 p-4">
                <p className="text-sm text-muted-foreground">Last Checkup</p>
                <p className="font-display text-lg font-semibold text-foreground">
                  {new Date(userData.lastCheckup).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>

            <Button variant="outline" className="mt-6 w-full" onClick={handleDemo}>
              Edit Profile
            </Button>
          </motion.div>

          {/* Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated divide-y divide-border"
          >
            {/* Language */}
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
                  <p className="text-sm text-muted-foreground">English</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </button>

            {/* Notifications */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <Bell className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive medication reminders
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

            {/* Email updates */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email Updates</p>
                  <p className="text-sm text-muted-foreground">
                    Health insights digest
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
          </motion.div>

          {/* Privacy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-elevated p-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Shield className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">Your Privacy</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your health data is encrypted and stored securely. Only you have access
                  to your complete medical records. We never share your data with third
                  parties without your explicit consent.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Logout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              variant="outline"
              className="w-full border-destructive/30 text-destructive hover:bg-destructive/10"
              onClick={handleDemo}
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
          </motion.div>

          {/* Demo notice */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="rounded-xl bg-muted/50 p-4 text-center text-sm text-muted-foreground"
          >
            This is a demo profile. No real data is stored.
          </motion.div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Profile;
