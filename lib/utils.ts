import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS =[
  //HEX codes
  "#DC2626",
  "#EF4444",
  "#F87171",
  "#FBBF24",
  "#FCD34D",
  "#FDE68A",
  "#A3E635",
  "#6EE7B7",
  "#93C5FD",
  "#60A5FA",
  "#3B82F6",
  "#2563EB",
  "#7C3AED",
  "#9333EA",
  "#F472B6",
  "#ED64A6",
  "#EC4899",
  "#DB2777",
  "#9F5F80",
  "#6B7280",
  "#4B5563",
  "#374151",
] 

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string{
  return COLORS[connectionId % COLORS.length];
}
