// Submit event on the document

document.addEventListener('submit', (e) => {
    e.preventDefault();  
    recordExpenses();
 });


 // Record expenses entered into table

function recordExpenses(){
    const table = document.getElementById('tableExpenses').getElementsByTagName('tbody')[0]; 
    const newRow = table.insertRow(0);

    const amount = document.getElementById('amount').value;
    const amountFormated  = '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


// Insert cells into the new row and set their innerHTML to the corresponding values.

    newRow.insertCell(0).innerHTML = amountFormated;
	newRow.insertCell(1).innerHTML = document.getElementById('description').value;
	newRow.insertCell(2).innerHTML = document.getElementById('categories').value;
    newRow.insertCell(3).innerHTML = dateCorrectFormat();
    newRow.insertCell(4).innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" id="delete">'


 // Clear the input fields after recording the expenses.

    document.getElementById('amount').value = '';
	document.getElementById('description').value = '';
	document.getElementById('categories').value = '';
    document.getElementById('date').value = '';
    
}


// Deletes the row when clicking the button

function deleteRow (e) {
    let deleteButton  = e.parentNode.parentNode.rowIndex;
    document.getElementById("tableExpenses").deleteRow(deleteButton);
} 

// Formats the date
function dateCorrectFormat() {
    const date = document.getElementById('date').value.split('-');
    const day = date[2];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthFormated = months[date[1] - 1]; 
    const dateFormat = monthFormated + ' - ' + day ;
    return dateFormat;
}
