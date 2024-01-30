function getArrayParams(...arr) {
   return {
    min: Math.min (...arr), 
    max: Math.max(...arr), 
    avg: Number((arr.reduce((acc, number)=> acc + number,0)/ arr.length).toFixed(2))};
}

function summElementsWorker(...arr) {

return arr.reduce((acc, number)=> acc + number, 0);
}

function differenceMaxMinWorker(...arr) {
  return arr.length === 0 ? 0 : Math.max(...arr) - Math.min(...arr);

}

function differenceEvenOddWorker(...arr) {
const sumEvenNumbers = arr.filter(item => !item % 2 === 0).reduce((acc, number) => acc + number,0);
const sumOddNumbers = arr.filter(item => !item % 2 !== 0).reduce((acc, number) => acc + number,0);

return arr.length === 0 ? 0 : sumEvenNumbers - sumOddNumbers;
}

function averageEvenElementsWorker(...arr) {
  return arr 
  .filter(item => !item % 2 === 0)
  .reduce((acc,number,index,filteredArray) => acc + number / filteredArray.lenger, 0 );

}

function makeWork (arrOfArr, func) {
  function compareArrays(arr1, arr2) {
    if (arr1.length===arr2.length && arr1.every((element, index) => element === arr2[index]) ){
    return true
    }
    return false
    }
}
