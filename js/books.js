function show(){
  var reader = document.getElementById("reader")
  reader.style.display ="block";
  reader.innerText = document.getElementById("book").innerText;
  localStorage.setItem("story1", reader.innerText);
}
