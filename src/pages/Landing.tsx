import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Upload,
  TrendingUp,
  Shield,
  FileText,
  Activity,
  ArrowRight,
  Sparkles,
  Heart,
  Brain,
  Clock,
  CheckCircle2,
  Users,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const features = [
  {
    icon: FileText,
    title: "Unified Health Record",
    description:
      "All your medical reports, lab results, and prescriptions in one secure, organized place.",
  },
  {
    icon: Activity,
    title: "Body System View",
    description:
      "Visualize health data by organ system—heart, brain, liver—for complete clarity.",
  },
  {
    icon: TrendingUp,
    title: "Health Trends",
    description:
      "Interactive charts track biomarkers over time, helping you spot patterns early.",
  },
  {
    icon: Sparkles,
    title: "AI Insights",
    description:
      "Get plain-language summaries of complex medical data, powered by AI.",
  },
];

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "1M+", label: "Reports Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "256-bit", label: "Encryption" },
];

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description: "No more searching through folders. Access any report in seconds.",
  },
  {
    icon: Shield,
    title: "Stay Secure",
    description: "Bank-grade encryption keeps your sensitive health data protected.",
  },
  {
    icon: Users,
    title: "Family Profiles",
    description: "Manage health records for your entire family from one account.",
  },
  {
    icon: Lock,
    title: "You Own Your Data",
    description: "Export or delete your data anytime. Full control, always.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
              <Heart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-foreground">
              Healix
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Benefits
            </a>
            <a
              href="#security"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Security
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="sm" className="shadow-lg shadow-primary/25">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-primary/8 via-primary/4 to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl" />
        </div>

        <div className="container pb-20 pt-20 md:pb-32 md:pt-28">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Health Management</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Your Complete{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                  Health Story
                </span>
                <motion.span
                  className="absolute -inset-1 -z-10 block rounded-lg bg-primary/10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                />
              </span>
              <br />
              In One Place
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              Healix organizes your entire medical history—lab reports, prescriptions, 
              imaging—into a clear, searchable timeline you control forever.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/dashboard">
                <Button size="lg" className="h-12 gap-2 px-8 text-base shadow-xl shadow-primary/25">
                  Explore Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/upload">
                <Button variant="outline" size="lg" className="h-12 gap-2 px-8 text-base">
                  <Upload className="h-5 w-5" />
                  Upload Report
                </Button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                <span>SOC 2 Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            className="relative mx-auto mt-16 max-w-5xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl shadow-primary/10 backdrop-blur-sm">
              <div className="overflow-hidden rounded-xl bg-gradient-to-b from-muted/50 to-muted">
                {/* Mock Dashboard UI */}
                <div className="flex h-[400px] flex-col md:h-[500px]">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-border/50 bg-background/50 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10" />
                      <div className="h-4 w-24 rounded bg-muted-foreground/20" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
                      <div className="h-8 w-8 rounded-full bg-muted-foreground/10" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="hidden w-48 border-r border-border/50 bg-background/30 p-4 md:block">
                      <div className="space-y-3">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <div key={i} className={`flex items-center gap-3 rounded-lg p-2 ${i === 1 ? 'bg-primary/10' : ''}`}>
                            <div className={`h-5 w-5 rounded ${i === 1 ? 'bg-primary/50' : 'bg-muted-foreground/20'}`} />
                            <div className={`h-3 rounded ${i === 1 ? 'w-16 bg-primary/50' : 'w-20 bg-muted-foreground/15'}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Main Area */}
                    <div className="flex-1 overflow-hidden p-6">
                      {/* Stats Cards */}
                      <div className="mb-6 grid grid-cols-2 gap-4 md:grid-cols-4">
                        {[
                          { color: 'bg-primary', label: 'Total Reports' },
                          { color: 'bg-accent', label: 'Active Meds' },
                          { color: 'bg-secondary', label: 'Health Score' },
                          { color: 'bg-warning', label: 'Alerts' },
                        ].map((stat, i) => (
                          <motion.div
                            key={i}
                            className="rounded-xl border border-border/50 bg-background/50 p-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + i * 0.1 }}
                          >
                            <div className={`mb-2 h-2 w-8 rounded ${stat.color}/30`} />
                            <div className="h-6 w-12 rounded bg-foreground/10" />
                            <div className="mt-1 h-3 w-16 rounded bg-muted-foreground/10" />
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Chart Area */}
                      <motion.div
                        className="h-40 rounded-xl border border-border/50 bg-background/50 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <div className="h-4 w-24 rounded bg-foreground/10" />
                          <div className="flex gap-2">
                            <div className="h-6 w-12 rounded bg-muted-foreground/10" />
                            <div className="h-6 w-12 rounded bg-muted-foreground/10" />
                          </div>
                        </div>
                        <div className="flex h-24 items-end justify-between gap-2">
                          {[40, 65, 45, 80, 55, 70, 85, 60, 75, 90, 70, 82].map((h, i) => (
                            <motion.div
                              key={i}
                              className="flex-1 rounded-t bg-gradient-to-t from-primary/60 to-primary/30"
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: 1.2 + i * 0.05, duration: 0.5 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -left-4 top-1/4 hidden rounded-xl border border-border bg-card p-4 shadow-xl md:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Heart className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Heart Rate</div>
                  <div className="font-semibold text-foreground">72 BPM</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -right-4 bottom-1/4 hidden rounded-xl border border-border bg-card p-4 shadow-xl md:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.7 }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">AI Analysis</div>
                  <div className="font-semibold text-foreground">All Normal</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border/50 bg-muted/30 py-12">
        <div className="container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-primary">Features</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything You Need to Manage Your Health
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful tools designed to give you complete clarity about your health journey.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 translate-y-[-8px] rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-medium text-primary">Benefits</span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Why Choose Healix?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Built for people who want to take control of their health data without 
                the complexity.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-2xl border border-border/50 bg-card p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <div>
                    <div className="font-semibold text-foreground">Sarah Mitchell</div>
                    <div className="text-sm text-muted-foreground">Using Healix for 2 years</div>
                  </div>
                </div>
                <blockquote className="text-lg text-foreground">
                  "Finally, I can see my entire health history in one place. The AI summaries 
                  help me understand my lab results without medical jargon. It's been a 
                  game-changer for managing my family's health."
                </blockquote>
                <div className="mt-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="h-5 w-5 fill-warning text-warning"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-2xl bg-primary/10" />
              <div className="absolute -right-4 -top-4 h-16 w-16 rounded-2xl bg-secondary/10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-br from-foreground to-foreground/90 p-8 text-center md:p-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/10">
              <Shield className="h-8 w-8 text-background" />
            </div>
            <h2 className="font-display text-3xl font-bold text-background md:text-4xl">
              Your Privacy is Our Priority
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-background/70">
              We use enterprise-grade security to protect your sensitive health data. 
              Your information is encrypted at rest and in transit.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-background/60">
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                <span>End-to-end encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Regular security audits</span>
              </div>
            </div>
            <div className="mt-10">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="h-12 bg-background px-8 text-foreground hover:bg-background/90"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">
                Healix
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <Link to="#" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="#" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="#" className="transition-colors hover:text-foreground">
                Security
              </Link>
              <Link to="#" className="transition-colors hover:text-foreground">
                Contact
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 Healix. All rights reserved.
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-muted px-4 py-3 text-center text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> Healix provides informational insights and
            does not replace professional medical advice. Always consult your
            healthcare provider.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
