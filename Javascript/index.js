// console.log('Hello World!')

//////////////////////////////////////////DATA TYPES/////////////////////////
// var message = 'Hello Mark!'; //string
// var age = 23; //number
// console.log(message+age);


//////////////////////////////////////////OBJECT LETRALS
// let person =  {
//     firstName: 'Mark',
//     middleName: 'Cortejo',
//     lastName: 'Bello',
//     age: 23,
//     address: 'Mtv DdO 8801'
// };
// console.log(person['firstName']);

// //OBJECT AARRAY
// const name = ['Master Nigs', 'Master Mark', 'Master Elcid', 'Master Russell'];
// console.log(name[1]);

// //ARRAY FUNCTION

// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(1, 3));

//////////////////////////////////////////JAVASCRIPT OPERATORS
// let x = 10;
// let w = 20;
// console.log(w+x);

//////////////////////////////////////////COMPARISON OPERATORS////////////////////////////////////////////////////////////////////////////////////////
// let x = 10
// let y = 10

// // const isGreater = y !== x;
// // console.log(isGreater);

// let x = 10;
// let y = 12;

// console.log(x >= 5 && x > 11);




//////////////////////////////////////////TERNARY OPERATORS/////////////////////////////////////////////////////////////////////////////// 
// let isHot = false;
// let condition = isHot ? 'AYAW KOL' : 'LOOYA BATAA!';
// console.log(condition);

//OLD METHOD

// mark = "";

// if (grade >= 90){
//     mark = "A";
// }else if (grade >= 80){
//     mark = "B";
// }else if (grade >= 70) {
//     mark = "C";
// } else{
//     mark = "FAILED";
// };
// console.log(mark);

//NEW SYNTAX METHOD NESTED OPERATORS!
// const finalMark = grade >= 90 ? "EXCELLENT" : grade >= 80 ? "VERY GOOD!" : grade >= 70 ? 'GOOD!' : "F";
// console.log(finalMark)




//////////////////////////////////////////DESTRUCTURING//////////////////////////////////////////////////////////////////////
// Distructuring using normal arrays
// const object = ["MARK", "SIR ELCID", "NIGRO", "PAYAT"];
// console.log(object[0]);


//Distructuring using array syntax
// const object = ["MARK", "SIR ELCID", "NIGRO", "PAYAT", 1000 ];
// const [mark, sir, nigro, payat, age] = object;
// console.log(mark, sir, nigro, payat, age);


// const developer = {
//     name: "Mark Bello",
//     age: 23,
//     birthday: new Date(),
//     status: "LOWKEY",
// };
// let name = developer.name;
// let age = developer.age;
// let birthday = developer.birthday;
// let status = developer.status;
// console.log(name, age, birthday, status);

//DISTRUCTURING USING OBJECT!
// const developer = {
//     name: "Mark Bello",
//     age: 23,
//     birthday: new Date(),
//     status: "LOWKEY",
// };

// const { name, age, birthday, status} = developer;

// console.log(name, age, birthday, status);




//////////////////////////////////////////SPEAD OPERATORS

//spread operators array
// const person = ["Mark", "Alfred", "Raevin", "Russell"];
// const infinitSolutions = ["Sir Bossing", ...person, "James"];
// console.log(infinitSolutions);

//spread operatiors object
// const email = {
//     firstEmail : 'markbello@gmail.com',
//     secondEmail : 'markbello10041999@gmail.com',
// };
// const personDetails = {
//     fullName : 'Mark Bello',
//     age : 23,
//     address : 'Mtv, DdO Davao de Oro',
//     ...email,
// }
// console.log(personDetails);



//////////////////////////////////////////spread operators using ARRAY AND FUNCTIONS OLD METHOD
// const cash = [1000, 2000, 3000];
// const total = (bunos, interest, capital) =>{
//     return bunos * interest / capital;
// }
// console.log(total(cash[0], cash[1], cash[3]));



//////////////////////////////////////////spread operators using ARRAY AND FUNCTIONS NEW METHOD
// const cash = [1000, 2000, 3000];
// const total = (bunos, interest, capital) =>{
//     return bunos * interest / capital;
// }

// console.log(total(...cash));



//////////////////////////////////////////ARRAY METHODS USEFUL FOR REACTJS IN JSX////////////////////////////////////////////////
// Push method para ma add sa kinalasan
// let djs = ['Martin Garrix', 'Skrillex', 'The Chainsmoker'];
// djs.push('Marshmello');

// console.log(djs);

// //pop method e delete ang gikanalasang array object
// let djs = ['Martin Garrix', 'Skrillex', 'The Chainsmoker'];
// djs.pop();
// console.log(djs);

