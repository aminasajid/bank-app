// let uname=username.value;
//     console.log(uname);
//     localStorage.setItem('USERNAME',uname);



function registerUser(){
    user={
        name:username.value,
        accno:accountnumber.value,
        pass:password.value
    }
    if(user.name==""||user.accno==""||user.pass=="")
    {
        alert("Please fill the missing fields")
    }
    else {
        if(user.accno in localStorage)
    {
        alert("Already exists.Please log in")
        
    }
    else{
        localStorage.setItem(user.accno,JSON.stringify(user))
        alert("Registeration successfull")
        window.location='./login.html'
    }
}
}



//login
function loginUser() {
    
    let acno = accnum.value;
    let pswd = pass.value;
    // console.log(acno, pswd);

    let accountDetails = JSON.parse(localStorage.getItem(acno)); 

    if (accountDetails) {
  
        if (pswd === accountDetails.pass) {
            alert("Login successful");
            window.location.href = "./home.html"; 
        } else {
            alert("Incorrect password");
        }
    } else {
        alert("Invalid account number");
    }
}



