import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  Zap,
  LineChart,
  Pill,
  Eye,
  ChevronDown,
  Play,
  Star,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const features = [
    {
      icon: FileText,
      title: "Smart Report Upload",
      description: "Drop any medical document—PDFs, images, scans. Our AI extracts and organizes everything automatically.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Activity,
      title: "Body System Mapping",
      description: "See your health organized by organ system. Heart, liver, kidneys—each with its own dedicated view.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: LineChart,
      title: "Trend Analytics",
      description: "Watch your biomarkers evolve over months and years. Spot patterns before they become problems.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Sparkles,
      title: "AI Health Insights",
      description: "Complex medical jargon translated into plain language you can actually understand.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  const bodyParts = [
    { icon: Heart, label: "Heart", delay: 0 },
    { icon: Brain, label: "Brain", delay: 0.1 },
    { icon: Eye, label: "Vision", delay: 0.2 },
    { icon: Activity, label: "Vitals", delay: 0.3 },
    { icon: Pill, label: "Medications", delay: 0.4 },
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Cardiologist",
      image: "SC",
      text: "Finally, a platform that lets my patients understand their health data. The visualizations are exceptional.",
    },
    {
      name: "Michael Torres",
      role: "Patient",
      image: "MT",
      text: "I've been tracking my diabetes for 3 years with Healix. The trend charts helped me and my doctor optimize my treatment.",
    },
    {
      name: "Emily Johnson",
      role: "Family Caregiver",
      image: "EJ",
      text: "Managing health records for my elderly parents was overwhelming. Healix made it simple and stress-free.",
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating Navigation */}
      <motion.header
        className="fixed left-1/2 top-4 z-50 w-[95%] max-w-5xl -translate-x-1/2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <nav className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl md:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <motion.div
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className="h-5 w-5 text-white" />
            </motion.div>
            <span className="font-display text-xl font-bold">Healix</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {["Features", "How it Works", "Testimonials"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm" className="rounded-xl shadow-lg shadow-primary/25">
                Try Demo
                <Zap className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[80px]"
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

        <motion.div style={{ y, opacity }} className="container relative pb-20 pt-16 md:pt-24">
          <div className="mx-auto max-w-5xl">
            {/* Floating Pills */}
            <motion.div
              className="mb-8 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {bodyParts.map((part, i) => (
                <motion.div
                  key={part.label}
                  className="flex items-center gap-2 rounded-full border border-border/50 bg-background/50 px-4 py-2 text-sm font-medium backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + part.delay }}
                  whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                >
                  <part.icon className="h-4 w-4 text-primary" />
                  {part.label}
                </motion.div>
              ))}
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="font-display text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl">
                <span className="block">Your Health.</span>
                <span className="relative mt-2 block">
                  <span className="relative z-10 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Visualized.
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 right-0 h-4 w-full"
                    viewBox="0 0 400 20"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.path
                      d="M0 15 Q100 5 200 15 T400 15"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="50%" stopColor="hsl(var(--secondary))" />
                        <stop offset="100%" stopColor="hsl(var(--accent))" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                </span>
              </h1>

              <motion.p
                className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Upload your medical records once. Get a lifetime of clarity. 
                Healix transforms scattered health data into actionable insights.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="group h-14 gap-3 rounded-2xl px-8 text-base shadow-2xl shadow-primary/30 transition-all hover:shadow-primary/40"
                >
                  Explore Dashboard
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="h-14 gap-3 rounded-2xl px-8 text-base"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-2 text-muted-foreground"
              >
                <span className="text-xs">Scroll to explore</span>
                <ChevronDown className="h-5 w-5" />
              </motion.div>
            </motion.div>
          </div>

          {/* Floating Dashboard Preview */}
          <motion.div
            className="relative mx-auto mt-16 max-w-6xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl" />
              
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-[24px] border border-border/50 bg-card/80 shadow-2xl backdrop-blur-sm">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-border/50 bg-muted/50 px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="ml-4 flex-1 rounded-lg bg-background/50 px-4 py-1.5 text-xs text-muted-foreground">
                    app.healix.com/dashboard
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid gap-4 p-6 md:grid-cols-3">
                  {/* Health Score Card */}
                  <motion.div
                    className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div className="mb-4 text-sm font-medium text-muted-foreground">Health Score</div>
                    <div className="flex items-end gap-2">
                      <motion.span
                        className="text-5xl font-bold text-primary"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.4 }}
                      >
                        87
                      </motion.span>
                      <span className="mb-1 text-sm text-muted-foreground">/100</span>
                    </div>
                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-primary/20">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ delay: 1.5, duration: 1 }}
                      />
                    </div>
                  </motion.div>

                  {/* Stats Cards */}
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 }}
                  >
                    <div className="rounded-2xl border border-border/50 bg-background/50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Reports</span>
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="mt-1 text-2xl font-bold">24</div>
                    </div>
                    <div className="rounded-2xl border border-border/50 bg-background/50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Insights</span>
                        <Sparkles className="h-4 w-4 text-secondary" />
                      </div>
                      <div className="mt-1 text-2xl font-bold">12</div>
                    </div>
                  </motion.div>

                  {/* Mini Chart */}
                  <motion.div
                    className="rounded-2xl border border-border/50 bg-background/50 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-sm font-medium">Glucose Trend</span>
                      <TrendingUp className="h-4 w-4 text-accent" />
                    </div>
                    <div className="flex h-24 items-end justify-between gap-1">
                      {[65, 72, 68, 85, 76, 82, 78, 88, 84, 90, 86, 92].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-t-sm bg-gradient-to-t from-accent to-accent/50"
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 1.6 + i * 0.05, duration: 0.4 }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -left-8 top-1/3 hidden rounded-2xl border border-border bg-card p-4 shadow-xl lg:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-500">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Heart Rate</div>
                    <div className="text-lg font-bold">72 BPM</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-8 bottom-1/3 hidden rounded-2xl border border-border bg-card p-4 shadow-xl lg:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">AI Analysis</div>
                    <div className="flex items-center gap-1 text-lg font-bold text-accent">
                      <Check className="h-4 w-4" />
                      Normal
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 md:py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="h-4 w-4" />
              Powerful Features
            </motion.div>
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Everything you need to
              <span className="block text-primary">understand your health</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Gradient Background */}
                <div className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-3xl transition-all group-hover:opacity-20`} />
                
                <div className="relative">
                  <motion.div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <h3 className="mb-3 font-display text-2xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="relative overflow-hidden bg-muted/30 py-24 md:py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Three steps to
              <span className="block text-primary">total clarity</span>
            </h2>
          </motion.div>

          <div className="relative mt-20">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary via-secondary to-accent md:block" />

            <div className="space-y-12 md:space-y-24">
              {[
                {
                  step: "01",
                  title: "Upload Any Document",
                  description: "Drop PDFs, photos of prescriptions, lab results, or medical images. We accept it all.",
                  icon: Upload,
                },
                {
                  step: "02",
                  title: "AI Processes & Organizes",
                  description: "Our AI reads, extracts key data points, and categorizes everything by body system.",
                  icon: Sparkles,
                },
                {
                  step: "03",
                  title: "Track & Understand",
                  description: "View trends over time, get plain-language insights, and share with your doctors.",
                  icon: TrendingUp,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className={`flex flex-col items-center gap-8 md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-6xl font-bold text-primary/20">{item.step}</span>
                    <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">{item.title}</h3>
                    <p className="mt-3 text-lg text-muted-foreground">{item.description}</p>
                  </div>
                  <motion.div
                    className="relative flex h-32 w-32 items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-20 blur-xl" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary shadow-xl">
                      <item.icon className="h-10 w-10 text-white" />
                    </div>
                  </motion.div>
                  <div className="hidden flex-1 md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
              Loved by patients
              <span className="block text-primary">and professionals</span>
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6 flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="mb-6 text-lg text-foreground">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container">
          <motion.div
            className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-primary via-secondary to-accent p-12 text-center md:p-20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Floating Shapes */}
            <motion.div
              className="absolute left-10 top-10 h-20 w-20 rounded-full bg-white/10"
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-white/10"
              animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="relative">
              <motion.div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Shield className="h-10 w-10 text-white" />
              </motion.div>
              <h2 className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                Ready to take control?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
                Start organizing your health data today. It takes less than a minute to get started.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/dashboard">
                  <Button
                    size="lg"
                    className="h-14 gap-3 rounded-2xl bg-white px-10 text-base font-semibold text-primary shadow-xl hover:bg-white/90"
                  >
                    Get Started Free
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold">Healix</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <Link to="#" className="transition-colors hover:text-foreground">Privacy</Link>
              <Link to="#" className="transition-colors hover:text-foreground">Terms</Link>
              <Link to="#" className="transition-colors hover:text-foreground">Security</Link>
              <Link to="#" className="transition-colors hover:text-foreground">Contact</Link>
            </div>

            <div className="text-sm text-muted-foreground">
              © 2025 Healix
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-muted/50 px-6 py-4 text-center text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> Healix provides informational insights and does not replace professional medical advice.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
