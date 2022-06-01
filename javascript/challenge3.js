function filter_list(l) {
    let c =  l.filter(q =>  Number.isInteger(q));
    return c
}

console.log(filter_list([1,2,"a","b", 3]))