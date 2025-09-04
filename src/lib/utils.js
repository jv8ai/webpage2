export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function createPageUrl(page) {
  return `/${page}`;
}