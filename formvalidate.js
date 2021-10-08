function errorCheck(){
	var item = document.getElementById("item-name");
	var price = document.getElementById("price");
	var discount = document.getElementById("discount");

	document.getElementById("items-table").style.display = "none";
	document.getElementById("invoice-table").style.display = "none";

	var error = document.getElementById("error");
	var heading = document.getElementById("heading").innerHTML = "";

	if(item.value == '' || price.value == '' || price.value < 0 || discount.value == '' || discount.value < 1 || discount.value > 100){
		if(item.value == ''){
			error.innerHTML = "Please enter item name";
		}
		if(price.value == ''){
			error.innerHTML = "Please enter price";
		}
		if(price.value < 0){
			error.innerHTML = "Price Should be non negative decimal number";
		}
		if(discount.value == ''){
			error.innerHTML = "Please enter discount";
		}
		if(discount.value < 1 || discount.value > 100){
			error.innerHTML = "Discount should be decimal and in between (1-100)";
		}
	}
	else{
		error.innerHTML = '';
		document.getElementById("heading").innerHTML = 'All Items';

		document.getElementById("generate-invoice").style.display = "inline-block";
		document.getElementById("items-table").style.display = "block";

		document.getElementById("th1").innerHTML = "Item Name";
		document.getElementById("th2").innerHTML = "Price";
		document.getElementById("th3").innerHTML = "Discount";

		var tab = document.getElementById("items-table");
		var r1 = tab.insertRow(-1);

		var d1 = r1.insertCell(0);
		var d1_text = document.createTextNode(item.value);
		d1.appendChild(d1_text);

		var d2 = r1.insertCell(1);
		var d2_text = document.createTextNode(price.value);
		d2.appendChild(d2_text);

		var d3 = r1.insertCell(2);
		var d3_text = document.createTextNode(discount.value);
		d3.appendChild(d3_text);

	}
}

function generateInvoice(){
	var item = document.getElementById("item-name");
	var price = document.getElementById("price");
	var discount = document.getElementById("discount");

	document.getElementById("heading").innerHTML = 'Invoice';
	document.getElementById("generate-invoice").style.display = "none";

	document.getElementById("items-table").style.display = "none";
	document.getElementById("invoice-table").style.display = "block";

	document.getElementById("ith1").innerHTML = "Item name";
	document.getElementById("ith2").innerHTML = "Price (in INR)";
	document.getElementById("ith3").innerHTML = "Discount (in %)";
	document.getElementById("ith4").innerHTML = "SGST";
	document.getElementById("ith5").innerHTML = "CGST";
	document.getElementById("ith6").innerHTML = "Final Price";

	var rowcount = document.getElementById("items-table").rows.length-1;
	var tab = document.getElementById("invoice-table");
	var sum_price = 0;
	var sum_disc = 0;
	var sum_sgst = 0;
	var sum_cgst = 0;
	var sum_final = 0;

	var SGST = 5;
	var CGST = 5;

	for(var i = 1; i<rowcount+1; i++){
		var r1 = tab.insertRow(1);

		for(var j = 0; j<3; j++){
			var d1 = r1.insertCell(j);
			var d1_value = document.getElementById("items-table").rows[i].cells[j].innerHTML;
			var d1_text = document.createTextNode(d1_value);
			d1.appendChild(d1_text);
		}
		var row_price = document.getElementById("items-table").rows[i].cells[1].innerHTML;
		var row_disc = document.getElementById("items-table").rows[i].cells[2].innerHTML;

		var discount_on_price = (row_price * row_disc)/100;
		var actual_price = row_price - discount_on_price;
		var sgst = (actual_price * SGST)/100;
		var cgst = (actual_price * CGST)/100;
		var final_price = actual_price - sgst - cgst;

		var sum_price = parseInt(sum_price) + parseInt(row_price);
		var sum_disc = parseInt(sum_disc) + parseInt(discount_on_price);
		var sum_sgst = parseInt(sum_sgst) + parseInt(sgst);
		var sum_cgst = parseInt(sum_cgst) + parseInt(cgst);
		var sum_final = parseInt(sum_final) + parseInt(final_price);

		var d4 = r1.insertCell(3);
		var d4_text = document.createTextNode(sgst);
		d4.appendChild(d4_text);

		var d5 = r1.insertCell(4);
		var d5_text = document.createTextNode(cgst);
		d5.appendChild(d5_text);

		var d6 = r1.insertCell(5);
		var d6_text = document.createTextNode(final_price);
		d6.appendChild(d6_text);

	}

	var r1 = tab.insertRow(-1);

	var d1 = r1.insertCell(0);
	var d1_text = document.createTextNode(rowcount);
	d1.appendChild(d1_text);

	var d2 = r1.insertCell(1);
	var d2_text = document.createTextNode(sum_price);
	d2.appendChild(d2_text);

	var d3 = r1.insertCell(2);
	var d3_text = document.createTextNode(sum_disc);
	d3.appendChild(d3_text);

	var d4 = r1.insertCell(3);
	var d4_text = document.createTextNode(sum_sgst);
	d4.appendChild(d4_text);

	var d5 = r1.insertCell(4);
	var d5_text = document.createTextNode(sum_cgst);
	d5.appendChild(d5_text);

	var d6 = r1.insertCell(5);
	var d6_text = document.createTextNode(sum_final);
	d6.appendChild(d6_text);

	document.getElementById("ith7").innerHTML = "Total";
	document.getElementById("ith8").innerHTML = "SUM of PRICE";
	document.getElementById("ith9").innerHTML = "SUM of DISCOUNT";
	document.getElementById("ith10").innerHTML = "SUM of SGST on all ITEMS (in INR)";
	document.getElementById("ith11").innerHTML = "SUM of CGST on all ITEMS (in INR)";
	document.getElementById("ith12").innerHTML = "FINAL PRICE";
    document.getElementById("printTable").style.display="block";
}

