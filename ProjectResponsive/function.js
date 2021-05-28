
function Addz(){
	if($("#txtName").val()=='')
	{
		alert('Kolom Nama tidak boleh kosong')
	}
	else
	{
		var client = JSON.stringify({
			ID    : $("#txtID").val(),
			Name  : $("#txtName").val(),
			Phone : $("#txtPhone").val(),
			Email : $("#txtEmail").val()
		});
		tblOrder.push(client);
		localStorage.setItem("tblOrder", JSON.stringify(tblOrder));
		alert("The data was saved.");
		List()
		Clear()
		
		
	}
	// return true;
} 

function Edit(){
    
	tblOrder[selected_index] = JSON.stringify({
			ID    : $("#id").val(),
			ItemName  : $("#itemname").val(),
			Price : $("#price").val(),
			Code : $("#code").val(),
			Payment : $("#payment").val()
		});//Edit Data Yang Dipilih
	localStorage.setItem("tblOrder", JSON.stringify(tblOrder));
	alert("The data was edited.")
	operation = "A"; //Return default value
    List()
    Clear()
	location.reload();
	// return true;
} 

function Delete(){

	var c = confirm('Apakah Yakin Data Ini Akan Di Hapus?')
	if(c)
	{
		tblOrder.splice(selected_index, 1);
		localStorage.setItem("tblOrder", JSON.stringify(tblOrder));
		alert("Client deleted.");
		List();
		Clear()
	}
	
} 
function Clear()
{
    $("#id").val('');
	$("#itemname").val('');
	$("#price").val('');
	$("#code").val('');
	$("#payment").val('');
	$("#txtID").prop("readonly",false);
}
function List(){		
	$("#tblList").html("");
	$("#tblList").html(
		"<thead>"+
		"	<tr>"+
		"	<th></th>"+
		"	<th>ID</th>"+
		"	<th>Item Name</th>"+
		"	<th>Price</th>"+
		"	<th>Code</th>"+
		"   <th>Payment</th>"+
		"	</tr>"+
		"</thead>"+
		"<tbody>"+
		"</tbody>"
		);
	for(var i in tblOrder){
		var cli = JSON.parse(tblOrder[i]);
	  	$("#tblList tbody").append("<tr>"+
			"<td><img src='images/edit.png' alt='Edit"+i+"' class='btnEdit' data-id='"+i+"' style='cursor:pointer'/><img src='images/delete.png' alt='Delete"+i+"' class='btnDelete' data-id='"+i+"' style='cursor:pointer'/></td>" + 
			"<td>"+cli.ID+"</td>" + 
			"<td>"+cli.ItemName+"</td>" + 
			"<td>"+cli.Price+"</td>" + 
			"<td>"+cli.Code+"</td>" + 
			"<td>"+cli.Payment+"</td>" + 
	  		"</tr>");
	}
} 
