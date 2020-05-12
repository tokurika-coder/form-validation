const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validname=false;
let validemail=false;
let validphone=false;

// $(`#failure`).hide();
// $(`#success`).hide();

name.addEventListener('blur', () => {
    console.log("name is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your name is valid");
        name.classList.remove('is-invalid');
        validname=true;
    }
    else {
        console.log("your name is not valid");
        name.classList.add('is-invalid');
        validname=false;
    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    let regex = /^([.\-\_\a-zA-Z0-9]+)@([.\-\_\a-zA-Z0-9]+)\.([a-zA-Z])/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your email is valid");
        email.classList.remove('is-invalid');
        validemail=true;
    }
    else {
        console.log("your email is not valid");
        email.classList.add('is-invalid');
        validemail=false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("your phone is valid");
        phone.classList.remove('is-invalid');
        validphone=true;
    }
    else {
        console.log("your phone is not valid");
        phone.classList.add('is-invalid');
        validphone=false;
    }
})

let submit=document.getElementById("submit");
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(validemail && validname && validphone)
    {
        console.log("phone email and name are valid hence submitting the form");
        let success=document.getElementById("success");
        success.classList.add("show");
    $(`#success`).show();
    $(`#failure`).hide();
    }
    else{
        console.log("one of phone email and name are not valid hence not submitting the form.please try again");
        let failure=document.getElementById("failure");
        failure.classList.add("show");
        $(`#failure`).show();
    $(`#success`).hide();
    }
})