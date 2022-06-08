const squareSum=numbers=>{
    let b = 0
    for(let i=0;i<numbers.length;i++){
        let a = numbers[i]**2
        b += a
    } 
    return b
}


console.log(squareSum([1,2,2]))