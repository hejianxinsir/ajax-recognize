first.onclick = ()=>{
	const request = new XMLHttpRequest();
	request.open('GET', './first.html');
	request.onreadystatechange = ()=>{
		if(request.readyState === 4 && request.status === 200){
			console.log(request.response);
			const div = document.createElement('div');
			div.innerHTML = request.response;
			document.body.appendChild(div);
		}
	} 
	request.send();
}
