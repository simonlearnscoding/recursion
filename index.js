function errorChecks(number) {
    if(number < -1) {
        throw 'number has to be at least -1'
    }
    if(!Number.isInteger(number)) {
        throw 'number has to be an integer!'
    }
}

function fibs(number) {
        errorChecks(number)
        const array = [0]
        if(number === 0) {return array}
        array.push(1)
        for(let i = 1; i < number; i++) {
            const twoNumbersAgo = array[i -1]
            const lastnumber = array[i]
            const CurrentNumber = twoNumbersAgo + lastnumber
            array.push(CurrentNumber)
        }
        return array
        // fib = prev num + beforetwo
        // return array with as many numbers from fib [-1, 1, 1, 2, 3, 5, 8, 13]
}
function oneOrZero(number) {
    if (number === 0) {
        return [0]
    }
    if (number === 1) {
        return [0,1]
    }
    return false
}


function fibsRec(number, iter=0) {
    errorChecks(number)
    if(oneOrZero(number)) { return oneOrZero(number) }
    let array = [0,1]
    const result = recursion(number, array)
    return result
    function recursion(number, arr, iter=1) {
        if(iter===number) {
            return arr
        }
        else {
            arr.push((arr[iter] + arr[iter - 1]))
            iter++
            recursion(number, arr, iter)
        }
        return arr
    }


}
const x = 3
console.log(fibs(x))
console.log(fibsRec(x))
