import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Smartphone, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const Login = () => {
  const [nic, setNic] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [step, setStep] = useState<"nic" | "otp" | "loading">("nic");

  const handleSendOtp = () => {
    if (nic.length < 10) {
      toast({
        title: "Invalid NIC",
        description: "Please enter a valid NIC number.",
        variant: "destructive",
      });
      return;
    }
    setStep("loading");
    setTimeout(() => setStep("otp"), 1500);
  };

  const handleVerifyOtp = () => {
    setStep("loading");
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero p-4">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full max-w-md"
      >
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <motion.div
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-xl font-bold text-primary-foreground">H</span>
          </motion.div>
          <span className="font-display text-2xl font-bold text-foreground">
            Healix
          </span>
        </Link>

        {/* Login Card */}
        <motion.div
          className="card-elevated p-8"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {/* Demo notice */}
          <div className="mb-6 rounded-xl bg-warning/10 px-4 py-3 text-center">
            <p className="text-sm font-medium text-warning-foreground">
              Demo Only — No real login required
            </p>
          </div>

          {step === "nic" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h1 className="font-display text-2xl font-bold text-foreground">
                Welcome to Healix
              </h1>
              <p className="mt-2 text-muted-foreground">
                Enter your NIC to access your health profile
              </p>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  NIC Number
                </label>
                <input
                  type="text"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                  placeholder="Enter your NIC"
                  className="h-12 w-full rounded-xl border border-input bg-background px-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button
                variant="hero"
                size="lg"
                className="mt-6 w-full"
                onClick={handleSendOtp}
              >
                Send OTP
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {step === "otp" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <Smartphone className="h-6 w-6 text-accent" />
              </div>

              <h1 className="font-display text-2xl font-bold text-foreground">
                Enter OTP
              </h1>
              <p className="mt-2 text-muted-foreground">
                We sent a verification code to your phone
              </p>

              <div className="mt-6 flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <motion.input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    className="h-14 w-12 rounded-xl border border-input bg-background text-center text-xl font-semibold text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  />
                ))}
              </div>

              <Button
                variant="hero"
                size="lg"
                className="mt-6 w-full"
                onClick={handleVerifyOtp}
              >
                Continue to Dashboard
                <ArrowRight className="h-5 w-5" />
              </Button>

              <button
                className="mt-4 w-full text-sm text-muted-foreground hover:text-foreground"
                onClick={() => setStep("nic")}
              >
                Use different NIC
              </button>
            </motion.div>
          )}

          {step === "loading" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center py-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Loader2 className="h-12 w-12 text-primary" />
              </motion.div>
              <p className="mt-4 text-muted-foreground">Please wait...</p>
            </motion.div>
          )}
        </motion.div>

        {/* Skip to demo */}
        <div className="mt-6 text-center">
          <Link
            to="/dashboard"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Skip to demo dashboard →
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
