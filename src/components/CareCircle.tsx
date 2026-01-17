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
  Check,
  X,
  Stethoscope,
  Heart,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
}

const mockMembers: CircleMember[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    role: "doctor",
    email: "dr.sarah@hospital.com",
    accessLevel: "full",
    sharedReports: 12,
  },
  {
    id: "2",
    name: "Mom",
    role: "family",
    email: "mom@email.com",
    accessLevel: "limited",
    sharedReports: 5,
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

export const CareCircle = () => {
  const [members, setMembers] = useState<CircleMember[]>(mockMembers);
  const [isAddingMember, setIsAddingMember] = useState(false);
  const [selectedShareOption, setSelectedShareOption] = useState<string | null>(null);

  const handleShare = (option: string) => {
    setSelectedShareOption(option);
    toast({
      title: "Demo Only",
      description: `${option} sharing will be available in the full version.`,
    });
  };

  return (
    <motion.div
      className="card-elevated p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
            <Users className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-display text-lg font-semibold text-foreground">
              Care Circle
            </h2>
            <p className="text-sm text-muted-foreground">
              Share reports with trusted people
            </p>
          </div>
        </div>
        
        <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
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
      </div>

      {/* Members List */}
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
                <div className="flex items-center gap-2">
                  <p className="font-medium text-foreground truncate">{member.name}</p>
                  {member.accessLevel === "full" && (
                    <span className="flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-xs text-accent">
                      <Shield className="h-3 w-3" />
                      Full Access
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate">{member.email}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {member.sharedReports} reports shared
                </p>
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
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Quick Share Section */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-sm font-medium text-foreground mb-3">Quick Share</p>
        <div className="flex gap-2">
          {shareOptions.map((option) => (
            <motion.button
              key={option.id}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-xl transition-all",
                option.color,
                "hover:scale-110 hover:shadow-lg"
              )}
              onClick={() => handleShare(option.name)}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <option.icon className="h-5 w-5 text-white" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CareCircle;
