const todo_app_content=document.querySelector('.todo_app_content')
const add_tesk=document.getElementById('add_tesk')
let todo_ul=document.querySelector('.todo_ul')
addEventListener("load", function() {
    var viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute("content", viewport.content + ", height=" + window.innerHeight);
})

try{
	todo_ul.innerHTML=localStorage.getItem("data")
}catch(error){
	console.log("No store data found")
}


add_tesk.addEventListener('click',()=>{
	const todo_inputTag=document.getElementById('todo_text')
	let todo_ul=document.querySelector('.todo_ul')
	const todo_text=document.getElementById("todo_text").value
	if(todo_text==''){
		setTimeout(()=>{
			alert("plz enter something")
		},100)
	}else{
		setTimeout(()=>{
			let li=document.createElement("li")
			li.innerHTML=todo_text
			todo_ul.appendChild(li)
			let span=document.createElement("span")
			span.innerHTML="\u00d7"
			li.appendChild(span)
			todo_inputTag.value=""
			save_Todos(todo_ul)
		},100)
	}
	
})



todo_app_content.addEventListener('click',(e)=>{
	let todo_ul=document.querySelector('.todo_ul')
	if(e.target.tagName=="LI"){
		e.target.classList.toggle("checked")
		save_Todos(todo_ul)
	}
	else if(e.target.tagName=="SPAN"){
		e.target.parentElement.remove()
		save_Todos(todo_ul)
	}
	
})

const save_Todos=(todo_ul)=>{
	localStorage.setItem("data",todo_ul.innerHTML)
}









