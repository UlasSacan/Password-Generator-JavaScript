const val = document.getElementById("val");
const generate = document.getElementById("generate");
const Password = document.getElementById("Password");
const rndmPswrd = ["a","b", "c", "ç", "d", "f", "g", "ğ", "h", "j", "k", "l", "m", "n", "p", " r", "s", "ş", "t", "v", "y", "z",
  "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z",
  1,2,3,4,5,6,7,8,9
];
const copy = document.getElementById("copy-password");




generate.addEventListener("click", function () {
 

  let add = "";
  if(val.value  <=50){
    for (i = 0; i < val.value; i++) {
      var pswrd = rndmPswrd[Math.round(Math.random() * rndmPswrd.length)];
      console.log(pswrd);
      add += pswrd;
      Password.innerHTML = add;
  
    }
  }

  else{
    Password.innerHTML = "max girebileceğiniz değer sadece 50'dir";
  }
 
  copy.classList.remove("no")
  copy.classList.add("block");
});

copy.addEventListener("click",function(){
  navigator.clipboard.writeText(Password.innerHTML);
  copy.innerText = "Copied";

});


