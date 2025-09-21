import type React from "react";
import { cn } from "@/lib/utils";
import { GradientOverlay } from "./GradientOverlay";

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  showOrangeRed?: boolean;
  showBlueTeal?: boolean;
  customOverlays?: Array<{
    variant: "orange-red" | "blue-teal" | "custom";
    position: "bottom-left" | "top-center" | "custom";
    blur?: number;
    opacity?: number;
    size?: "sm" | "md" | "lg" | "xl";
    customGradient?: string;
    customPosition?: string;
  }>;
}

export function GradientBackground({
  children,
  className,
  showOrangeRed = true,
  showBlueTeal = true,
  customOverlays = [],
}: GradientBackgroundProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Default gradients matching your image */}
      {showOrangeRed && (
        <GradientOverlay
          variant="orange-red"
          position="bottom-left"
          blur={200}
          opacity={0.4}
          size="xl"
        />
      )}

      {showBlueTeal && (
        <GradientOverlay
          variant="blue-teal"
          position="top-center"
          blur={180}
          opacity={0.3}
          size="lg"
        />
      )}

      {/* Custom overlays */}
      {customOverlays.map((overlay, index) => (
        <GradientOverlay key={index} {...overlay} />
      ))}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
