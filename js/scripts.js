
document.addEventListener('submit', (e) => {
    e.preventDefault();  
    recordExpenses();
 });

function recordExpenses(){
    const table = document.getElementById('tableExpenses').getElementsByTagName('tbody')[0]; 
    const newRow = table.insertRow(0);

    const amount = document.getElementById('amount').value;
    const amountFormated  = '$' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    newRow.insertCell(0).innerHTML = amountFormated;
	newRow.insertCell(1).innerHTML = document.getElementById('description').value;

	newRow.insertCell(2).innerHTML = document.getElementById('categories').value;
    newRow.insertCell(3).innerHTML = dateCorrectFormat();
    
    newRow.insertCell(4).innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" id="delete">'

    document.getElementById('amount').value = '';
	document.getElementById('description').value = '';
	document.getElementById('categories').value = '';
    document.getElementById('date').value = '';
    
}

function deleteRow (e) {
    let deleteButton  = e.parentNode.parentNode.rowIndex;
    document.getElementById("tableExpenses").deleteRow(deleteButton);
} 

function dateCorrectFormat() {
    const date = document.getElementById('date').value.split('-');//date([year],[month],[day])
    const day = date[2];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthFormated = months[date[1] - 1]; 
    const dateFormat = monthFormated + ' - ' + day ;
    return dateFormat;
}
