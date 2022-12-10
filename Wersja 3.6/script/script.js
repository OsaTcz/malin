let a = 0;
var testtable =[]
let index = 0;
var oldItems =[];
let listToDownload = [] ;
let id = oldItems.length;



function getDate() {

	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1 ;
	const year = date.getFullYear();
	return [year, month, day].join('-');

}
function getFullDate() {

	
	const date = new Date();
	const minute = date.getMinutes();
	const hour = date.getHours();
	const day = date.getDate();
	const month = date.getMonth() + 1 ;
	const year = date.getFullYear()
	
	return [year, month, day].join('/') + " " + [hour, minute].join(':')

}
function renderSortedListByID(){

	let sorted = oldItems.sort(function(a,b){
		return b.id- a.id   ;
	})
	return sorted
}


function OnInput() {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}
function renderList(tabIndex) {
	
	const Add = document.querySelector("#lista1");
	Add.innerHTML = "";
	
	oldItems = JSON.parse(localStorage.getItem('itemsArray'+tabIndex))
		for (let b in renderSortedListByID())
		{
			console.log(id)
			let obj = renderSortedListByID();
			
			let kolor = checkDeadline(obj[b].deadline);;
			
			
			const newOrder = `
				<div id = "order${kolor}">
					<div id = "order">
						<div id = "orderInfo">
							<div class="tekst date">${obj[b].date}</div>
							<div class="tekst id">${obj[b].id}</div>
							<div class="tekst tytul">${obj[b].tytul}</div>
							<div class="tekst opis">${obj[b].opis}</div>
							<div class="tekst osoba">${obj[b].osoba}</div>
							<div class="tekst status">${obj[b].status}</div>
							<div class="tekst kategoria">${obj[b].kategoria}</div>
							<div class="tekst deadline">${obj[b].deadline}</div>
						</div>

						<div id = "orderEdit">
							<div class="editBox date">
								
								<div class="datee">${obj[b].date}</div>
								<div>Data wstawienia</div>
							</div>
							<div class="editBox id">
								<div>Id</div>
								<div>${obj[b].id}</div>
							</div>
							<div class="editBox tytul">
							
							<input type="text" autocomplete="off" value="${obj[b].tytul}" id="tytulinput${b}" class="editBox1"/>	
							<div>Tytul</div>
							</div>
								
							<div class="editBox osoba">
							
							<input type="text" autocomplete="off" value="${obj[b].osoba}" id="osobainput${b}" class="editBox1"/>
							<div>Osoba</div>
							</div>

							<div class="editBox status">
							
							<input type="text" autocomplete="off" value="${obj[b].status}" id="statusinput${b}" class="editBox1"/>
							<div>Status</div>
							</div>

							<textarea name="w3review" rows="1" cols="20" id="opisinput${b}" class="opistextarea"></textarea>
													
							<div class="editBox kategoria">
							
							<input type="text" autocomplete="off" value="${obj[b].kategoria}" id="kategoriainput${b}" class="editBox1"/>
							<div>Kategoria</div>
							</div>
							<div class="editBox deadline">
							
							<input type="date" autocomplete="off" value="${obj[b].deadline}" id="deadlineinput${b}"class="editBox1"/>
							<div>Deadline</div>
							</div>
						</div>

						<div class = "button">
							<button id = "btn_edit">Edit</button>
							<button id = "btn_save">S</button>
							<button id = "btn_cancel">C</button>
							<button id = "btn_delete">D</button>
						</div> 
					</div> 
				</div>	
			`;
			
			Add.innerHTML += newOrder;
			
		}

}

renderList(tabIndex	)

function func(element, defaultHeight){
	if(element){
		const tager = element.target ? element.target : element;
		target.style.height = defaultHeight;
		target.style.height = `${target.scrollHeight}px`;
	}
}

// function checkDeadline(deadline){
// 	let now = getDate();
	
	
// 	if(deadline[5] == now[5] && deadline[6] == now[6]){
// 		let wynik = parseInt((deadline[8]+deadline[9]) - parseInt(now[8]+now[9]))
// 		if(wynik <= 3 ){
// 			return"red";
// 		} else if( wynik <= 5 ){
// 			return "orange";
// 		} 
// 	}
// 	else 
// 	{
// 		return "white";
// 	}	
// }


function checkDeadline(deadline){
	let now = getDate();
	
	//brak zabezpieczenia przed brakiem deadline'a
	if(deadline[3] <= now[3]){
		if(deadline[5] > now[5] || deadline[6] > now[6])
		{
			return "white";	
		}
		else
		{
			if(deadline[5] < now[5] || deadline[6] < now[6]){
				return "red"
			}
			else
			{
				let wynik = parseInt((deadline[8]+deadline[9]) - parseInt(now[8]+now[9]))
				if(wynik <= 3 ){
					return"red";
				} else if( wynik <= 5 ){
					return "orange";
				} 
				else 
				{
					return "white";
				}
			}
		}
	}
	return "white"
}
function addToStorage()
{
	let stare = "";

	for(let x = 0; x < oldItems.length ; x++)
	{	
		let tekst = 
		oldItems[x].date + "\r" +
		oldItems[x].id + "\r" +
		oldItems[x].tytul + "\r" +
		oldItems[x].opis + "\r" +
		oldItems[x].osoba + "\r" +
		oldItems[x].status + "\r" +
		oldItems[x].kategoria + "\r" +
		oldItems[x].deadline + "\r";
		
		stare += tekst
	}
	localStorage.setItem('downloadItem', stare)
}

