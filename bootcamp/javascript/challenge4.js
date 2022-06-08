var min = function(list){
    
    let min = list[0] 
    for (let i = 0; i < list.length; i++) {
        let change = list[i]
        if(change < min){
            min = list[i]
        }
    }
    return min;
}

var max = function(list){
    let max = list[0] 
    for (let i = 0; i < list.length; i++) {
        let change = list[i]
        if(change > max){
            max = list[i]
        }
    }
    return max;
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]),max([-52, 56, 30, 29, -54, 0, -110]))