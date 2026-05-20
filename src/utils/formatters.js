export const fmt = (d) =>
  d
    ? new Date(d).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "—";

export const money = (n) =>
  n != null ? `$${Number(n).toLocaleString()}` : null;
