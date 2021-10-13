function isValidSubsequence(array, sequence) {
    let current = 0
    let next = 0
    let arr = []

    if (sequence.length > array.length) return false

    while (current < sequence.length) {
        if (next > array.length) {
            current++
            next = 0
        }
        if (sequence[current] === array[next]) {
            arr.push(next)
            current++
            next++
        } else {
            next++
        }
    }
    if (!arr.length) return false
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
        if (arr.length < sequence.length) return false
        if (arr.length > sequence.length) return false
        if (arr[i] > arr[i + 1]) return false
    }
    return true
}

  //hello
