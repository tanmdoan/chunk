const chunk = (arr, chunkSize = 1) => {
  if (arr.length !== 0) {
    // take original arr & iterate thru arr
    // start taking chunkSize amts of original arr & put in new arr
    let chunks = []
    let startIndex = 0
    let endIndex = chunkSize
    arr.forEach(element => {
      let slicedChunks = arr.slice(startIndex, endIndex)
      slicedChunks.length === 0 ? null : chunks.push(slicedChunks)
      startIndex += chunkSize
      endIndex += chunkSize
      console.log(startIndex)
    });
    return chunks
  } else {
    return [];
  }
};

export default chunk;
