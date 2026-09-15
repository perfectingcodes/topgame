import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DATE_FMT = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

/** Formats an ISO `YYYY-MM-DD` string without tripping over local timezones. */
export function formatDate(iso: string) {
  return DATE_FMT.format(new Date(`${iso}T12:00:00Z`));
}
