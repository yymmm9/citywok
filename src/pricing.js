function search() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('input');
  filter = input.value.toUpperCase();
  ul = document.getElementById("table");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h4")[0];
    b = li[i].getElementsByTagName("span")[0];
    txtValue = a.textContent || a.innerText;
    txtValueB = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else if (txtValueB.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



var publicSpreadsheetUrl =
	"https://docs.google.com/spreadsheets/d/1fIIYi44YiAsIbWOojNgVP8glBTPsJNPexOSfG_ER9Ho/pubhtml";

function init() {
	Tabletop.init({
		key: publicSpreadsheetUrl,
		callback: writePrice,
		simpleSheet: true
	});
}

function showInfo(data, tabletop) {
	console.table(data);
	let columnNames = Object.keys(data[0]);

	// let columnNames = Object.keys(data[0]);
	// columnNames.forEach( function(columnName){
	// console.log(data[0][columnName]);
	// });

	function trimPlace(jsonLocation, htmlID) {
		var myString = JSON.stringify(jsonLocation);
		if (myString.charAt(0) == '"') {
			b = myString.slice(1, myString.length - 1);
			return (document.getElementById(htmlID).innerHTML = b);
		} else return (document.getElementById(htmlID).innerHTML = myString);
	}

	function justTrim(jsonLoc, htmlID) {
		var imgString = JSON.stringify(jsonLoc);
		if (imgString.charAt(0) == '"') {
			c = imgString.slice(1, imgString.length - 1);
			return (document.getElementById(htmlID).src = c);
		} else return (document.getElementById(htmlID).src = imgString);
	}

	// trimPlace(data[0].marca, "marca")
	// trimPlace(data[0].tipo, "tipo")
	// trimPlace(data[0].nome, "nome")
	// trimPlace(data[0].img, "img")
	// trimPlace(data[0].screen, "screen");
	// trimPlace(data[0].connettore, "connettore")
	// trimPlace(data[0].cameraa, "cameraa")
	// trimPlace(data[0].camerap, "camerap")
	// trimPlace(data[0].vibrazione, "vibrazione")
	// trimPlace(data[0].sim, "sim")
}
// window.addEventListener("DOMContentLoaded", init);

// main logic
function writePrice(data, tabletop) {
  // All column names
	let columnNames = Object.keys(data[0]);
  // // Clicked device
	// let device = document.getElementsByClassName("fetched");
  // // Get clicked device's id to filter data from the sheet
	// var deviceId = parseInt(device[0].dataset.id);

	//console.log(deviceId);

  // array: [service name], [service price], [used for data fetching], [used svg icon]
	// let marca = ["Marca", data[deviceId][columnNames[0]], "marca"];
	// let tipo = ["Tipo Dispositivo", data[deviceId][columnNames[1]], "tipo"];
  let index = 0;
	let seq = ["Numero", data[index][columnNames[0]], "numero"];
	let nome = ["Nome", data[index][columnNames[1]], "nome"];
	let descrizione = ["Descrizione", data[index][columnNames[2]], "descrizione"];
	let prezzo = ["Prezzo", data[index][columnNames[3]], "prezzo"];
	let categoria = ["Categoria", data[index][columnNames[4]], "categoria"];


  // include all declared arrays into one
	let allServices = [
    seq,
    nome,
    descrizione,
    prezzo,
    categoria
	];

  // console.log(allServices);

	// clean html before fetching
	document.getElementById("services").innerHTML = "";
  
	// document.getElementById("fetched-device").innerHTML = nome[1];
	// document.getElementById("fetched-device").classList.remove("placeholder");
	

  	// let forScroll = document.createElement("div");
    //   // assign service id to the container
		// 	forScroll.classList.add("for-scroll")
		// 	// append each service to the parent
		// 	document.getElementById("services").appendChild(forScroll);


    let section = document.getElementById('table');


  let sum = 256;
  for (e = 0; e < sum; e++){
    // console.log(array[i]);
    console.log(e);

  	if( e + 1 == 01){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>ANTIPASTI</h3></div>`);
      }
    if( e + 1 == 17){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>ZUPPA</h3></div>`);
    }
    if( e + 1 == 21){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>INSALATE</h3></div>`);
      }
    if( e + 1 == 31){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>PRIMI</h3></div>`);
      }
    if( e + 1 == 45){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>GRIGLIE</h3></div>`);
      }
    if( e + 1 == 55){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>SECONDI</h3></div>`);
      }
    if( e + 1 == 70){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>VERDURE</h3></div>`);
      }
    if( e + 1 == 73){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>NIGIRI (2pz)</h3></div>`);
      }
    if( e + 1 == 81){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>TARTARE</h3></div>`);
      }
    if( e + 1 == 84){	
      console.log(e);
      section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>TEMAKI (cono)</h3></div>`);
      }
