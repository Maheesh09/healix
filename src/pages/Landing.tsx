import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  FileText,
  Activity,
  TrendingUp,
  Shield,
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Folder,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const features = [
  {
    icon: FileText,
    title: "Complete Health Records",
    description: "All your medical reports organized in one secure place for lifetime access.",
  },
  {
    icon: Activity,
    title: "Body System Insights",
    description: "View health data organized by body systems for better understanding.",
  },
  {
    icon: TrendingUp,
    title: "Health Trend Analysis",
    description: "Track your biomarkers over time with interactive visual charts.",
  },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Modern Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <nav className="container flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              src="/logo.png"
              alt="Healix Logo"
              className="h-10 w-10 object-contain"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="font-display text-2xl font-bold text-white">
              Healix
            </span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden md:block">
              <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button className="rounded-full bg-white px-6 text-primary hover:bg-white/90">
                Get Started
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-[90vh] overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -right-32 top-20 h-[600px] w-[600px] rounded-full bg-white/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full bg-white/5"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="absolute right-1/4 top-1/3 h-3 w-3 rounded-full bg-white/40"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute left-1/3 top-1/4 h-2 w-2 rounded-full bg-white/30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10 flex min-h-[90vh] items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-xl pt-20"
            >
              <motion.div
                variants={fadeInUp}
                className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                <Heart className="h-4 w-4" />
                Your Health, Simplified
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-display text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
              >
                Smart and
                <br />
                Secure Health
                <br />
                <span className="text-white/80">PROFILE</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg leading-relaxed text-white/80"
              >
                Understand, track and organize your complete medical history in one 
                secure digital profile. Access your health data anytime, anywhere.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-4">
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="rounded-full bg-white px-8 text-primary shadow-lg hover:bg-white/90"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img
                src={heroIllustration}
                alt="Healthcare Illustration"
                className="w-full max-w-2xl h-150 ml-auto"
              />
            </motion.div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="py-20 overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Say Goodbye to <span className="text-destructive">Report Chaos</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Transform the way you manage your health records
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2 items-center">
            {/* Messy Reports - Before */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-destructive/10 to-warning/10 p-8 border-2 border-dashed border-destructive/30">
                <div className="absolute -top-4 left-6 bg-destructive text-destructive-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Without Healix
                </div>
                
                {/* Scattered Papers Animation */}
                <div className="relative h-64 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute bg-card shadow-lg rounded-lg p-3 border border-border"
                      style={{
                        width: '120px',
                        left: `${10 + (i % 3) * 30}%`,
                        top: `${10 + Math.floor(i / 3) * 45}%`,
                        rotate: `${(i - 3) * 8}deg`,
                      }}
                      animate={{
                        y: [0, -5, 0],
                        rotate: [`${(i - 3) * 8}deg`, `${(i - 3) * 10}deg`, `${(i - 3) * 8}deg`],
                      }}
                      transition={{
                        duration: 3,
                        delay: i * 0.2,
                        repeat: Infinity,
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Folder className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground truncate">Report_{i + 1}.pdf</span>
                      </div>
                      <div className="space-y-1">
                        <div className="h-1.5 bg-muted rounded w-full" />
                        <div className="h-1.5 bg-muted rounded w-3/4" />
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Confusion Icon */}
                  <motion.div
                    className="absolute bottom-4 right-4 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/20"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </motion.div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-destructive">✗</span> Scattered across devices
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-destructive">✗</span> Hard to find when needed
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-destructive">✗</span> No insights or trends
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Organized Healix - After */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 border-2 border-primary/30">
                <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
                  With Healix
                </div>
                
                {/* Organized Dashboard Preview */}
                <div className="relative h-64 bg-card rounded-2xl shadow-lg overflow-hidden border border-border">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                          <Heart className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium text-foreground text-sm">Your Health Profile</span>
                      </div>
                      <motion.div
                        className="px-2 py-1 bg-accent/20 rounded-full text-xs text-accent font-medium"
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        All Synced
                      </motion.div>
                    </div>
                    
                    {/* Mini Cards */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {['Blood', 'Heart', 'Kidney'].map((label, i) => (
                        <motion.div
                          key={label}
                          className="p-2 rounded-lg bg-muted/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          <div className="text-xs text-muted-foreground">{label}</div>
                          <div className="text-sm font-semibold text-foreground">Normal</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Mini Chart */}
                    <div className="h-16 flex items-end gap-1">
                      {[40, 65, 55, 80, 70, 90, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 bg-primary/30 rounded-t"
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          transition={{ delay: 0.5 + i * 0.05, duration: 0.5 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> All reports in one place
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> Organized by body system
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="text-accent">✓</span> AI-powered health insights
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transformation Arrow */}
          <motion.div
            className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 items-center"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-primary rounded-full p-3 shadow-glow">
              <ArrowRight className="h-6 w-6 text-primary-foreground" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-4 text-muted-foreground">
              Powerful features to manage your health journey
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group rounded-2xl bg-card p-8 shadow-lg transition-all hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
                Your Health Journey, <span className="text-primary">Simplified</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Healix is your lifelong digital health companion. We help you organize, 
                understand, and track your medical records with AI-powered insights. 
                Take control of your health data today.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="rounded-full">
                    Explore Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-secondary p-10 text-center md:p-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Shield className="mx-auto mb-6 h-16 w-16 text-white/80" />
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Take Control of Your Health Data
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Start your lifelong digital health profile today. 
              Secure, private, and always accessible.
            </p>
            <div className="mt-8">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="rounded-full bg-white px-10 text-primary hover:bg-white/90"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer id="contact" className="bg-foreground text-background">
        <div className="container py-16">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                  <span className="text-lg font-bold text-primary-foreground">H</span>
                </div>
                <span className="font-display text-xl font-bold">Healix</span>
              </div>
              <p className="text-sm text-background/70 leading-relaxed">
                Your lifelong digital health profile. Understand, track, and organize 
                your medical history in one secure place.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li><Link to="/dashboard" className="hover:text-background transition-colors">Dashboard</Link></li>
                <li><Link to="/reports" className="hover:text-background transition-colors">Reports</Link></li>
                <li><Link to="/trends" className="hover:text-background transition-colors">Trends</Link></li>
                <li><Link to="/upload" className="hover:text-background transition-colors">Upload</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider">
                Support
              </h4>
              <ul className="space-y-3 text-sm text-background/70">
                <li><Link to="#" className="hover:text-background transition-colors">Help Center</Link></li>
                <li><Link to="#" className="hover:text-background transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-background transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-background transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-6 font-display text-sm font-semibold uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-background/70">
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@healix.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span>123 Health Street, Medical City, MC 12345</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-background/10 pt-8 md:flex-row">
            <p className="text-sm text-background/60">
              © 2025 Healix. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-background/10 text-background/70 hover:bg-primary hover:text-primary-foreground transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 rounded-xl bg-background/5 px-6 py-4 text-center text-sm text-background/60">
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
