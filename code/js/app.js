var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.onSuccess)
		.fail(app.onError);
	},
	onSuccess(dataJson) {
		console.log(dataJson);
		dataJson.profList.forEach(element => {
			let html=` 
			<tr>
			<td>${element.nome}</td>
			<td>${element.cognome}</td>
			<td>${element.materia}</td>
		  </tr>`;
		  $('#dataTable').append(html); // PROF: questo non andava spostato dentro il ciclo
			
		});
		
		// Update the table
		
		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
