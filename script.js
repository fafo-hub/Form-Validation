    //input fields and other variables

    const last_name = document.getElementById("last-name")
    const first_name = document.getElementById("first-name")
    const middle_name = document.getElementById("middle-name")
    const email = document.getElementById("email")
    const age = document.getElementById("age") 
    const phone = document.getElementById("phone")
    const password = document.getElementById("password")
    const confirm_password = document.getElementById("confirm-password")
    const last_name_error = document.getElementById('last-name-error')
    const first_name_error = document.getElementById('first-name-error')
    const middle_name_error = document.getElementById('middle-name-error')
    const email_error = document.getElementById('email-error')
    const age_error = document.getElementById('age-error')
    const phone_error = document.getElementById('phone-error')
    const password_error = document.getElementById('password-error')
    const confirm_password_error = document.getElementById('confirm-password-error')
    const acceptedtText = /^[a-zA-z]+$/;
    const acceptedPassword = /(?=.*\d)(?=.*[a-zA-Z])/
    regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    //Last Name

    function lastName() {
        if (last_name.value.trim() == "" ){
            last_name.style.border = "2px dotted red";
            document.getElementById("last-name-img1").style.visibility = "visible"
            document.getElementById("last-name-img2").style.visibility = "hidden";
            document.getElementById("last-name-error").style.visibility = "visible";
            last_name_error.innerHTML = "field must not be empty"
            return true;
            
        }
        else if (!last_name.value.match(acceptedtText)){
            last_name.style.border = "2px dotted red";
            document.getElementById("last-name-img1").style.visibility = "visible"
            document.getElementById("last-name-img2").style.visibility = "hidden";
            document.getElementById("last-name-error").style.visibility = "visible";
            last_name_error.innerHTML = "Last name can contain only alphabets";
            return true;
        }
    
        else {
            last_name.style.border = "2px dotted green";
            document.getElementById("last-name-img1").style.visibility = "hidden"
            document.getElementById("last-name-img2").style.visibility = "visible";
            last_name_error.style.visibility = "hidden";
            return false;
        }    
        
    }
     
    //First Name

    function firstName () {
        if (first_name.value.trim() == "" ){
            first_name.style.border = "2px dotted red";
            document.getElementById("first-name-img1").style.visibility = "visible"
            document.getElementById("first-name-img2").style.visibility = "hidden";
            document.getElementById("first-name-error").style.visibility = "visible";
            return true;
            
        }
        else if (!first_name.value.match(acceptedtText)){
            first_name.style.border = "2px dotted red";
            document.getElementById("first-name-img1").style.visibility = "visible"
            document.getElementById("first-name-img2").style.visibility = "hidden";
            document.getElementById("first-name-error").style.visibility = "visible";
            first_name_error.innerHTML = "first name can contain only alphabets";
            return true;
        }
        else {
            first_name.style.border = "3px dotted green";
            document.getElementById("first-name-img1").style.visibility = "hidden"
            document.getElementById("first-name-img2").style.visibility = "visible";
            first_name_error.style.visibility = "hidden";
            return false;
        }
    }
    
//Middle Name 

function middleName () {
    if (middle_name.value.trim() == "" ){
        middle_name.style.border = "2px dotted red";
        document.getElementById("middle-name-img1").style.visibility = "visible"
        document.getElementById("middle-name-img2").style.visibility = "hidden";
        document.getElementById("middle-name-error").style.visibility = "visible";
        return true;
        
    }

    else if (!middle_name.value.match(acceptedtText)){
        middle_name.style.border = "2px dotted red";
        document.getElementById("middle-name-img1").style.visibility = "visible"
        document.getElementById("middle-name-img2").style.visibility = "hidden";
        document.getElementById("middle-name-error").style.visibility = "visible";
        middle_name_error.innerHTML = "middle name can contain only alphabets";
        return true;
    }
    else {
        middle_name.style.border = "2px dotted green";
        document.getElementById("middle-name-img1").style.visibility = "hidden"
        document.getElementById("middle-name-img2").style.visibility = "visible";
        middle_name_error.style.visibility = "hidden";
        return false;
    }
}

//Email 

function EMail () {
    if (email.value.trim() == "" ){
        email.style.border = "2px dotted red";
        document.getElementById("email-img1").style.visibility = "visible"
        document.getElementById("email-img2").style.visibility = "hidden";
        document.getElementById("email-error").style.visibility = "visible";
        return true;
        
    }

    else if (!email.value.match(regEx)){
        email.style.border = "2px dotted red";
        document.getElementById("email-img1").style.visibility = "visible"
        document.getElementById("email-img2").style.visibility = "hidden";
        document.getElementById("email-error").style.visibility = "visible";
        email_error.innerHTML = "please enter valid email";
        return true;
    }
    else {
        email.style.border = "2px dotted green";
        document.getElementById("email-img1").style.visibility = "hidden"
        document.getElementById("email-img2").style.visibility = "visible";
        email_error.style.visibility = "hidden";
        return false;
    }
}

//Age

