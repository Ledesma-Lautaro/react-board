import { Camera } from "@/types/canvas";
import { type ClassValue, clsx } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

const COLORS =[
  //HEX codes
  "#DC2626",
  "#F87171",
  "#FBBF24",
  "#FDE68A",
  "#A3E635",
  "#6EE7B7",
  "#93C5FD",
  "#3B82F6",
  "#2563EB",
  "#7C3AED",
  "#9333EA",
  "#ED64A6",
  "#EC4899",
  "#DB2777",
  "#9F5F80",
  "#6B7280",
  "#374151",
] 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string{
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera,
){
  return {
    x: Math.round(e.clientX - camera.x),
    y: Math.round(e.clientY - camera.y),
  }
}