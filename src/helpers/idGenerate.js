export const idGenerate = arr => {
  if (arr?.length > 0) {
    return arr.length + 1;
  }
  return 1;
};
