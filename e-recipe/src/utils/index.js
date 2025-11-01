import { clsx} from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isMobile() {
    // TODO: Implement a simple check if the device is mobile based on window width
}

export function scrollToTop() {
    // TODO: Implement a function to scroll to the top of the page
}