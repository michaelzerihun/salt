"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  initialVariant: "outline" | "default";
  onHoverVariant: "outline" | "default";
  gradientFrom?: string; // Optional gradient start color
  gradientVia?: string; // Optional gradient middle color
  gradientTo?: string; // Optional gradient end color
  className?: string; // Optional additional Tailwind classes
}

export default function GradientButton({
  children,
  initialVariant,
  onHoverVariant,
  gradientFrom = "#963488",
  gradientVia = "#FC6F32",
  gradientTo = "#FF4A59",
  className = "",
}: GradientButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const currentVariant = isHovered ? onHoverVariant : initialVariant;

  const baseClasses = `rounded-full px-6 py-2 text-white hover:opacity-90 transition-opacity ${className}`;

  const outlineVariant = (
    <Button
      variant="outline"
      className={`bg-transparent border-2 border-[${gradientTo}] ${baseClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Button>
  );

  const defaultVariant = (
    <Button
      variant="default"
      className={`bg-gradient-to-r from-[${gradientFrom}] via-[${gradientVia}] to-[${gradientTo}] ${baseClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </Button>
  );

  return currentVariant === "outline" ? outlineVariant : defaultVariant;
}
