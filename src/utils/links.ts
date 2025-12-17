// src/utils/link.ts
export const link = (path = "") => {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const cleanPath = path.replace(/^\/+/, "");
  return `${base}/${cleanPath}/`;
};
