import ms, { StringValue } from "ms";

/**
 * Convert a time string to seconds. Utilizes ms library to parse the time string.
 * @param time - The time string to convert
 * @returns The time in seconds
 */
export const sec = (time: StringValue) => ms(time) / 1000;
