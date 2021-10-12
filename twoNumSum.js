function twoNumberSum(array, targetSum) {
    let current = 0
      let rest = 1
      while (current < array.length){
          if (rest > array.length){
              current++
              rest = current + 1
          }
          if (array[current] + array[rest] === targetSum){
              return [array[current], array[rest]]
          }else{
              rest++
          }
      }
      return []
  }
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  function twoNumberSum(array, targetSum) {
    let current = 0
      let rest = 1
      let results = []
      while (current < array.length){
          if (rest > array.length){
              current++
              rest = current + 1
          }
          if (array[current] + array[rest] === targetSum){
              results.push(array[current], array[rest])
              rest++
          }else{
              rest++
          }
      }
      return results
  }