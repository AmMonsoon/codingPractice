
//time complexity = O(n)
//space complexity = O log n
const sortedSquaredArray = array =>{
    return arr.map(el => el * el).sort((a,b) => a - b)
}

