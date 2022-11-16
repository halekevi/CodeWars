function reverseWords(str) {

    let wordsArr = str.split(" ").map(e => e.split("").reverse().join(""));
    return wordsArr.join(" ");
 }