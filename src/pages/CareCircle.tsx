import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  UserPlus,
  Share2,
  Shield,
  MessageCircle,
  Mail,
  Link2,
  Stethoscope,
  Heart,
  ChevronRight,
  FileText,
  Clock,
  Bell,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AppLayout } from "@/components/layout/AppLayout";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface CircleMember {
  id: string;
  name: string;
  role: "doctor" | "family";
  email: string;
  avatar?: string;
  accessLevel: "full" | "limited";
  sharedReports: number;
  lastAccessed?: string;
}

const mockMembers: CircleMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    role: "doctor",
    email: "dr.sarah@hospital.com",
    accessLevel: "full",
    sharedReports: 12,
    lastAccessed: "2 hours ago",
  },
  {
    id: "2",
    name: "Mom",
    role: "family",
    email: "mom@email.com",
    accessLevel: "limited",
    sharedReports: 5,
    lastAccessed: "Yesterday",
  },
  {
    id: "3",
    name: "Dr. Michael Chen",
    role: "doctor",
    email: "dr.chen@clinic.com",
    accessLevel: "full",
    sharedReports: 8,
    lastAccessed: "3 days ago",
  },
];

const shareOptions = [
  {
    id: "whatsapp",
    name: "WhatsApp",
    icon: MessageCircle,
    color: "bg-[#25D366]",
    description: "Send via WhatsApp",
  },
  {
    id: "email",
    name: "Email",
    icon: Mail,
    color: "bg-primary",
    description: "Send email invitation",
  },
  {
    id: "link",
    name: "Secure Link",
    icon: Link2,
    color: "bg-secondary",
    description: "Generate shareable link",
  },
];

const recentShares = [
  { id: "1", report: "Blood Test Results", sharedWith: "Dr. Sarah Johnson", date: "Today" },
  { id: "2", report: "X-Ray Report", sharedWith: "Mom", date: "Yesterday" },
  { id: "3", report: "Annual Checkup", sharedWith: "Dr. Michael Chen", date: "3 days ago" },
];

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

const CareCirclePage = () => {
  const [members, setMembers] = useState<CircleMember[]>(mockMembers);
  const [isAddingMember, setIsAddingMember] = useState(false);

  const handleShare = (option: string) => {
    toast({
      title: "Demo Only",
      description: `${option} sharing will be available in the full version.`,
    });
  };

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
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                <Users className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-foreground lg:text-3xl">
                  Care Circle
                </h1>
                <p className="mt-1 text-muted-foreground">
                  Share your health reports with trusted doctors and family members
                </p>
              </div>
            </div>
            
            <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
              <DialogTrigger asChild>
                <Button variant="hero" className="hidden md:flex">
                  <UserPlus className="h-4 w-4" />
                  Add Member
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <UserPlus className="h-5 w-5 text-primary" />
                    Add to Care Circle
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-4 py-4">
                  {/* Member Type Selection */}
                  <div className="grid grid-cols-2 gap-3">
                    <motion.button
                      className="flex flex-col items-center gap-2 rounded-xl border-2 border-primary/20 p-4 transition-all hover:border-primary hover:bg-primary/5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Stethoscope className="h-6 w-6 text-primary" />
                      </div>
                      <span className="font-medium text-foreground">Doctor</span>
                      <span className="text-xs text-muted-foreground">Healthcare provider</span>
                    </motion.button>
                    
                    <motion.button
                      className="flex flex-col items-center gap-2 rounded-xl border-2 border-secondary/20 p-4 transition-all hover:border-secondary hover:bg-secondary/5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                        <Heart className="h-6 w-6 text-secondary" />
                      </div>
                      <span className="font-medium text-foreground">Family</span>
                      <span className="text-xs text-muted-foreground">Trusted member</span>
                    </motion.button>
                  </div>

                  {/* Share Options */}
                  <div className="pt-4">
                    <p className="text-sm font-medium text-foreground mb-3">
                      Invite via
                    </p>
                    <div className="space-y-2">
                      {shareOptions.map((option) => (
                        <motion.button
                          key={option.id}
                          className="flex w-full items-center gap-3 rounded-xl border border-border p-3 transition-all hover:border-primary/30 hover:bg-muted/50"
                          onClick={() => handleShare(option.name)}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", option.color)}>
                            <option.icon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 text-left">
                            <p className="font-medium text-foreground">{option.name}</p>
                            <p className="text-xs text-muted-foreground">{option.description}</p>
                          </div>
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={fadeIn} className="grid gap-4 sm:grid-cols-3">
            <motion.div
              className="card-elevated p-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{members.length}</p>
                  <p className="text-sm text-muted-foreground">Circle Members</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="card-elevated p-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10">
                  <FileText className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {members.reduce((acc, m) => acc + m.sharedReports, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Reports Shared</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="card-elevated p-5"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {members.filter((m) => m.accessLevel === "full").length}
                  </p>
                  <p className="text-sm text-muted-foreground">Full Access</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Grid */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Members List */}
            <motion.div variants={fadeIn} className="card-elevated p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-semibold text-foreground">
                  Circle Members
                </h2>
                <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsAddingMember(true)}>
                  <UserPlus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <AnimatePresence>
                  {members.map((member, index) => (
                    <motion.div
                      key={member.id}
                      className="flex items-center gap-4 rounded-xl border border-border p-4 transition-all hover:border-primary/20 hover:bg-muted/30"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {/* Avatar */}
                      <div className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full",
                        member.role === "doctor" ? "bg-primary/10" : "bg-secondary/10"
                      )}>
                        {member.role === "doctor" ? (
                          <Stethoscope className="h-6 w-6 text-primary" />
                        ) : (
                          <Heart className="h-6 w-6 text-secondary" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-medium text-foreground truncate">{member.name}</p>
                          {member.accessLevel === "full" && (
                            <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                              <Shield className="h-3 w-3" />
                              Full Access
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{member.email}</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                          <span>{member.sharedReports} reports shared</span>
                          {member.lastAccessed && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {member.lastAccessed}
                              </span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-primary"
                          onClick={() => handleShare("Report")}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        >
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Share */}
              <motion.div variants={fadeIn} className="card-elevated p-6">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  Quick Share
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {shareOptions.map((option) => (
                    <motion.button
                      key={option.id}
                      className={cn(
                        "flex flex-col items-center gap-2 rounded-xl p-4 transition-all",
                        option.color,
                        "hover:scale-105 hover:shadow-lg"
                      )}
                      onClick={() => handleShare(option.name)}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <option.icon className="h-6 w-6 text-white" />
                      <span className="text-xs font-medium text-white">{option.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Recent Activity */}
              <motion.div variants={fadeIn} className="card-elevated p-6">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">
                  Recent Shares
                </h2>
                <div className="space-y-3">
                  {recentShares.map((share, index) => (
                    <motion.div
                      key={share.id}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate">
                          {share.report}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Shared with {share.sharedWith}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {share.date}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Notification Preferences */}
              <motion.div variants={fadeIn} className="card-elevated p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="h-5 w-5 text-muted-foreground" />
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Notifications
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  Get notified when your circle members view your shared reports.
                </p>
                <Button variant="outline" size="sm" className="mt-4 w-full">
                  Manage Preferences
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default CareCirclePage;
