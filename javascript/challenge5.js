function simpleMultiplication(number) {
    let num 
    if (number % 2 == 0) {
        num = 8*number 
    }
    else{
        num = 9*number
    }
    return num
}


console.log(simpleMultiplication(2))