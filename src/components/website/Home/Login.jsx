import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, School } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log("FormData: ", formData);
  };

  return (
    <div className="h-[87.9vh] flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-600 to-pink-500 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/20 backdrop-blur-md shadow-xl rounded-2xl p-8 md:p-10 border border-white/30 z-10"
      >
        <div className="flex flex-col items-center gap-4 mb-8">
          <School className="w-12 h-12 text-white drop-shadow-lg" />
          <h2 className="text-3xl font-bold text-white tracking-wide">
            Welcome Back
          </h2>
          <p className="text-sm text-white/80">
            Sign in to continue to your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div className="space-y-1">
            <Label htmlFor="email" className="text-white">
              Email Address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={`pl-10 bg-white/10 text-white border-b-2 placeholder:text-white/60 ${
                  errors.email ? "border-red-400" : "border-white/30"
                } focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-300">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                className={`pl-10 pr-10 bg-white/10 text-white border-b-2 placeholder:text-white/60 ${
                  errors.password ? "border-red-400" : "border-white/30"
                } focus-visible:ring-0 focus-visible:ring-offset-0`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 4,
                    message: "Password must be at least 4 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff size={18} className="cursor-pointer" />
                ) : (
                  <Eye size={18} className="cursor-pointer" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-sm text-red-300">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me & Forgot */}
          <div className="flex items-center justify-end text-white/80 text-sm">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              type="submit"
              className="w-full mt-2 bg-white/20 cursor-pointer text-white font-semibold py-3 rounded-xl hover:bg-white/30 transition-all duration-200 backdrop-blur-md"
            >
              Sign In
            </Button>
          </motion.div>
        </form>
      </motion.div>

      {/* Animation pattern. */}
      <Animation />
    </div>
  );
};

export default LoginPage;

const Animation = () => {
  return (
    <>
      <div className="circles">
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
        <div className="circle text-white text-center" />
      </div>
    </>
  );
};
