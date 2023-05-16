function validateForm(){
    var firstName= document.getElementById("firstName").value;
    console.log(firstName);
    var lastName=document.getElementById("lastName").value;

    if( (firstName.length < 2) || (lastName.length<2)){
        alert("Not a valid name");
    } 
    // if(!NaN(firstName)){
    //     alert("Please enter a valid Name");

    // }
    var password=document.getElementById("password").value;
    var confirmPassword=document.getElementById("confirm password").value;
    if(password!=confirmPassword){
        alert("Password is incorrect");
    }
    var number=document.getElementById('number').value;
    if( number.length != 10 ){
        alert("Enter a valid phone number")
    }
    var email=document.getElementById("email").value;
    if(email.includes("@")){
        if(email.indexOf("@")<=0      ){
            alert("Not a valid email")
        }
        if((email.charAt(email.length-4)!=".") && email.charAt(email.length-3)!="."){
            alert("Not a  valid email");
        }
    }
    console.log(`First Name is ${firstName} last name is ${lastName} my email is ${email} my password is ${password}`);
    alert("Congratilations !! Your data is saved");

}
