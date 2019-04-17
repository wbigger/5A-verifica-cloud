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
			let html = `<tr>
			<td>${element.nome}</td>
			<td>${element.cognome}</td>
			<td>${element.materia}</td>
		  </tr>`;
		  $('#container').append(html);
		});

		// Update the table
		$('#dataTable').DataTable();