//////////////////////////////////////////array splice method

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, "Feb"); 
// months.splice(4, 5, "MAY")
// console.log(months); ////// START INDEX SA JANUARY 0 SO ANG 1 KAY PARA KAY FEB THEN ANG 0 MEANS WALAY GIDELETE NA NAGSUGOD KAY 1 WHICH IS SI 


//////////////////////////////////////////Array Slice Method

// const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // months.slice(1);
// console.log(months.slice(-5));  ////SA ARRAY SLICE ANG IPAGAWAS NIYA ANI IS 6, 7, 8, 9, 10


//////////////////////////////////////////ARRAY ITERATORS 
// new students using MAP METHOD!
// const students = [
//     {
//         id: 1,
//         f_name: "Mark",
//         l_name: "Bello",
//         gender: "M",
//         married: false,
//         age: 23,
//         paid: 1000,
//         courses: ["JavaScript", "React"],
//     },
//     {
//         id: 2,
//         f_name: "Nigs",
//         l_name: "Palacio",
//         gender: "M",
//         married: true,
//         age: 23,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel"],
//     },
//     {
//         id: 3,
//         f_name: "James",
//         l_name: "Apolonio",
//         gender: "M",
//         married: true,
//         age: 27,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "React Native"],
//     },
//     {
//         id: 4,
//         f_name: "Somerset",
//         l_name: "Siang",
//         gender: "M",
//         married: true,
//         age: 38,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "Java", "Vb.net"],
//     },
// ];

// students.map((student, index) =>{
//     console.log(index, student); //// IPAGAWAS NIYA ANG STUDENTS OBJECTS TANAN UG APIL ANG INDEX WHICH MAGSUGOD SA 0, 1, 2, 3
// } )


// //ARRAY ITERATORS USING MAP WITH NEW CONST 
// const students = [
//     {
//         id: 1,
//         f_name: "Mark",
//         l_name: "Bello",
//         gender: "M",
//         married: false,
//         age: 23,
//         paid: 1000,
//         courses: ["JavaScript", "React"],
//     },
//     {
//         id: 2,
//         f_name: "Nigs",
//         l_name: "Palacio",
//         gender: "M",
//         married: true,
//         age: 23,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel"],
//     },
//     {
//         id: 3,
//         f_name: "James",
//         l_name: "Apolonio",
//         gender: "M",
//         married: true,
//         age: 27,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "React Native"],
//     },
//     {
//         id: 4,
//         f_name: "Somerset",
//         l_name: "Siang",
//         gender: "M",
//         married: true,
//         age: 38,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "Java", "Vb.net"],
//     },
// ];

// const newStudent = students.map((students, index) =>{
//       return students;
// })

// console.log(newStudent); // IPAGAWAS NIYA TANANG NAA SA STUDENTS NA OBJECT





//////////////////////////////////////////ARRAY ITERATORS USING FILTER!/////////////////////////////////////////////////////////////////////////////////////
// // new students 
// const students = [
//     {
//         id: 1,
//         f_name: "Mark",
//         l_name: "Bello",
//         gender: "M",
//         married: false,
//         age: 23,
//         paid: 1000,
//         courses: ["JavaScript", "React"],
//     },
//     {
//         id: 2,
//         f_name: "Nigs",
//         l_name: "Palacio",
//         gender: "M",
//         married: true,
//         age: 23,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel"],
//     },
//     {
//         id: 3,
//         f_name: "James",
//         l_name: "Apolonio",
//         gender: "M",
//         married: true,
//         age: 27,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "React Native"],
//     },
//     {
//         id: 4,
//         f_name: "Somerset",
//         l_name: "Siang",
//         gender: "M",
//         married: true,
//         age: 38,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "Java", "Vb.net"],
//     },
// ];

// const newStudents = students.filter((students, index) => students.paid); ////E FILTER NIYA ANG MGA NAKA BAYAD OR NAAY VALUE NA PAID!

// console.log(newStudents);




// //////////////////////////////////////////ARRAY ITERATORS USING SOME METHOD!/////////////////////////////////////////////////////////////////////////////////////
// // new students 
// const students = [
//     {
//         id: 1,
//         f_name: "Mark",
//         l_name: "Bello",
//         gender: "M",
//         married: false,
//         age: 23,
//         paid: 1000,
//         courses: ["JavaScript", "React"],
//     },
//     {
//         id: 2,
//         f_name: "Nigs",
//         l_name: "Palacio",
//         gender: "M",
//         married: true,
//         age: 23,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel"],
//     },
//     {
//         id: 3,
//         f_name: "James",
//         l_name: "Apolonio",
//         gender: "M",
//         married: true,
//         age: 27,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "React Native"],
//     },
//     {
//         id: 4,
//         f_name: "Somerset",
//         l_name: "Siang",
//         gender: "M",
//         married: true,
//         age: 38,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "Java", "Vb.net"],
//     },
// ];

