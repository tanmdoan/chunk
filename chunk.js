const chunk = (inputs, chunkSize = 1) => {
  if (inputs.length === 0) return []

  let startIndex = 0
  let endIndex = chunkSize

  return inputs.map(element => {
    let slicedChunks = inputs.slice(startIndex, endIndex)
    startIndex += chunkSize
    endIndex += chunkSize
    if (slicedChunks.length !== 0) {
      return slicedChunks
    }
  }).filter(Boolean);
};

export default chunk;
