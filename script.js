function chunkString(str, chunkLength) {
  if (str === null || typeof str !== 'string') return [];

  const result = [];
  for (let i = 0; i < str.length; i += chunkLength) {
    result.push(str.slice(i, i + chunkLength));
  }
  return result;
}
