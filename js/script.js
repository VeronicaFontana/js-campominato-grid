const container = document.querySelector(".container");
const btnStart = document.querySelector(".btn-start");
const btnRestart = document.querySelector(".btn-restart");

btnStart.addEventListener("click", function(){
  btnStart.classList.add("d-none");
  container.classList.remove("d-none");
})

for(i = 1; i <= 100; i++){
  const square = createBox(i);
		
  square.addEventListener("click", function(){
    this.classList.toggle("box-click");
  })

  btnRestart.addEventListener("click", function(){
    btnStart.classList.remove("d-none");
    container.classList.add("d-none");
    square.classList.remove("box-click");
  })

  container.append(square);
}

function createBox(index){
	const newBox = document.createElement("div");
	newBox.className = "box";
	newBox.innerHTML = index;
	return newBox;
}