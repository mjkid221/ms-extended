import { StringValue } from "ms";
import { min } from "./minutes";

/**
 * Convert a time string to hours. Utilizes sec function to convert the time string to seconds.
 * @param time - The time string to convert
 * @returns The time in hours
 */
export const hr = (time: StringValue) => min(time) / 60;
