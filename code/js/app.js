var app = {
	init: function() {
		console.log("init");
		$.getJSON("api/data.json")
		.done(app.onSuccess)
		.fail(app.onError);
	},
	onSuccess(dataJson) {
		console.log(dataJson);
		dataJson.proflist.forEach(element => {
			let html= `<tr>
			<td>${element.nome}</td>
			<td>${element.cognome}</td>
			<td>${element.materia}</td>
			</tr>`;
		// Update the table
		$('#dataTable').append(html); // PROF: questo non va all'interno del ciclo
		});

		
		
	},
	onError: function(e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
