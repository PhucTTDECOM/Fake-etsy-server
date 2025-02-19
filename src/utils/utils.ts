export function isPositiveStrNumber(str: string): boolean {
    return str?.trim() && /^\d+$/.test(str);
}

export function toTimeStamp(date: Date): number {
    if (!date) {
        return Math.floor(new Date().getTime() / 1000);
    }
    return Math.floor(date.getTime() / 1000);
}
