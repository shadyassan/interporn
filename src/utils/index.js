export const getStyleString = (value, property, unit = '') => {
  if (!value) return;
  return `${property}: ${value}${unit};`;
};

export const truncateString = (txt, limit = 55) => {
  if (txt?.length) {
    return txt?.length > limit ? txt?.substr(0, limit) + '...' : txt;
  }
  return '';
};

export const shimmer = (w, h) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#1A1D27" offset="20%" />
        <stop stop-color="#333" offset="50%" />
        <stop stop-color="#1A1D27" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const blurDataURL = (width, height) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
};

export const timeFormat = (seconds) => {
  if (isNaN(seconds)) {
    return `00:00`;
  }
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, '0');
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, '0')}:${ss}`;
  }
  return `${mm}:${ss}`;
};

export const sortBy = [
  {
    value: { orderBy: 'title', sortedBy: 'desc' },
    name: 'Recent',
  },
  {
    value: { orderBy: 'title', sortedBy: 'asc' },
    name: 'Ascending',
  },
];
