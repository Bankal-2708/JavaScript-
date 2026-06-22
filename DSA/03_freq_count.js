function freqCount(str){
  let freq={}

  for(const char of str){
    freq[char] = (freq[char] || 0) +1
  }
  return freq
}

console.log(freqCount("hello"))