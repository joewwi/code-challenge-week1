//Accesing input values from the html file
let marksInput = document.querySelector("#marksInput")

//Student Grade Generator Function in an event listener
//Accessing my button
const results = document.querySelector("#results")
//Click Event Listener added to the button
results.addEventListener("click", () => {
  let marks = parseInt(marksInput.value)
  let grade;
   if (marks > 79) {
        grade = "A";
   } else if (marks >= 60 && marks <= 79) {
        grade = "B";
   } else if (marks >= 50 && marks <= 59) {
        grade = "C";
   } else if (marks >= 40 && marks <= 49) {
        grade = "D";
   } else if (grade < 40){
        grade = "E";
   }
   alert(`Your grade is ${grade}`) 
})
