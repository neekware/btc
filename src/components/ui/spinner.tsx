import { cn } from "@/lib/utils";

interface SpinnerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Spinner({ className, size = "md" }: SpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "text-primary animate-spin rounded-full border-2 border-current border-t-transparent",
          sizeClasses[size],
        )}
      />
    </div>
  );
}
