import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge className values with Tailwind-aware conflict resolution.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
