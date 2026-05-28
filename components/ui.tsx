import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

export function Button({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}) {
  const sizes: Record<string, string> = {
    sm: "h-9  px-4  text-xs",
    md: "h-10 px-5  text-sm",
    lg: "h-11 px-7  text-sm",
  };
  const variants: Record<string, string> = {
    default: "bg-maroon text-white hover:bg-maroon/85 shadow-sm",
    ghost:   "bg-white/10 text-white hover:bg-white/20",
    outline: "border border-gold/40 bg-transparent text-gold hover:bg-gold/10",
  };
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium tracking-wide transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  );
}

export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/40 bg-white/60 p-6 shadow-card backdrop-blur-xl",
        className
      )}
      {...props}
    />
  );
}