//$(".todosubmit").click(function(){
   // $("todosubmit").click(function(){  
    function validateLogin() {
        var mailField = document.getElementById("inputEmail4").value;
      var pwdField = document.getElementById("psw-input").value;
        return getErrorlabel(mailField,pwdField,readLogindetails);  
    }
       function getErrorlabel(mailField,pwdField,callback) {          
        var emailerr = document.getElementById("emailerror");
        var pwderr = document.getElementById("pwderror");
        //readInput(mailField,pwdField,emailerr,pwderr);   
        alert("getErrorlabel");
        return callback(mailField,pwdField,emailerr,pwderr); 
        }    
      //});
    
      function readLogindetails(mailField,pwdField,emailerr,pwderr){
        //var emailerr = document.getElementById("emailerror");
        //var pwderr = document.getElementById("pwderror");
        if(mailField == "admin"&&pwdField == 12345) {
            // checked
            //location.replace("todoapplist.html");
            emailerr.innerHTML = "Valid";
            emailerr.style.color = "Green";
            pwderr.innerHTML = "Valid";
            pwderr.style.color = "Green";
            alert("true-both are correct");
            return true;
        }
        //else if (mailField == ""&&pwdField == 12345||mailField != "admin") {
        else if (mailField == ""&&pwdField == 12345) {
            emailerr.innerHTML = "Invalid";
            emailerr.style.color = "Red";
            pwderr.innerHTML = "Valid";
            pwderr.style.color = "Green";
            alert("false-mail is nil");
            return false;
        }
        //else if (mailField == "admin"&&pwdField == ""||pwdField != 12345) {
        else if (mailField == "admin"&&pwdField == "") {
            emailerr.innerHTML = "Valid";
            emailerr.style.color = "Green";
            pwderr.innerHTML = "Invalid";
            pwderr.style.color = "Red";
            alert("false-pwd is nil");
            return false;
        }
        //else if (mailField == ""&&pwdField == "") {
        // else if (mailField != "admin"&&pwdField != 12345) {
        //     emailerr.innerHTML = "Invalid";
        //     emailerr.style.color = "Red";
        //     pwderr.innerHTML = "Invalid";
        //     pwderr.style.color = "Red";
        //     alert("false-mail & pwd is nil");
        //     return false;
        // }           
        else{
            emailerr.innerHTML = "Invalid";
            emailerr.style.color = "Red";
            pwderr.innerHTML = "Invalid";
            pwderr.style.color = "Red";
            alert("false-mail & pwd is nil");
            return false;
            //return false;
        }
      }
    
    
    //   var mailField = document.getElementById("inputEmail4").value;
    //   var pwdField = document.getElementById("psw-input").value;
      //getErrorlabel(mailField,pwdField,readInput);
    
    //}
     // }
     
    