//********************************************template string

// let pepe = "pepe";
// let carlos = "carlos"

// const containerApp = document.querySelector('#app');
// let html = `<ul>
//                 <li> Name ${pepe}</li>
//                 <li>Name:${carlos}</li>
//             </ul>`

// containerApp.innerHTML = html;

//********************************************function declaration

// function hi(Name){
//     console.log(`hi ${Name}`)
// }

// hi("carlos")

//********************************************function expression

// const client = function(Name){
//     console.log(`hi ${Name}`)
// }
// client('pepe')

//********************************************Literal Object

// const man={
//     name:`carlos`,
//     profession:`firefighter`,
//     age:28,
//     phone:`8296357878`
// }
// console.log(man.name)
// console.log(man[`name`])



//********************************************Object Constructor

function HomeWork(name, urgency){
    this.name = name
    this.urgency = urgency
}

let homework1 = new HomeWork(`testing`, `now`)

console.log(homework1)

//********************************************Prototype
HomeWork.prototype.showInformation = function(){
    return `the homework ${this.name} has a ${this.urgency} priority`
}


console.log(homework1.showInformation())