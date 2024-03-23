import wordbank from "./wordbank.txt"
export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
]  

export const generateWordSet = async() => {
  let wordSet;
  await fetch(wordbank)
  .then((response) => response.text())
  .then((result) => {
    const wordArr = result.split("\r\n")
    wordSet = new Set(wordArr)
  })
  return {wordSet}
}
