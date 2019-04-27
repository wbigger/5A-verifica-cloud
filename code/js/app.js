var app = {
	init: function () {
		console.log("init");
		$.getJSON("api/data.json")
			.done(app.onSuccess)
			.fail(app.onError);
	},
	onSuccess(dataJson) {
		console.log(dataJson);
		dataJson.schoolList.forEach(element => {
			let html = `
			<tr>
			<td>${element.nome}</td>
			<td>${element.cognome}</td>
			<td>${element.materia}</td>
		  	</tr>`;
			// Update the table
			// PROF: NON #dataTable ma "tbody" (o altro identificativo su tbody)
			$('#dataTable').append(html);
		});

		// PROF: non dovevi cancellare la riga per il refresh della tabella

	},
	onError: function (e) {
		console.log(`Ajax error: ${JSON.stringify(e)}`);
	}

}

$(document).ready(app.init);
