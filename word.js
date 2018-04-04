var words = [
	['Word1','Word1 definition'],
	['Word2','Word2 definition'],
	['Word3','Word3 definition'],
	['Word4','Word4 definition'],
	['Word5','Word5 definition']
]; 

document.addEventListener('click', function(e){
	var target = e.target.id;
	if(target == 'add'){
		if(document.getElementById('nword').value != '' && document.getElementById('dword').value != '')
		{
			words.push([document.getElementById('nword').value, document.getElementById('dword').value]);
			var p = document.createElement('p');
			var word = document.getElementById('allWords');
			p.classList.add('word');
			p.appendChild(document.createTextNode(document.getElementById('nword').value));
			word.appendChild(p);
			document.getElementById('nword').value = '';
			document.getElementById('dword').value = '';
		} else {
			alert('Error! One of Inputs is empty.');
		}
	}
	
})

document.addEventListener('mouseover', function(e){
	var target = e.target.innerHTML;
	for(var i=0; i<words.length; i++)
	{
		if(target == words[i][0])
		{
			document.getElementById('wordDefinition').innerHTML = words[i][1];
			break;
		} else {
			document.getElementById('wordDefinition').innerHTML = '';
		}
	}
});