function deleteRow(location)
{
	oldItems = oldItems.filter((el, index) => {
		return index !== location;
	});

	localStorage.setItem('itemsArray'+tabIndex, JSON.stringify(oldItems));
	renderList(tabIndex);
}

function pushNewOrder(id, outputTytul, outputOpis, outputOsoba, outputStatus, outputKategoria, outputDeadline)
{
	
	let outputDate = getDate();
	let testlist = JSON.parse(localStorage.getItem('itemsArray'+tabIndex))
	let newOrder = {
		date: outputDate,
		id: id,
		tytul: outputTytul,
		opis: outputOpis,
		osoba: outputOsoba,
		status: outputStatus,
		kategoria: outputKategoria,
		deadline: outputDeadline,
	}
	console.log(testlist)
	testlist.push(newOrder);
	
	
	outputTytul = "";
	outputOpis = "";
	outputOsoba = "";
	outputStatus = "";
	outputKategoria = "";
	outputDeadline = "";

	localStorage.setItem('itemsArray'+tabIndex, JSON.stringify(testlist));
}

document.querySelector("#btn1").addEventListener("click", () => {
	console.log("czysto")
	localStorage.clear();
	rendertabs()
});

document.querySelector("#add-order").addEventListener("click", () => {
	$(document).find('#add-order').hide()
	$(document).find('.Add').addClass('flex');
	a++;
});

document.querySelector("#save").addEventListener("click", () => {
	addToStorage();
	download(localStorage.getItem('downloadItem') ,"DataBase.txt", "text/plain")

});

function wypiszdane(b){
	let outputTytul = document.getElementById("tytulinput"+b).value;
	let inp = "#opisinput" + b;
	let outputOsoba = document.getElementById("osobainput"+b).value;
	let outputStatus = document.getElementById("statusinput"+b).value;
	let outputKategoria = document.getElementById("kategoriainput"+b).value;
	let outputDeadline = document.getElementById("deadlineinput"+b).value;
		
    outputTytul.value = oldItems[b].tytul;

	let tekst=oldItems[b].opis;
	const mytext = tekst.split(" ")

	for(let k=0; k<mytext.length; k++)
	{	
		if(mytext[k].includes("<a"))
		{	
			mytext.splice(k,1)
		}
		if(mytext[k].includes("https"))
		{
			const myArrayWypiszDane = tekst.split('"')
			let part = myArrayWypiszDane[1].substr(0, myArrayWypiszDane[1].length);
			if(mytext[k].includes("href"))
			{
				mytext[k]=part
			}
		}
	}
	let date = getFullDate()
	let cos = mytext.join(' ') +'\n'+ date + "  ";

	$(inp).val(cos);
    outputOsoba.value = oldItems[b].osoba;
    outputStatus.value = oldItems[b].status;
    outputKategoria.value = oldItems[b].kategoria;
    outputDeadline.value = oldItems[b].deadline;
}
function checkLink(text){

	let tekst = text;
	const myArray = tekst.split(" ");
	for(let k=0; k<myArray.length; k++)
	{	
		if(myArray[k].includes("https"))
		{
			if(!myArray[k].includes("href"))
			{
				let string = myArray[k]
				myArray[k]=string.link(myArray[k]);
			}
		}
	}
	let cos = myArray.join(' ');
	return cos;
	
}
document.querySelector("#lista1").addEventListener("click", (event) => {


	if(event.target.id === "btn_edit"){
		const edit = [...document.querySelectorAll("#btn_edit")];
		const elementIndex = edit.indexOf(event.target);
		displayButtonEdit(event.target);
		wypiszdane(elementIndex);
		index = elementIndex;
		
	}
	if(event.target.id === "btn_save"){
	
		const saves = [...document.querySelectorAll("#btn_save")];
		const elementIndex = saves.indexOf(event.target);

		let outputTytul = document.getElementById("tytulinput"+elementIndex).value;
		let outputOpis = document.getElementById("opisinput"+elementIndex).value;
		let outputOsoba = document.getElementById("osobainput"+elementIndex).value;
		let outputStatus = document.getElementById("statusinput"+elementIndex).value;
		let outputKategoria = document.getElementById("kategoriainput"+elementIndex).value;
		let outputDeadline = document.getElementById("deadlineinput"+elementIndex).value;
		
		
		oldItems[index].tytul = outputTytul
		oldItems[index].osoba = outputOsoba
		oldItems[index].status = outputStatus
		oldItems[index].kategoria = outputKategoria
		oldItems[index].opis = checkLink(outputOpis)
		oldItems[index].deadline = outputDeadline
		
		localStorage.setItem('itemsArray'+tabIndex, JSON.stringify(oldItems));	
		displayButtonsSaveCancelDelete(event.target)
		renderList(tabIndex)
	}
	if(event.target.id === "btn_cancel"){
		displayButtonsSaveCancelDelete(event.target)
	}
	if (event.target.id === "btn_delete") {
		const trashes = [...document.querySelectorAll("#btn_delete")];
		const location = trashes.indexOf(event.target);
		deleteRow(location);
		displayButtonsSaveCancelDelete(event.target)
	}
});

