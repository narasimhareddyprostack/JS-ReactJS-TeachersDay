/* let numberFun = () => {
    //alert("Test")
    let number = parseInt(document.getElementById('mobileNumber').value);
    alert(number)
    if (typeof number == 'string') {
        document.getElementById('mMessage').innerHTML = "Pls Enter only Number"
    }
} */
let formValidate = () => { 
    document.g
    let name = document.getElementById('userName').value
    let mobile = document.getElementById('mobileNumber').value;
    if (name == "") {
        document.getElementById('userMessage').innerHTML = "Please Enter User Name"
        //alert("Buddy Please Enter Some thing")
    }
    else
        if (name.length < 4) {
            document.getElementById('userMessage').innerHTML = "User Name Must be 6 Char"
        }

    if (mobile == "") {
        document.getElementById('mMessage').innerHTML = "Please Enter Number"
    }
    else if (mobile.length < 10) {
        document.getElementById('mMessage').innerHTML = "Please Enter 10 Digit Number"
    }

    return false
}
/* function formValidate(){

} */