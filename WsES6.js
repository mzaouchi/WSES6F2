// function Hello(){
//     {
//       var a = 6
//       console.log(a)
//     }
//     console.log(a)
  
  
//     return 'Hello ES6'
//   }
  
//   console.log(Hello())


//   function Hello(){
//     {
//       let b = 7
//       console.log(b)
//     }
//     let b = 90
//     console.log(b)
  
  
  
//     return 'Hello ES6'
//   }
  
//   console.log(Hello())

//   function Hello(){
//     {
//       const a = 9
//       console.log(a)
//     }
//     console.log(a)
    
  
  
  
//     return 'Hello ES6'
//   }
  
//   console.log(Hello())


//   const t = 90
// t = 80


// const t = [1,5,8,9]


// t[2] = 90
// console.log(t)
// t.push(90)
// console.log(t)
// t = 3

// const user = {name : 'Omar',age : 30,city:'lac'}

// // user = 9
// user.name = "Rahma"

// console.log(user)
// user.eduction = "Fullstack"
// console.log(user)


// // // function Somme(a,b){
// // //   return a+b
// // // }

// // const Somme =(a,b)=>a+b
// // console.log(Somme(2,4))

// // var Hello=()=> 'Hello world'
// // console.log(Hello())

// // var HelloNom=p=> 'Hello '+p
// // console.log(HelloNom('Abdelwaheb'))
// // console.log(HelloNom('Mahmoud'))


// var test=a=>{
//     var result = 0
//     result = a*100
//     result = result/1000
//     result = result-200
//     return result
//   }
  
//   console.log(test(20))
  
//   var name = "Mohamed"
//   var age = 90
//   console.log("Hello "+name+" ,my age is "+age)
//   console.log(`Hello ${name},
//   my age is ${age}`)
  
//   // var age  = 45

// // age<18 ? console.log("Enfant") : age <60 ? console.log("Adulte") : console.log('Vieux')
// // if(age<18){
// //   console.log('Enfant')
// // }else if(age<60){
// //   console.log('Adule')
// // }else{
// //   console.log("Vieux")
// // }

// var nbr = 2

// // nbr >= 0 ? console.log("Positif") : console.log("Negatif")

// // if(nbr>=0){
// //   console.log('Positif')
// // }
// nbr >= 0 && console.log("Positif") 


// // var user = {name : "Omar",age :31, address:{city :"lac",cp :1122}}

// // const Hello=(h)=> {
// //   var {name,age,address} = h
// //   var {city,cp} = address
// //   return `Hello ${name}, age ${age}, from ${city}, my cp ${cp}`
// // }

// // console.log(Hello(user))


// var student = {name:'Mohamed',stack:'Mern'}


// let go=({name,stack})=> `Name ${name}, my stack ${stack}`

// console.log(go(student))





// var t = [1,2,3,4]

// var [djeja,ma9foul] = t


// console.log(ma9foul)


// var t = [2,4,5,8,5,4]
// var r = [8,9,0]

// // console.log([t,r])
// // console.log(t+r)
// console.log([...r  ,  ...t,999999])
// console.log(t)




// // var c = []
// // var j = 0


// // for(var i = 0;i<t.length;i++){
// //   c[j] = t[i]
// //   j++
// // }

// // console.log(c)

// // for (var i = 0; i < r.length; i++) {
// //   c[j] = r[i]
// //   j++
// // }
// // console.log(c)



// var user = {name :'Mohamed',age : 17}
// var ee = {city : 'lac', cp :1132}

// // console.log({...user,...ee})

// console.log({...user,stack :"Mern"})
// console.log({...user,name : "Abdelwaheb"})

var a = [4,8,9]
const initialValue = 0;
console.log(a.reduce((accumulator, currentValue) => accumulator + 200*currentValue,
  initialValue))

  var m = [2,7,9]
  var x = m.map((el, i, t) => t[i] + 5)
  console.log(x)
  console.log(m)

  var m = [2,7,9]

m.forEach((el, i, t) => t[i] = el + 5)
console.log(m)

var m = [2,7,9]

console.log(m.filter((el,i,t)=>el>2))
console.log(m.filter((el, i, t) => i%2 == 0))
console.log(m)

var m = [2,7,9,2]

// console.log(m.find((el,i,t)=> el == 2))
console.log(m.findIndex((el,i,t)=>el==90))


var m = [2,7,9,2]

console.log(m.sort((a,b)=>a-b))


var m = [2,7,9,2,-1]

console.log(m.splice(2,2))


var str = "Mohamed*est*beau"
console.log(str.split('*'))

var x = str.split('*')

for(var i = 0;i<x.length;i++){
  console.log(x[i].length)
}


var x = ["Mohamed", 'est', 'beau']

console.log(x.join(' '))