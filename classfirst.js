// num1 = 23;
// num2 = 23;
// let option = "add";
// switch (option) {
//   case "add":
//     console.log(num1 + num2);
//     break;

//   case "sub":
//     console.log(num1 - num2);
//     break;

//   case "mul":
//     console.log(num1 * num2);
//     break;
//   case "div":
//     console.log(num1 / num2);
//     break;

//     default:
//         console.log("invalid")
// }

//Ternery operator
//to check number is even or odd
//  let num1=8%2
//  num1==0?console.log("even"):console.log("odd")

//  temp greater than 48 print "hot day"

//  else print cool day
// let temperature=334;
// if(temperature>=40){
//     console.log("hot day")

// }
// else
// {
//     console.log("not hod day")
// }

// let temperature=90;
// temperature>=40?console.log("hot"):console.log("no hot")

// let number=-3;
// if(number<0){
//     console.log("negative")
// }
// else if(number>0){
//     console.log("positive")
// }
// else if(number===0)
// {
//     console.log("neutral value")
// }

// number<0?console.log("negative"):number>0?console.log("positive"):console.log(neutral)

// //iterations
// //loops
// //iteration is repetations therefore

//for loop
//while loop
//do while loop

// for(i=0;i<3;i++){
//     console.log(i)
// }

//do while loop execution here
// i=0;
// do{
//     i++
//     console.log(i)
// }
// while(i<5)

// i=0
// while(i<3)
// {
//     i++
//     console.log(i)
// }
// const colors = ['red', 'green', 'blue'];

// for (let index in colors) {
//   console.log(index + ': ' + colors[index]);
// }

// const array = [1, 2, 3, 4, 7];
// for (let value of array) {
//   console.log(value);
// }

// const array=[1,2,3,4,5]
// const array2=array.map(num=>num*2)
// console.log(array2)
// const array3=array.filter(num3=>num3%2==0)
// console.log(array3)

// function a(){
//     const name=['suvash']
//     const age=34;
//     return{name,age}
// }
// const abc= a().age
// console.log(abc)

// for(i=0;i<11;i++){
//     console.log(i)

// }

// for(j=12;j<24;j++)
// {
//     console.log(j)
// }
// for(i=1;i<10;i++)
// {
//  j=i**2
//     console.log(`sqaure of the ${i} is ${j}`)
// }
//100 to 50 ece

// //check from 1 to 15 and check as

// fact=1
// for (let i = 6; i>=1 ;i--) {
//  console.log(i)
//     fact =i*fact
//  console.log(fact)
// }

//while loop as given below
// let i=11;
// while(i<24)
// {
//     i=i+1
//     console.log(i)
// }

//to print from 100 to 50
// let i = 101;
// while (i > 50) {
//   i = i - 1;
//   console.log(i);
// }

// //square numbers of nunmbers 1 to n

// let j = ;
// while (j < 30) {
//   k = j * j;

//   console.log(`square root of ${j} is ${k}`);
//   j++;
// }
// number from 30 to 100 to check even odd

// let m=30;
// while(m<100)
// {
//     if(m%2==0)
//     {
//         console.log(`${m} is even `)
//     }
//     else{
//         console.log(`${m} is odd`)
//     }
//     m++
// }
//do while loop 

//
// m=30;
// do{

//     if(m%2==0)
//     {
//         console.log(`${m} is even `)
//     }
//     else{
//         console.log(`${m} is odd`)
//     }
//     m++
// }
// while(m<100)//ek patak code mathi bata run vayera nai chadcha 


//Functions f(x)=3x+2
//group of code combined together to achieve specific goal 

//syntaxes 
//function functionName(){

//function declaration
// function getsum(){
//     let x=12;
//     let y=34;
//     let sum=x+y;
//     console.log(sum)
// }
// getsum();//function invoked or calling of the function 

// function gettsum(x,y)
// {
//     return console.log(x+y)

// }
// gettsum(3,4)

// function product(x,y)
// {
//     return x*y
// }

// console.log(product(3,4))




// function division(x,y,z)
// {
    
//     console.log(x/y)
//     console.log(y/z)
//     console.log(x/z)
//     return  x/y/z
// }
// let result = division(10,2,1)
// console.log(result)

// function check(e)
// {
//    let  rem=e%2
//     if( rem==0){
//        return "this is even number"
//     }
//     else{
//        return "this is odd number"
//     }

// }

// console.log(check(34));
// console.log(check(43));
// console.log(check(888))



// 0 to 100

// function printing(x){

// while(x<=100)
// do {
    
// console.log(x)
// x++
   
// }
// console.log(printing(0))
// }




// WAF TO TAKE RADIUS AS INPIT AND CALCULATES PERIMETER OF CIRCLE 
// PERIMETER IS 2*PI*R



function Calculateperimeter(R)
{
    console.log("enter your desired number  R ")
    PI=3.14
   return per=2*PI*R

    
}
let result=Calculateperimeter(4)
console.log(result)
