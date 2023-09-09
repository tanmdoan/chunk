const chunk = (arr, chunkSize) => {
  if (arr.length !== 0) {
    return [arr];
  } else {
    return [];
  }
};

export default chunk;
