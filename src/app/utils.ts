export function formatDate(input: Date) {
    return input.toLocaleDateString("en-UK", { day: "numeric", month: "short", year: "2-digit", })
}

export function formatTo2Decimals(input: string) {
    return parseFloat(input).toFixed(2);
}