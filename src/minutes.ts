import { StringValue } from "ms";
import { sec } from "./seconds";

/**
 * Convert a time string to minutes. Utilizes sec function to convert the time string to seconds.
 * @param time - The time string to convert
 * @returns The time in minutes
 */
export const min = (time: StringValue) => sec(time) / 60;
