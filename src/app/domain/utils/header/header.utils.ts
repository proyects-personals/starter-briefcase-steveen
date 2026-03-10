export const getInitials = (nombre?: string, apellido?: string): string =>
  `${nombre?.trim()[0] ?? ""}${apellido?.trim()[0] ?? ""}`.toUpperCase();
