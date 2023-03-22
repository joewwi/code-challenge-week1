function netSalary(){
    let basic = parseInt(input.value)
    let nssf = 0.12
    let nhif = 0.02
    let paye = 0.25

    let deductions = nssf * nhif * paye

    let net = basic - (basic * deductions)

     console.log('net')
    alert(`${net}`)
}
const btn3 = document.getElementById("btn3")
btn3.addEventListener('click', netSalary)