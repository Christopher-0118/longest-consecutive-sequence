function getConsecutiveLength(set, iterator) {
  let value = iterator;
  let consecutiveLength = 1;
  
  while (set.has(value + 1)) {
    consecutiveLength++;
    value++;
  }
  return consecutiveLength;
}

module.exports = function longestConsecutiveLength(array) {
  let set = new Set(array);
  let setSize = set.size;
  let sequenceLength = 0;
  let consecutiveLength;
  
  if (setSize === 0 || setSize === 1) {
    return setSize;
  }
  for (let iterator of set.values()) {
    if (!set.has(iterator - 1)) {
      consecutiveLength = getConsecutiveLength(set, iterator);
      if (sequenceLength < consecutiveLength) {
        sequenceLength = consecutiveLength;
      }
    }  
  }
  return sequenceLength;
}