function AGe () {
    if (age.value.trim() == "" ){
        age.style.border = "2px dotted red";
        document.getElementById("age-img1").style.visibility = "visible"
        document.getElementById("age-img2").style.visibility = "hidden";
        document.getElementById("age-error").style.visibility = "visible";
        return true;
        
    }
    else if (age.value.trim().length>=3) {
        age.style.border = "2px dotted red";
        document.getElementById("age-img1").style.visibility = "visible"
        document.getElementById("age-img2").style.visibility = "hidden";
        document.getElementById("age-error").style.visibility = "visible";
        age_error.innerHTML = "Age cannot be more than two figures";
        return true;
    }

    else if (isNaN(age.value)){
        age.style.border = "2px dotted red";
        document.getElementById("age-img1").style.visibility = "visible"
        document.getElementById("age-img2").style.visibility = "hidden";
        document.getElementById("age-error").style.visibility = "visible";
        age_error.innerHTML = "please enter valid age number";
        return true;
    }
    else {
        age.style.border = "2px dotted green";
        document.getElementById("age-img1").style.visibility = "hidden"
        document.getElementById("age-img2").style.visibility = "visible";
        age_error.style.visibility = "hidden";
        return false;
    }
}


//Phone

function PHone () {
    if (phone.value.trim() == "" ){
        phone.style.border = "2px dotted red";
        document.getElementById("phone-img1").style.visibility = "visible"
        document.getElementById("phone-img2").style.visibility = "hidden";
        document.getElementById("phone-error").style.visibility = "visible";
        return true;
        
    }

    else if (isNaN(phone.value) ){
        phone.style.border = "2px dotted red";
        document.getElementById("phone-img1").style.visibility = "visible"
        document.getElementById("phone-img2").style.visibility = "hidden";
        document.getElementById("phone-error").style.visibility = "visible";
        phone_error.innerHTML = "please enter valid phone number";
        return true;
    }
    else if (phone.value.trim().length != 11) {
        phone.style.border = "2px dotted red";
        document.getElementById("phone-img1").style.visibility = "visible"
        document.getElementById("phone-img2").style.visibility = "hidden";
        document.getElementById("phone-error").style.visibility = "visible";
        phone_error.innerHTML = "Phone number must be 11 figures";
        return true;
    }
    else {
        phone.style.border = "2px dotted green";
        document.getElementById("phone-img1").style.visibility = "hidden"
        document.getElementById("phone-img2").style.visibility = "visible";
        phone_error.style.visibility = "hidden";
        return false;
    }
}

//password 

function PAssword () {
    if (password.value.trim() == "" ){
        password.style.border = "2px dotted red";
        document.getElementById("password-img1").style.visibility = "visible"
        document.getElementById("password-img2").style.visibility = "hidden";
        document.getElementById("password-error").style.visibility = "visible";
        return true;
        
    }
    else if (password.value.trim().length<=8) {
        password.style.border = "2px dotted red";
        document.getElementById("password-img1").style.visibility = "visible"
        document.getElementById("password-img2").style.visibility = "hidden";
        document.getElementById("password-error").style.visibility = "visible";
        password_error.innerHTML = "password must be at least 8 values"
        return true;
    }
    else if (!password.value.match(acceptedPassword)){
        password.style.border = "2px dotted red";
        document.getElementById("password-img1").style.visibility = "visible"
        document.getElementById("password-img2").style.visibility = "hidden";
        document.getElementById("password-error").style.visibility = "visible";
        password_error.innerHTML = "password must contain both figure and number";
        return true;
    }
    else {
        password.style.border = "2px dotted green";
       document.getElementById("password-img1").style.visibility = "hidden"
        document.getElementById("password-img2").style.visibility = "visible";
        password_error.style.visibility = "hidden";
        return false;
    }
}
//confirmPassword

function confirmPassword () {
    if (confirm_password.value.trim() == "") {
        confirm_password.style.border = "2px dotted red";
        document.getElementById("confirm-password-img1").style.visibility = "visible"
        document.getElementById("confirm-password-img2").style.visibility = "hidden";
        document.getElementById("confirm-password-error").style.visibility = "visible";
    }
    else if (confirm_password.value != password.value) {
        confirm_password.style.border = "2px dotted red";
        document.getElementById("confirm-password-img1").style.visibility = "visible"
        document.getElementById("confirm-password-img2").style.visibility = "hidden";
        document.getElementById("confirm-password-error").style.visibility = "visible";
        confirm_password_error.innerHTML = "password does not match"
        return true;
    }
    else {
        confirm_password.style.border = "2px dotted green";
        document.getElementById("confirm-password-img1").style.visibility = "hidden"
        document.getElementById("confirm-password-img2").style.visibility = "visible";
        confirm_password_error.style.visibility = "hidden";
        return false;
}
}
 function approved (event) {
    event.preventDefault();
    lastName()
    firstName()
    middleName()
    EMail();
    PHone();
    AGe();
    PAssword();
    confirmPassword();
    if  (lastName () === false && firstName() === false && middleName() === false && EMail() === false && PHone() === false && AGe() === false && PAssword() === false && confirmPassword() === false)  {
        alert ("names validated")
        document.getElementById("myform").onsubmit = "approved()"
    } 
    else {
        
    }

}
