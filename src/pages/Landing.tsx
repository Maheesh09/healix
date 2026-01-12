import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Upload,
  Brain,
  TrendingUp,
  Shield,
  FileText,
  Activity,
  ArrowRight,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/HeroSlider";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
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
    title: "Lifelong Health Record",
    description:
      "All your medical reports, lab results, and health data in one secure place—organized for life.",
  },
  {
    icon: Activity,
    title: "Anatomy-Based Organization",
    description:
      "View your health by body system. Heart, brain, lungs—understand each part of you.",
  },
  {
    icon: TrendingUp,
    title: "Visual Health Trends",
    description:
      "Interactive charts show how your biomarkers change over time. Spot patterns early.",
  },
  {
    icon: Sparkles,
    title: "Smart Insights",
    description:
      "AI-powered summaries explain your results in simple, non-clinical language.",
  },
];

const steps = [
  {
    number: "01",
    title: "Upload your reports",
    description:
      "Drag & drop PDFs, images, or forward from WhatsApp. We handle the rest.",
  },
  {
    number: "02",
    title: "AI organizes by body system",
    description:
      "Our AI reads, extracts, and categorizes every value into the right body system.",
  },
  {
    number: "03",
    title: "Track health trends over time",
    description:
      "Watch your glucose, cholesterol, and more evolve. Stay informed, stay healthy.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <nav className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              src="/logo.png"
              alt="Healix Logo"
              className="h-9 w-9 object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="font-display text-xl font-bold text-foreground">
              Healix
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              to="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              How it works
            </Link>
            <Link to="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="hero" size="sm">
                Sign Up
              </Button>
            </Link>
          </div>

          <Link to="/dashboard" className="md:hidden">
            <Button variant="hero" size="sm">
              Demo
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-secondary/5 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], rotate: [0, -90, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="container relative">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            

            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              Your Lifelong{" "}
              <span className="text-gradient-primary">Digital Health</span>{" "}
              Profile
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg text-muted-foreground md:text-xl"
            >
              Understand, track and organize your complete medical history in one
              secure place.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link to="/dashboard">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  View Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/upload">
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  <Upload className="h-5 w-5" />
                  Upload Report
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Hero Image Slider */}
          <HeroSlider autoPlayInterval={5000} />
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              How Healix Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three simple steps to a complete picture of your health
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="card-elevated p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-lg font-bold text-primary-foreground">
                    {step.number}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-muted-foreground/30 md:block">
                    <ChevronRight className="h-8 w-8" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-muted/30 py-20 md:py-28">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features designed to give you clarity about your health
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="card-elevated group p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-gradient-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-primary p-8 text-center md:p-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Shield className="mx-auto mb-6 h-16 w-16 text-primary-foreground/80" />
            <h2 className="font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Take Control of Your Health Data
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
              Join thousands who are already organizing their health records with
              Healix. Start your lifelong digital health profile today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/dashboard">
                <Button
                  variant="glass"
                  size="xl"
                  className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  Explore Demo
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-sm font-bold text-primary-foreground">H</span>
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Healix
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <Link to="#" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link to="#" className="hover:text-foreground">
                Terms of Service
              </Link>
              <Link to="#" className="hover:text-foreground">
                Contact
              </Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 Healix. All rights reserved.
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-warning/10 px-4 py-3 text-center text-sm text-warning-foreground">
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
