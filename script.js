/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts

  - Returns an array containing only the names of the who have attended AT LEAST 8 classes. (bigger than 8)
*/
const attendances = [
  ["Ahmed", 8],
  ["Clement", 10],
  ["Elamin", 6],
  ["Adam", 7],
  ["Tayoa", 11],
  ["Nina", 10]
]
 let checkStudents=arr=>{
  //  let name=[]
  //  for(let i=0; i<arr.length; i++){
  //   for(let j=0; j<arr.length; j++){
  //    if (arr[i][j] (parameter) arr:any
  //    name.push(if(arr[i][j])
  //    }
  //   }

  //  }
  arr.forEach(element => element[1]>=8? console.log(element[0],element[1]):"Error" ) 
  return ;
 }
console.log(checkStudents(attendances));

