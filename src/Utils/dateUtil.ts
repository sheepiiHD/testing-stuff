export const getMaxDaysInMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 0).getDate();