if( e + 1 == 93){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>ONIGIRI (triangolo di riso con ripieno 1pz)</h3></div>` )	}
if( e + 1 == 96){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>HOSOMAKI (piccolo rotolo 8pz)</h3></div>` )	}
if( e + 1 == 104){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>FUTOMAKI ( grande rotolo 5pz)</h3></div>` )	}
if( e + 1 == 108){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>GUNKAN (bocconcino di riso avvolto 2pz)</h3></div>` )	}
if( e + 1 == 113){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>CHIRASHI (riso con pesce crudo)</h3></div>` )	}
if( e + 1 == 116){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>SASHIMI (6pz)</h3></div>` )	}
if( e + 1 == 119){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>BARCA</h3></div>` )	}
if( e + 1 == 122){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>URAMAKI (rotolo di riso 8pz)</h3></div>` )	}
if( e + 1 == 133){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>URAMAKI SPECIALE (rotolo di riso 8pz)				</h3></div>` )	}
if( e + 1 == 150){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>SAUDATE (rettangolo di riso 8pz)</h3></div>` )	}
if( e + 1 == 152){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>CARPACCIO</h3></div>` )	}
if( e + 1 == 155){ section.insertAdjacentHTML('beforeend',`<div class="categoria"><h3>BIBITE</h3></div>` )	}
      
    console.log('c');
      section.insertAdjacentHTML('beforeend', `<li><div class='flex'><span>` + data[e][columnNames[0]] + `</span><h4 class='title'>` + data[e][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[e][columnNames[2]] + `</p><p>` + data[e][columnNames[3]] + `</p></div></li>`);

  };
      
      // for (i = 0; i < sum; i++){

      //   console.log(i);
              
      //         let container = document.createElement("li");
      //         // assign service id to the container
      //         // container.id = index;
      //         container.classList.add("device-container");
      //         // container.setAttribute('data-id', index);
      //         // container.setAttribute('data-ccursor', '');
              
      //         document.getElementById("table").appendChild(container);
      //         // assign icon, name, price to each service
      //         // document.getElementById(index).innerHTML =
      //         container.innerHTML =
      //         `<li class='device'><div class='flex'><span>` + data[i][columnNames[0]] + `</span><h4 class='title'>` + data[i][columnNames[1]] + `</h4></div><div class='flex'><p class='descrizione'>` + data[i][columnNames[2]] + `</p><p>` + data[i][columnNames[3]] + `</p></div></li>`;
      // }

}

document.querySelectorAll(".device-container").forEach((device) => {
	device.addEventListener("click", (event) => {
		var deviceId = parseInt(device.dataset.id);
    
    // 		var deviceName = this.innerHTML;
		
    // 		document.getElementById("fetched-device").innerHTML = deviceName; 

		// console.log(deviceId);

		// assigning placeholder
    document.getElementById("fetched-device").innerHTML = "";
    document.getElementById("fetched-device").classList.add("placeholder");
		document.getElementById("services").innerHTML = "<div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div><div class='service'><div class='service--img placeholder'></div> <span class='service--title placeholder'></span> <span class='service--price placeholder'></span></div>"
		document.getElementById("pricing").classList.add("show");
		document.getElementById("block").classList.add("show");

		document.querySelectorAll(".device-container").forEach((device) => {
			device.classList.remove("fetched");
		});

		document.getElementById(deviceId).classList.add("fetched");


		init();
  });
});

// document.querySelector("#block, .dragger").addEventListener("click", (event) => {
// 	document.getElementById('pricing').classList.remove("show");
// 	document.getElementById('block').classList.remove("show");
// });




// let url = array[i][1];
// let name = array[i][2];






init();