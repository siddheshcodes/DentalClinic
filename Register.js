
function validate(){
var uname=document.myform.uname.value;
var pwd=document.myform.pwd.value;
var cpwd=document.myform.cpwd.value;
var contact=document.myform.contact.value;
if(uname==null || uname=="")
  {
   alert("Username should not be empty");
   return false;
  }
if(pwd==null || pwd=="")
  {
   alert("Password should not be empty");
   return false;
  }
else if(pwd.length<6)
  {
   alert("Password should not be less than 6 characters");
   return false;
  }
else if(pwd!=cpwd)
  {
   alert("Password and Confirm Password are not matching");
   return false;
  }
if(contact==null || contact=="")
  {
   alert("contact should not be empty");
   return false;
  }
else if(isNaN(contact))
  {
   alert("contact should be in digits");
   return false; 
}
else if(contact.length<10)
  {
   alert("contact should not be less than 10 number");
   return false; 
}
window.location="successful.html";
}
