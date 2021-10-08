function formValidation(){
    var itemNameErr, priceErr, discountErr;
    itemNameErr = document.forms["invoiceform"]["itemname"].value;
    if(itemNameErr == "" || itemNameErr == null){
        document.getElementById("iErr").innerHTML = "Please enter item name.";
    }
    priceErr = document.forms["invoiceform"]["price"].value;
    if(priceErr == "" || priceErr == null){
        document.getElementById("pErr").innerHTML = "Please enter price.";
    }
}