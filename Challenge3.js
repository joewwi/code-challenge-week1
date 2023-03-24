// accessing all the inputs
const basicSalaryInput = document.querySelector("#basic_salary")
const benefitsInput = document.querySelector("#benefits")



//PAYE calculator function added an event
let calculatePaye = document.querySelector("#btnpaye")
calculatePaye.addEventListener("click", function payeCalculator(){
    // giving my input a variable
let basicSalary = parseInt(basicSalaryInput.value)
let benefits = parseInt(benefitsInput.value)
  //adding all the reliefs
  const pR = 2400

  //calculations on the taxable income 
  let taxableIncome = basicSalary + benefits
  let paye

  if(taxableIncome > 32333){
    paye = ((taxableIncome - 32333) * 0.3) - pR
  }else if(taxableIncome >= 24001 && taxableIncome <= 32333){
    paye = ((taxableIncome - 24000) * 0.25) - pR
  }else if(taxableIncome < 24000){
    paye = (taxableIncome * 0.1) - pR
  }
  alert(`Your Paye: ${paye}`)
})

//NHIF Calculator Function
let nhifButton = document.querySelector("#btn-nhif")
nhifButton.addEventListener("click", function nhifCalculator(){
    // giving my input a variable
let basicSalary = parseInt(basicSalaryInput.value)
    let nhifDeductions
    if(basicSalary > 100000){
        nhifDeductions = 1700
    }else if (basicSalary >= 90000 && basicSalary <= 99999){
        nhifDeductions = 1600
    }else if (basicSalary >= 80000 && basicSalary <= 89999){
        nhifDeductions = 1500
    }else if (basicSalary >= 70000 && basicSalary <= 79999){
        nhifDeductions = 1400
    }else if (basicSalary >= 60000 && basicSalary <= 69999){
        nhifDeductions = 1300
    }else if (basicSalary >= 50000 && basicSalary <= 59999){
        nhifDeductions = 1200
    }else if (basicSalary >= 45000 && basicSalary <= 49999){
        nhifDeductions = 1100
    }else if (basicSalary >= 40000 && basicSalary <= 44999){
        nhifDeductions = 1000
    }else if (basicSalary >= 35000 && basicSalary <= 39999){
        nhifDeductions = 950
    }else if (basicSalary >= 30000 && basicSalary <= 34999){
        nhifDeductions = 900
    }else if (basicSalary >= 25000 && basicSalary <= 29999){
        nhifDeductions = 850
    }else if (basicSalary >= 20000 && basicSalary <= 24999){
        nhifDeductions = 750
    }else if (basicSalary >= 15000 && basicSalary <= 19999){
        nhifDeductions = 600
    }else if (basicSalary >= 12000 && basicSalary <= 14999){
        nhifDeductions = 500
    }else if (basicSalary >= 8000 && basicSalary <= 11999){
        nhifDeductions = 400
    }else if (basicSalary >= 6000 && basicSalary <= 7999){
        nhifDeductions = 300
    }else if (basicSalary < 5999){
        nhifDeductions = 150
    }
    alert(`Your NHIF Deductions: ${nhifDeductions}`)
})

//NSSF Calculator Function
let nssfButton = document.querySelector("#btn-nssf")
nssfButton.addEventListener("click", function nssfCalculator(){
    // giving my input a variable
    let basicSalary = parseInt(basicSalaryInput.value)
    let pensionablePay = basicSalary
    let nssfDeductions = pensionablePay * 0.06
    alert(`Your NSSF Deductions: ${nssfDeductions}`)
})

//Net Salary Calculator Function
let netSalary = document.querySelector("#netSal")
netSalary.addEventListener("click", function netSalaryCalc() {
    // giving my input a variable
    let basicSalary = parseInt(basicSalaryInput.value)
    let benefits = parseInt(benefitsInput.value)
    let netSalary = basicSalary -(paye + nhifDeductions + nssfDeductions)
    alert(`Your Net Salary: ${netSalary}`)
})
