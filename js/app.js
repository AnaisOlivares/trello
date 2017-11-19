
window.addEventListener('load',function() {
	var spanerList = document.getElementById('spaner');
var containerBox = document.getElementById('container');
var firstBox = document.getElementById('firstId');
	//function add(){
		spanerList.addEventListener('click', function(){
			var inp = document.createElement('input');
			var btn = document.createElement('button');
			var spn = document.createElement('span');

			btn.textContent = 'Añadir una lista';
			spn.textContent = 'x';
			containerBox.appendChild(inp);
			containerBox.appendChild(btn);
			containerBox.appendChild(spn);
			containerBox.removeChild(spanerList);
//agregando clases





//creando evento al boton
btn.addEventListener('click',function(){
	var list = document.createElement('p');
	list.textContent = inp.value;
	inp.value = '';
	containerBox.appendChild(list);
	containerBox.removeChild(inp);
	containerBox.removeChild(btn);
	containerBox.removeChild(spn);
//brother debe ser display:inline-block, debo crear clases;
	var brother = document.createElement('div');
	brother.appendChild(inp);
	brother.appendChild(btn);
	brother.appendChild(spn);
	firstBox.appendChild(brother);



})


		})
	//}
});