document.querySelector('#btnadd').addEventListener("click", () =>{


	const titleField = document.querySelector("#title");
	const opisField = document.querySelector("#opis");
	const personField = document.querySelector("#person");
	const stateField = document.querySelector("#state");
	const categoryField = document.querySelector("#category");
	const deadlineField = document.querySelector("#deadline");

	if(a=1)
	{
		$(document).find('#add-order').show()
	 	pushNewOrder(id, titleField.value, opisField.value, personField.value, stateField.value, categoryField.value, deadlineField.value) //idField.value,
		$(document).find('.Add').removeClass('flex');	
		a = 0;
		id++;
	}
	renderList(tabIndex);
})

document.querySelector('#btncancel').addEventListener("click", () =>{

	$(document).find('.Add').removeClass('flex');
	a = 0;
	$(document).find('#add-order').show()

})

const wrap = (s) => s.replace(
    /(?![^\n]{1,32}$)([^\n]{1,32})\s/g, '$1\n'
);

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function readFile(file) {

		let freader = new FileReader();

		let before = JSON.parse(localStorage.getItem('tabso'));

		freader.addEventListener('load', function(e) 
		{
			var newRow = e.target.result;
			let testlist=[]
			let beforee =[]
			//ylocalStorage.setItem('itemsArray'+tabIndex, JSON.stringify(newRow));
			localStorage.setItem('downloadItem'+tabIndex,newRow);

			textData = localStorage.getItem('downloadItem'+tabIndex);
			let aLines = textData.split("\r");

			$.each(aLines, function(n, sLine) 
			{
				
				if(aLines[n]!=false)
				{
					if(n % 8 == 0)
					{
						var date = aLines[n];
						var id = aLines[n+1];
						var title = aLines[n+2];
						var opis = aLines[n+3];
						var person = aLines[n+4];;
						var state = aLines[n+5]; 
						var category = aLines[n+6]; 
						var deadline = aLines[n+7];	
	
						
						const newOrder = {
							date: date,
							id: id,
							tytul: title,
							opis: opis,
							osoba: person,
							status: state,
							kategoria: category,
							deadline: deadline,
						}
						
						testlist.push(newOrder);
						localStorage.setItem('itemsArray'+tabIndex, JSON.stringify(testlist));
					}
					
				}
				
			})
			renderList(tabIndex);
			console.log(localStorage)
			testtable.push(testlist);
		
			before[(tabIndex-1)] = (file.name)
			
			localStorage.setItem('tabso', JSON.stringify(before))
			
	  	});

	  //freader.onload = x=> resolve(freader.result);
	  freader.readAsText(file);
 
}
async function readInputFile(input) {
	readFile(input.files[0]);
}

function displayButtonsSaveCancelDelete(cos)
{
	$(cos).closest( "div","button" ).find("#btn_save").hide();
	$(cos).closest( "div","button" ).find("#btn_cancel").hide();
	$(cos).closest( "div","button" ).find("#btn_delete").hide();
	$(cos).closest( "div","button"  ).find("#btn_edit").show();	
	$(cos).closest( "#order" ).find('#orderInfo').show();
	$(cos).closest( "#order" ).find('#orderEdit').removeClass("grid");;

}

function displayButtonEdit(cos){
		
	$(cos).closest( "div" ).find("#btn_edit").hide();
	$(cos).closest( "div" ).find("#btn_save").show();
	$(cos).closest( "div" ).find("#btn_cancel").show();
	$(cos).closest( "div" ).find("#btn_delete").show();
	$(cos).closest( "#order" ).find('#orderInfo').hide();
	$(cos).closest( "#order" ).find('#orderEdit').addClass("grid");
}


//wpisujac tekst 
// let query = "";

// document.querySelector("#filtrId").addEventListener("input", (e) => {
// 	query = e.target.value.toLowerCase().trim();
// 	console.log(query)
//     filterDataAndRenderCountriesList();
// });

// function filterDataAndRenderCountriesList(){
// 	const filteredCountries = mapId.filter((tytul) => {
// 		return (
// 			console.log(mapId.opis)
// 			//console.log(id.opis).toLowerCase().includes(query)
// 			// mapId.id.includes(query)
// 		);
// 	});

// 	console.log(filteredCountries);
// };

//wpisany tekst do inputu 

