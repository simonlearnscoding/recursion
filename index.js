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
            return
        }
        else {
            arr.push((arr[iter] + arr[iter - 1]))
            iter++
            recursion(number, arr, iter)
        }
        return arr
    }


}


const arrayTest = [5,0,6, 4, 2, 1, 5, 3, 12, 9, 22, 4]

class mergeSort {

    static divide(array) {

        if(array.length === 1) {
            return array
        }

            const middleIndex = Math.ceil(array.length / 2)
            const left = this.divide(array.splice(0, middleIndex))
            const right = this.divide(array.splice(-middleIndex))
            return merge(left, right)


        function merge(array1, array2) {
            const sortedArray = []
            let arr1Iter = 0;
            let arr2Iter = 0;


            function copyRestOfArray(arraySelected, iter) {
                while(iter < arraySelected.length) {
                    sortedArray.push(arraySelected[iter])
                    iter++
                }
            }
            function noneleft() {
                if ((arr1Iter < array1.length) && (arr2Iter < array2.length)) {
                    return false
                }
                if (arr1Iter === array1.length) {
                    copyRestOfArray(array2, arr2Iter)
                    return
                }
                copyRestOfArray(array1, arr1Iter)
                return

            }

            while (noneleft() === false) { //TODO : replace with shortcut for false

                if (array1[arr1Iter] > array2[arr2Iter]) {
                    sortedArray.push(array2[arr2Iter])
                    arr2Iter++
                } else {
                    sortedArray.push(array1[arr1Iter])
                    arr1Iter++
                }
            }
            return sortedArray}
    }
}

console.log(mergeSort.divide(arrayTest))
