export const isJson = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const loadFile = (filePath) => {
  const raw = readFileSync(filePath);
  const data = JSON.parse(raw);
  return data;
}
