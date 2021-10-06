const formatMiles = (miles, trailingZeros = 2) => {
  let format = '0';
  const parsed = parseFloat(miles);
  // eslint-disable-next-line no-self-compare
  if (parsed === parsed) {
    format = parsed.toFixed(trailingZeros);
  }
  return `${format} miles`;
};

const formatSeconds = (time) => {
  let format = '';
  if (time || time === 0) {
    const minutes = Math.floor(time / 60);
    const rmd = time % 60;
    const seconds = !!rmd || rmd === 0 ? ('' + rmd).padStart(2, '0') : '00';
    format = `${minutes}m ${seconds}s`;
  }
  return format;
};

export { formatMiles, formatSeconds };
