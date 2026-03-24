export const stripTrailingListPeriod = (text: string) => {
  return text.trim().replace(/\.+$/g, "");
};
