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
        document.getElementById("email-error").innerHTML ="Email is Invalid";   
    
    
    }

    
    function mobileValidation() {
    
    var mobile=document.getElementById("numberIp").value;
 
    var mobailReg=/^[0-9]{10}/;
        if (mobailReg.test(mobile)) {
       
        document.getElementById("mobile-error").innerHTML="";
        
    }
        else
        document.getElementById("mobile-error").innerHTML ="Number is Invalid";   
    
        
    }

     
    function telephoneValidation() {
    
        var telephone =document.getElementById("telephoneIp").value;
     
        var mobailReg=/^[1-9]{1}[0-9]{9}/;
            if (mobailReg.test(telephone) && telephone>0) {
           
            document.getElementById("tele-error").innerHTML="";
            
        }
            else
            document.getElementById("tele-error").innerHTML ="Number is Invalid";   
        
          
        }

            
    function passwordValidation() {
    
        var pasword =document.getElementById("passwordIp").value;
        var pwdReg=/^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*?/+])[A-Z a-z 0-9 -_.]{8,}/;

            if (pwdReg.test(pasword) ) {
           
            document.getElementById("pswd-error").innerHTML="";
            
        }
            else
            document.getElementById("pswd-error").innerHTML ="pasword is Invalid";   
        
          
        }

        function submit() {
            location.reload();
        }
    
