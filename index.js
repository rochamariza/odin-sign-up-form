const passwd = document.getElementById("password")
const confirmPasswd = document.getElementById("confirm-password")
const form = document.getElementById("form")

form.addEventListener("submit", (e) =>{
    e.preventDefault()
    if(passwd.value !== confirmPasswd.value){
       passwd.style = "padding: 10px; border-radius: 4px; border: 1px solid; border-color: #ff6434;"
       confirmPasswd.style = "padding: 10px; border-radius: 4px; border: 1px solid; border-color: #ff6434;" 
       passwd.value = ""
       confirmPasswd.value = ""
  }else{
        window.alert("Password Checked")
  }
})
