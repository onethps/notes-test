export const formatDate = (iso: string) =>
  new Date(Number(iso)).toLocaleString();
