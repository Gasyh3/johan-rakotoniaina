"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "#f5efeb",
  gradientBackgroundEnd = "#567cbd",
  pointerColor = "86, 124, 189",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  pointerColor?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);

  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);
  useEffect(() => {
    function move() {
      if (!interactiveRef.current) {
        return;
      }
      setCurX(curX + (tgX - curX) / 20);
      setCurY(curY + (tgY - curY) / 20);
      interactiveRef.current.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
    }

    move();
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (interactiveRef.current) {
      const rect = interactiveRef.current.getBoundingClientRect();
      setTgX(event.clientX - rect.left);
      setTgY(event.clientY - rect.top);
    }
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const toRgbValues = (color: string) => {
    if (color.startsWith("#")) {
      const hex = color.slice(1);
      const expanded =
        hex.length === 3
          ? hex
              .split("")
              .map((c) => c + c)
              .join("")
          : hex;
      const r = parseInt(expanded.slice(0, 2), 16);
      const g = parseInt(expanded.slice(2, 4), 16);
      const b = parseInt(expanded.slice(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    }
    return color;
  };

  const waveRgb = toRgbValues(gradientBackgroundEnd);
  const pointerRgb = toRgbValues(pointerColor);

  return (
    <div
      className={cn(
        "min-h-screen w-full relative overflow-hidden top-0 left-0",
        containerClassName
      )}
    >
      <div
        className={cn("absolute inset-0 overflow-hidden bg-gradient-to-b")}
        style={{
          backgroundImage: `linear-gradient(180deg, ${gradientBackgroundStart} 0%, ${gradientBackgroundStart} 45%, ${gradientBackgroundEnd} 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(circle at 70% 20%, rgba(${waveRgb}, 0.15), transparent 45%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 20% 10%, rgba(${waveRgb}, 0.15), transparent 40%)`,
          }}
        />
        <svg
          className="absolute bottom-[-6%] left-0 w-[200%] h-[55%]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{
            animation: "waveMove 22s ease-in-out infinite",
            color: `rgb(${waveRgb})`,
            opacity: 0.4,
          }}
        >
          <path
            fill="currentColor"
            d="M0,120 C150,200 350,40 600,120 C850,200 1050,40 1200,120 L1200,240 L0,240 Z"
          />
        </svg>
        <svg
          className="absolute bottom-[-10%] left-0 w-[200%] h-[60%]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{
            animation: "waveMoveAlt 18s ease-in-out infinite",
            color: `rgb(${waveRgb})`,
            opacity: 0.3,
          }}
        >
          <path
            fill="currentColor"
            d="M0,120 C150,60 350,180 600,120 C850,60 1050,180 1200,120 L1200,240 L0,240 Z"
          />
        </svg>
        <svg
          className="absolute bottom-[-14%] left-0 w-[200%] h-[65%]"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{
            animation: "waveMove 26s ease-in-out infinite reverse",
            color: `rgb(${waveRgb})`,
            opacity: 0.2,
          }}
        >
          <path
            fill="currentColor"
            d="M0,120 C200,190 300,50 500,120 C700,190 900,50 1100,120 L1200,240 L0,240 Z"
          />
        </svg>
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              "absolute w-full h-full -top-1/2 -left-1/2 opacity-60",
              isSafari ? "blur-lg" : "blur-2xl"
            )}
            style={{
              background: `radial-gradient(circle at center, rgba(${pointerRgb}, 0.3) 0, rgba(${pointerRgb}, 0) 45%)`,
              mixBlendMode: "soft-light",
            }}
          />
        )}
      </div>
      <div className={cn("relative z-10", className)}>{children}</div>
      <style jsx global>{`
        @keyframes waveMove {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-25%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes waveMoveAlt {
          0% {
            transform: translateX(-10%);
          }
          50% {
            transform: translateX(15%);
          }
          100% {
            transform: translateX(-10%);
          }
        }
      `}</style>
    </div>
  );
};
