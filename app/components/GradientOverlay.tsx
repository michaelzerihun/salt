import { cn } from "@/lib/utils";

interface GradientOverlayProps {
  variant: "orange-red" | "blue-teal" | "custom";
  position: "bottom-left" | "top-center" | "custom";
  blur?: number;
  opacity?: number;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  customGradient?: string;
  customPosition?: string;
  sticky?: boolean;
}

const gradientVariants = {
  "orange-red": "from-[#FC6F32] to-[#FF4A59]",
  "blue-teal": "from-[#32BFFC] to-[#005577]",
  custom: "",
};

const positionVariants = {
  "bottom-left": "bottom-50 left-70 translate-x-[-25%] translate-y-[25%]",
  "top-center": "top-0 left-1/2 translate-x-[-50%] translate-y-[-25%]",
  custom: "",
};

const sizeVariants = {
  sm: "w-64 h-64",
  md: "w-96 h-96",
  lg: "w-[32rem] h-[32rem]",
  xl: "w-[40rem] h-[40rem]",
};

export function GradientOverlay({
  variant,
  position,
  blur = 200,
  opacity = 0.6,
  size = "lg",
  className,
  customGradient,
  customPosition,
  sticky = false,
}: GradientOverlayProps) {
  const gradientClass =
    variant === "custom" ? customGradient : gradientVariants[variant];
  const positionClass =
    position === "custom" ? customPosition : positionVariants[position];

  return (
    <div
      className={cn(
        sticky ? "fixed" : "absolute",
        "pointer-events-none rounded-full bg-gradient-to-br z-0",
        gradientClass,
        positionClass,
        sizeVariants[size],
        className
      )}
      style={{
        filter: `blur(${blur}px)`,
        opacity: opacity,
      }}
    />
  );
}
