function openFile(url){
	const p = new Promise((resolve,reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET',url);
		xhr.addEventListener('load',(e) => console.log(xhr.responseText));
		xhr.addEventListener('load',(e) => resolve(xhr));
		xhr.send();
	});

	return p;
}

async function loadAllFiles(){
	const xhr1 = await openFile('foo.txt');
	const xhr2 = await openFile('bar.txt');
	const xhr3 = await openFile('baz.txt');
	console.log('done!');
}

loadAllFiles();