export function isPositiveStrNumber(str: string): boolean {
    return str?.trim() && /^\d+$/.test(str);
}

export function toTimeStamp(date: Date): number {
    if (!date) {
        return Math.floor(new Date().getTime() / 1000);
    }
    return Math.floor(date.getTime() / 1000);
}

export function generateOAuthCode(baseCode: string): string {
    const arrCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const codeLength = 32;
    let code = '';
    for (let i = 0; i < codeLength; i++) {
        code += arrCharacters.charAt(Math.floor(Math.random() * arrCharacters.length));
    }
    return `${code}${baseCode}`;
}
