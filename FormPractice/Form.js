function nameValidation() {
    
var Name=document.getElementById("nameIp").value;


var nameReg=/^[A-Z]{1}[a-z A-Z]{2,}$/;
if (nameReg.test(Name)) {
   
    document.getElementById("name-error").innerHTML="";
    
}
    else
    document.getElementById("name-error").innerHTML ="Name is Invalid";   


}

function emailValidation() {
    
    var Email=document.getElementById("emailIp").value;
 
    var emailReg=/^([a-z]*)[-_.+]*?([a-z 0-9 ]*?)[@]{1}([a-z 0-9]{1,})[.]{1}([a-z]{2,})[.]?([a-z]*?)/;
    if (emailReg.test(Email)) {
       
        document.getElementById("email-error").innerHTML="";
        
    }
        else
        document.getElementById("email-error").innerHTML ="Name is Invalid";   
    
    
    }
