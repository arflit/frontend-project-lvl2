import path from 'path';
import { existsSync, readFileSync } from 'fs';

const loadFile = (filePath) => {
  const raw = readFileSync(filePath);
  const data = JSON.parse(raw);
  return data;
}
const compareJsons = (filepath1, filepath2) => {
  if (!existsSync(filepath1) || !existsSync(filepath2)) {
    throw new Error('file is not found')
  }
  
  console.log(loadFile(filepath1))
}


export default compareJsons;