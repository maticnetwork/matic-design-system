export const truncateString = (string = '', maxCharCount = string.length, initialCharCount = 0, endCharCount = 0) => {
    return string.length > maxCharCount ?
        `${string.substr(0, initialCharCount)}...${string.substr(string.length - endCharCount, string.length)}`
        : string;
}
