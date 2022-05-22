function solution(inputArray) {
    let m  = inputArray[0] * inputArray[1]

    for(let i = 0; i < inputArray.lenght - 1; i++){
        m = Math.max(m, inputArray[i] * inputArray[i+1])
    }

    return m
}


console.log(solution([-23, 4, -3, 8, -12]))