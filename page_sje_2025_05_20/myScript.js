function generateTable() {
	const items = [
		{ name: "Apple", price: 10},
		{name: "Banana", price: 15},
		{name: "Cherry", price: 20},
		{name: "Orange", price: 30},
		{name: "Plum", price: 25},
	];
		
	const tbl = document.createElement("table");
		
	const header = tbl.createTHead();
	const headerRow = header.insertRow();
	const headerCell1 = headerRow.insertCell(0);
	const headerCell2 = headerRow.insertCell(1);
	headerCell1.innerText = "Name";
	headerCell2.innerText = "Price";
	
	const tblBody = document.createElement("tbody");
	for (let i = 0; i < items.length; i++) {
		const row = tblBody.insertRow();
		const cell1 = row.insertCell(0);
		const cell2 = row.insertCell(1);
		cell1.innerText = items[i].name;
		cell2.innerText = `$${items[i].price}`;
	}
	
	tbl.appendChild(tblBody);
	document.body.appendChild(tbl);
	
	tbl.setAttribute("border", "2");
}