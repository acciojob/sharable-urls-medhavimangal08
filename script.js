// your code here
let namefield=document.querySelector("#name")
let yearfield =document.querySelector("#year")
let btn=document.querySelector("#button")
btn.addEventListener("click",fullurl)
let url=document.querySelector("#url")

function fullurl(event) {
	event.preventDefault()
	let baseurl="https://localhost:8080";
	if(namefield.value && yearfield.value){
	 url.innerText=baseurl +"?"+namefield.id+"="+namefield.value+"&"+yearfield.id+"="+yearfield.value
	}
	if(namefield.value){
		url.innerText=baseurl +"?"+namefield.id+"="+namefield.value
}
	else if(yearfield.value){
        url.innerText = baseurl + "?" + yearfield.id + "=" + yearfield.value;
    }
}


