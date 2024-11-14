// Your age is 22, if your age is greater than 18, console the “eligible for vote”, otherwise console  “not eligible”
// Weather condition is “rainy”,if weather condition is rainy, console the “its pouring outside” otherwise “not raining”
// Students marks is 76, console the grade of students based on marks;
//     90+ →  A+
//    81 – 90 —> A
//   71 – 80  —> B+
//  61 — 70 —-> C+
// 51– 60 —-> C
// 40 – 50   —> D
// Below 50 → fail
let age=22;
if(age>18){
    console.log("eligible for vote")
}
if(age<18){
    console.log("not eligible for vote")
}
let weather="rainy";
if(weather==="rainy"){
    console.log("its pouring outside")
}
if(weather==="not rainy"){
console.log("not raining")
}

let score=75;
let grade;
if(score>=90 && score<=100){
    grade="A+"
}
if(score>=81 && score<=90){
    grade="A"
}
if(score>=71 && score<=80){
    grade="B+"
}
if(score>=61 && score<=70){
    grade="C+"
}
if(score>=51 && score<=60){
    grade="C"
}
if(score>=40 && score<=50){
    grade="D"
}
if(score>=30 && score<=35){
    grade="fail"
}
console.log(grade);