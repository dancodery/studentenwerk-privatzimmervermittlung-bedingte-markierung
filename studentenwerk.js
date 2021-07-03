var staedte = document.getElementsByClassName("tx-stwm-privatzimmervermittlung")[0].getElementsByTagName("table");

const minimale_groesse = 20;
const maximum_preis_pro_quadratmeter = 20;
const maximale_miete = 600;

for (let stadt of staedte) {
	stadt = stadt.getElementsByTagName("tbody")[0];

    for (var i = 0; i < stadt.rows.length; i++)	{
		var row = stadt.rows[i];
		var miete, groesse;

    	for (var j = 0; j < row.cells.length; j++) {
      		var cell = row.cells[j];
      		if (cell.classList.contains('miete')) {
      			miete = parseFloat(cell.innerText.substring(0, cell.innerText.length-2).replace(/\./g, '').replace(/,/g, '.'));
      		}
      		if (cell.classList.contains('groesse')) {
      			groesse = parseFloat(cell.innerText);
      		}
		}
		var ratio = Math.round(miete / groesse);
		var neue = document.createElement('td').appendChild(document.createTextNode(ratio));
		row.appendChild(neue);

		if (miete <= maximale_miete && groesse >= minimale_groesse && ratio <= maximum_preis_pro_quadratmeter) {		
			row.style.backgroundColor = '#22FF00';
		}
	}
}