import { motion } from "framer-motion";
import { User, Mail, Calendar, Droplet, Stethoscope, Edit2, Phone, MapPin } from "lucide-react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Button } from "@/components/ui/button";
import { userData } from "@/data/mockData";
import { toast } from "@/hooks/use-toast";

const Profile = () => {
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
            My Profile
          </h1>
          <p className="mt-1 text-muted-foreground">
            View and manage your personal information
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-6">
          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card-elevated overflow-hidden p-6"
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-lg">
                  {userData.avatar}
                </div>
                <button
                  onClick={handleDemo}
                  className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary shadow-sm hover:bg-muted transition-colors"
                >
                  <Edit2 className="h-4 w-4 text-primary" />
                </button>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-display text-2xl font-semibold text-foreground">
                  {userData.name}
                </h2>
                <p className="mt-1 text-muted-foreground">{userData.email}</p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>NIC: {userData.nic}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{userData.age} years old</span>
                  </div>
                </div>
              </div>
              <Button onClick={handleDemo} className="w-full sm:w-auto">
                <Edit2 className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>
            </div>
          </motion.div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card-elevated p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Personal Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                  <p className="mt-1 text-foreground">{userData.name}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleDemo}>
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Email Address</p>
                  <p className="mt-1 text-foreground">{userData.email}</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleDemo}>
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Phone Number</p>
                  <p className="mt-1 text-foreground">+1 (555) 123-4567</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleDemo}>
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-muted-foreground">Address</p>
                  <p className="mt-1 text-foreground">123 Health Street, Medical City, MC 12345</p>
                </div>
                <Button variant="ghost" size="sm" onClick={handleDemo}>
                  <Edit2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Medical Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="card-elevated p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Medical Information
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10">
                    <Droplet className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Blood Type</p>
                    <p className="mt-1 font-display text-xl font-semibold text-foreground">
                      {userData.bloodType}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Last Checkup</p>
                    <p className="mt-1 font-display text-xl font-semibold text-foreground">
                      {new Date(userData.lastCheckup).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Stethoscope className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Primary Care Physician</p>
                    <p className="mt-1 font-display text-lg font-semibold text-foreground">
                      Dr. Sarah Chen
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <User className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Emergency Contact</p>
                    <p className="mt-1 font-display text-lg font-semibold text-foreground">
                      Jane Johnson
                    </p>
                    <p className="mt-0.5 text-sm text-muted-foreground">+1 (555) 987-6543</p>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline" className="mt-4 w-full" onClick={handleDemo}>
              Update Medical Information
            </Button>
          </motion.div>

          {/* Account Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card-elevated p-6"
          >
            <h3 className="mb-4 font-display text-lg font-semibold text-foreground">
              Account Overview
            </h3>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 p-4">
                <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">47</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 p-4">
                <p className="text-sm font-medium text-muted-foreground">Active Medications</p>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">3</p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 p-4">
                <p className="text-sm font-medium text-muted-foreground">Health Score</p>
                <p className="mt-2 font-display text-2xl font-bold text-foreground">85</p>
              </div>
            </div>
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