// const hasStudentBelow = students.some((students, index) => students.age > 30); //SA SOME KAY E RETURN NIYA NA TRUE IF NAAY ISA NGA TAMA SA ARGUMENT 
// console.log(hasStudentBelow);



/////////////////////////////////////////////ARRAY ITERATORS USING FIND METHOD!/////////////////////////////////////////////////////////////////////////////////////

// const students = [
//     {
//         id: 1,
//         f_name: "Mark",
//         l_name: "Bello",
//         gender: "M",
//         married: false,
//         age: 23,
//         paid: 1000,
//         courses: ["JavaScript", "React"],
//     },
//     {
//         id: 2,
//         f_name: "Nigs",
//         l_name: "Palacio",
//         gender: "M",
//         married: true,
//         age: 32,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel"],
//     },
//     {
//         id: 3,
//         f_name: "James",
//         l_name: "Apolonio",
//         gender: "M",
//         married: true,
//         age: 31,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "React Native"],
//     },
//     {
//         id: 4,
//         f_name: "Somerset",
//         l_name: "Siang",
//         gender: "M",
//         married: true,
//         age: 31,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "Java", "Vb.net"],
//     },
// ];

// const studentAbove30 = students.find((students, index) => students.age > 30);  // SA FIND KUNG KINSA TUNG UNA NGA > 30 ANG EDAD MAO ANG UNANG E DISPLAY!
// console.log(studentAbove30);



/////////////////////////////////////////////ARRAY ITERATORS USING REDUCE METHOD!/////////////////////////////////////////////////////////////////////////////////////

// const students = [
//     {
//         id: 1,
//         f_name: "Mark",
//         l_name: "Bello",
//         gender: "M",
//         married: false,
//         age: 23,
//         paid: 1000,
//         courses: ["JavaScript", "React"],
//     },
//     {
//         id: 2,
//         f_name: "Nigs",
//         l_name: "Palacio",
//         gender: "M",
//         married: true,
//         age: 32,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel"],
//     },
//     {
//         id: 3,
//         f_name: "James",
//         l_name: "Apolonio",
//         gender: "M",
//         married: true,
//         age: 31,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "React Native"],
//     },
//     {
//         id: 4,
//         f_name: "Somerset",
//         l_name: "Siang",
//         gender: "M",
//         married: true,
//         age: 31,
//         paid: 2000,
//         courses: ["Bootstrap", "Lavarel", "Java", "Vb.net"],
//     },
// ];

// const totalAmount = students.reduce((bayad, student, currentIndex, students) => {
//         bayad = bayad + student.paid;
//         return bayad;
//     },
//     0
// );

// console.log(totalAmount); // ADD NIYA TANAN WAY KALTAS!


//////////////////////////////////////////////////////////////////////////////////////JAVASCRIPT PROMISES/////////////////////////////////////////////////////////////////////////////// 

// //TRUE ANG ANG RESULT KAY TAMA ANG GI VALUE COMPARISON NILA
// const promise = new Promise((resolve, reject) => {
//     const i = "PROMISE!";
//     i === "PROMISE!" ? resolve() : reject();
// });

// promise
//     .then(() => console.log("PROMISE WAS RESOLVED!")) // MAO NI ANG RESULT!
//     .catch(() => console.log("PROMISE WAS REJECTED!"));



//     //FALSE ANG ANG RESULT KAY TAMA ANG GI VALUE COMPARISON NILA
// const promise = new Promise((resolve, reject) => {
//     const i = "PROMISE!";
//     i === "PROMISE LANG!" ? resolve() : reject();
// });

// promise
//     .then(() => console.log("PROMISE WAS RESOLVED!")) // MAO NI ANG RESULT!
//     .catch(() => console.log("PROMISE WAS REJECTED!"));


/////////////////////////// FETCH API ////////////////////////////////
import fetch from "node-fetch";

// const url = "https://jsonplaceholder.typicode.com/posts"

// const fetchPromise = fetch(url);

// fetchPromise
//     .then((response) => response.json())
//     .then((response) => console.log(response));



///////////////////////////////////// ASYNC AND AWAITS API
import fetch from "node-fetch";
const url = "https://jsonplaceholder.typicode.com/posts"

const fetchPromise = async() => {
    const res = await fetch(url)
    const response = await res.json();
    console.log(response);
};

fetchPromise();