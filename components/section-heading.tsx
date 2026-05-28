import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow && (
        <p className="ornament mb-4 text-[10px] uppercase tracking-[0.42em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-serif text-[clamp(1.9rem,4vw,3rem)] font-light leading-tight",
          light ? "text-white" : "text-maroon"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-xl text-[15px] leading-7",
            light ? "text-white/60" : "text-ink/60"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}