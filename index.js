function fearNotLetter(str) {
  const firstLetter = str[0];

  const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  let firstStrLetIndexinAlph = alph.indexOf(firstLetter);
  console.log(firstStrLetIndexinAlph)

  for(let i =0; i< str.length; i++) {
    if(str[i] !== alph[firstStrLetIndexinAlph]) {
      return alph[firstStrLetIndexinAlph]
    }  
    firstStrLetIndexinAlph++;
    console.log(firstStrLetIndexinAlph)
  }
  return undefined;
}


fearNotLetter("abce") // should return "d".

fearNotLetter("abcdefghjklmno") //should return "i".

fearNotLetter("stvwx")// should return "u".

fearNotLetter("bcdf") //should return "e".

fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.