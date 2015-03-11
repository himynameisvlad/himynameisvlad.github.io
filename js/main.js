//crossbrowser event obj
var events_obj = {

	add_event: function (el, type, fn) {
		if (addEventListener) {
			el.addEventListener(type, fn, false)
		}else if(attachEvent) {
			el.attachEvent('on' + type, fn)
		}else{
			el['on' + type] = fn;
		}
	},

	get_target: function (event) {
		if(event.target){
			return event.target;
		} else {
			event.srcElement;
		}
	},

	prevent_default: function (event) {
		if(event.preventDefault){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},

	remove_event: function (el, type, fn) {
		if (removeEventListener) {
			el.aremoveEventListener(type, fn, false)
		}else if(detachEvent) {
			el.detachEvent('on' + type, fn)
		}else{
			el['on' + type] = fn;
		}
	}
};


(function(){


//

	var inputsCollection = document.querySelectorAll('input[type=text]'),

	tables = document.getElementsByTagName('table'),
	table_a = document.getElementById('table-a'),
	table_b = document.getElementById('table-b'),
	table_c = document.getElementById('table-c'),

	switch_a = document.getElementById('switch-A'),
	switch_b = document.getElementById('switch-B'),

	aside = document.getElementsByTagName('aside')[0],

	inputs_a_collection = table_a.getElementsByTagName('input'),
	inputs_b_collection = table_b.getElementsByTagName('input'),
	inputs_c_collection = table_c.getElementsByTagName('input'),

	add_row_btn = document.getElementsByClassName('add-row')[0],
	add_col_btn = document.getElementsByClassName('add-col')[0],
	del_row_btn = document.getElementsByClassName('del-row')[0],
	del_col_btn = document.getElementsByClassName('del-col')[0],

	inputs = Array.prototype.slice.call(inputsCollection),
	inputs_a = Array.prototype.slice.call(inputs_a_collection),
	inputs_b = Array.prototype.slice.call(inputs_b_collection),
	inputs_c = Array.prototype.slice.call(inputs_c_collection),

	warning_mess = document.getElementById('warning').getElementsByTagName('p')[0],

	inputsFocus = function (e) {

		events_obj.prevent_default(e);

		var elem = events_obj.get_target(e),
		elem_attr = elem.getAttribute('type'),
		elem_parent = elem.parentNode;

		elem.value = '';
		elem.style.color = '#404040';

		aside.style.backgroundColor = '#5299DB';

		if (elem_attr == "text") elem_parent.className = 'input-focused';
	},

	inputsBlur = function (e) {

		events_obj.prevent_default(e);

		var elem = events_obj.get_target(e),
		elem_attr = elem.getAttribute('type'),
		elem_parent = elem.parentNode;

		aside.style.backgroundColor = '#BCBCBC';

		if (elem_attr == "text") elem_parent.className = '';
		if (elem.value == '') inputsValueCoord(elem)

	},

	inputsValueCoord = function (item) {

		var table_parent = item.parentNode.parentNode.parentNode.parentNode;
		td_parent = item.parentNode, tr_parent = item.parentNode.parentNode;
		item.style.color = '#c9c9c9';

		if(item.getAttribute('disabled')){
			td_parent.style.background = 'rgba(0,0,0, .15)';
		}

		item.value = table_parent.getAttribute('data-matrix') + (tr_parent.rowIndex + 1) + ',' + (td_parent.cellIndex + 1);
		item.setAttribute('data-cell', tr_parent.rowIndex + 1 + '' + (td_parent.cellIndex + 1));
	},

	inputsSetCoord = function (arr) {

		for (var i = arr.length - 1; i >= 0; i--) {

			var input_item = arr[i];
			inputsValueCoord(input_item);

			arr[input_item.getAttribute('data-cell')] = input_item;

			delete arr[i]

		};

	},

	inputsClearItem = function (arr) {

		var table_parent = arr[11].parentNode.parentNode.parentNode.parentNode;

			for(var i = table_parent.rows.length - 1; i>=0 ; i--){
				for(var j = table_parent.rows[i].cells.length - 1; j>=0 ; j--){
					inputsValueCoord(arr[table_parent.rows[i].cells[j].childNodes[0].getAttribute('data-cell')]);
				}

			}

	},

	inputsClearAll = function () {

		inputsClearItem(inputs_a);
		inputsClearItem(inputs_b);
		inputsClearItem(inputs_c);

	},

	swapMatrix = function (e) {

		events_obj.prevent_default(e);

		var top_m = document.getElementsByClassName('top-matrix')[0],
		bot_m = document.getElementsByClassName('bot-matrix')[0];

		top_m.parentNode.insertBefore(bot_m, top_m);

		top_m.className = '';
		top_m.className = 'bot-matrix';
		bot_m.className = '';
		bot_m.className = 'top-matrix';
	},

	btnsCheckTableA = function () {

		var rows_length = table_a.rows.length,
		cells_length = table_a.rows[0].cells.length;

		if(rows_length === 1 && cells_length === 10){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 10 && cells_length === 1){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 1 && (6 <= cells_length && cells_length <= 10)){
			add_row_btn.setAttribute('disabled', true);
		}else if(cells_length === 1 && (6 <= rows_length && rows_length <= 10)){
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 2 && cells_length === 5){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 4 && cells_length === 2){
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 2 && cells_length === 4){
			add_row_btn.setAttribute('disabled', true);
		}else if(rows_length === 5 && cells_length === 2){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 3 && cells_length === 3){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else{
			add_row_btn.removeAttribute('disabled');
			add_col_btn.removeAttribute('disabled');
		}

		if(cells_length === 1 && (2 < rows_length && rows_length <= 10)){
			del_col_btn.setAttribute('disabled', true);
			del_row_btn.removeAttribute('disabled');
		}else if(rows_length === 1 && (2 < cells_length && cells_length <= 10)){
			del_row_btn.setAttribute('disabled', true);
			del_col_btn.removeAttribute('disabled');
		}else if(rows_length === 1 && cells_length === 2){
			del_row_btn.setAttribute('disabled', true);
			del_col_btn.setAttribute('disabled', true);
		}else if(cells_length === 1 && rows_length === 2){
			del_row_btn.setAttribute('disabled', true);
			del_col_btn.setAttribute('disabled', true);
		}else{
			del_row_btn.removeAttribute('disabled');
			del_col_btn.removeAttribute('disabled');
		}
	},


	btnsCheckTableB = function () {

		var rows_length = table_b.rows.length,
		cells_length = table_b.rows[0].cells.length;

		if(rows_length === 1 && cells_length === 10){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 10 && cells_length === 1){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 1 && (6 <= cells_length && cells_length <= 10)){
			add_row_btn.setAttribute('disabled', true);
		}else if(cells_length === 1 && (6 <= rows_length && rows_length <= 10)){
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 2 && cells_length === 5){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 4 && cells_length === 2){
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 2 && cells_length === 4){
			add_row_btn.setAttribute('disabled', true);
		}else if(rows_length === 5 && cells_length === 2){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else if(rows_length === 3 && cells_length === 3){
			add_row_btn.setAttribute('disabled', true);
			add_col_btn.setAttribute('disabled', true);
		}else{
			add_row_btn.removeAttribute('disabled');
			add_col_btn.removeAttribute('disabled');
		}

		if(cells_length === 1 && (2 < rows_length && rows_length <= 10)){
			del_col_btn.setAttribute('disabled', true);
			del_row_btn.removeAttribute('disabled');
		}else if(rows_length === 1 && (2 < cells_length && cells_length <= 10)){
			del_row_btn.setAttribute('disabled', true);
			del_col_btn.removeAttribute('disabled');
		}else if(rows_length === 1 && cells_length === 2){
			del_row_btn.setAttribute('disabled', true);
			del_col_btn.setAttribute('disabled', true);
		}else if(cells_length === 1 && rows_length === 2){
			del_row_btn.setAttribute('disabled', true);
			del_col_btn.setAttribute('disabled', true);
		}else{
			del_row_btn.removeAttribute('disabled');
			del_col_btn.removeAttribute('disabled');
		}
	},

	editingMatrix = function (e) {

		events_obj.prevent_default(e);

		var elem = events_obj.get_target(e),
		tbody_a_row_len = table_a.rows.length,
		tbody_b_row_len = table_b.rows.length,
		elem_add_row = (elem.className === 'grey-btn add add-row' || elem.parentNode.className === 'grey-btn add add-row'),
		elem_add_col = (elem.className === 'grey-btn add add-col' || elem.parentNode.className === 'grey-btn add add-col'),
		elem_del_row = (elem.className === 'grey-btn del del-row' || elem.parentNode.className === 'grey-btn del del-row'),
		elem_del_col = (elem.className === 'grey-btn del del-col' || elem.parentNode.className === 'grey-btn del del-col');

		if(switch_a.checked){

			// add new row (table A)
			if(elem_add_row){

				var new_row = table_a.insertRow(tbody_a_row_len);

				for(var i = table_a.rows[0].cells.length - 1; i >=0 ; i --){

					var new_cell = new_row.insertCell(-1),
					new_input = document.createElement('input');

					new_input.type = 'text';
					new_cell.appendChild(new_input);
					inputsValueCoord(new_input);
					inputs_a[new_input.getAttribute('data-cell')] = new_input;

				}

			// delete row at the end
			}else if(elem_del_row && table_a.rows.length > 1){

				//remove inputs from array
				for(var i = table_a.rows[tbody_a_row_len - 1].cells.length - 1; i>=0; i--){
					delete inputs_a[table_a.rows[tbody_a_row_len - 1].cells[i].childNodes[0].getAttribute('data-cell')]
				}

				table_a.deleteRow(tbody_a_row_len - 1);

			}

			// add column
			else if(elem_add_col){

				for(var i = table_a.rows.length - 1; i >=0 ; i --){

					var new_cell = table_a.rows[i].insertCell(-1),
					new_input = document.createElement('input');

					new_input.type = 'text';
					new_cell.appendChild(new_input);
					inputsValueCoord(new_input);
					inputs_a[new_input.getAttribute('data-cell')] = new_input;

				}

			}

			// delete column at the end
			else if(elem_del_col){

				for(var i = table_a.rows.length - 1; i >=0 ; i --){
					table_a.rows[i].deleteCell(-1)
				}
			}

			btnsCheckTableA();
		}else{

			//add new row (table B)
			if(elem_add_row){

				var new_row = table_b.insertRow(tbody_b_row_len);

				for(var i = table_b.rows[0].cells.length - 1; i >=0 ; i --){

					var new_cell = new_row.insertCell(-1),
					new_input = document.createElement('input');

					new_input.type = 'text';
					new_cell.appendChild(new_input);
					inputsValueCoord(new_input);
					inputs_b[new_input.getAttribute('data-cell')] = new_input;

				}

			}else if(elem_add_col){

				for(var i = table_b.rows.length - 1; i >=0 ; i --){

					var new_cell = table_b.rows[i].insertCell(-1),
					new_input = document.createElement('input');

					new_input.type = 'text';
					new_cell.appendChild(new_input);
					inputsValueCoord(new_input);
					inputs_b[new_input.getAttribute('data-cell')] = new_input;
				}
			}

			// delete row at the end
			else if(elem_del_row){

				//remove inputs from array
				for(var i = table_b.rows[tbody_b_row_len - 1].cells.length - 1; i>=0; i--){
					delete inputs_b[table_b.rows[tbody_b_row_len - 1].cells[i].childNodes[0].getAttribute('data-cell')]
				}

				table_b.deleteRow(tbody_b_row_len - 1);

			}

			// delete column at the end
			else if(elem_del_col){

				for(var i = table_b.rows.length - 1; i >=0 ; i --){
					table_b.rows[i].deleteCell(-1)
				}
			}

			btnsCheckTableB();
		}

	},

	setWarning = function () {
		if(warning_mess.style.display !== 'block'){
			aside.style.backgroundColor = '#f6c1c0';
			warning_mess.style.display = 'block';
		}
	},

	clearWarning = function () {
		if(warning_mess.style.display == 'block'){
			aside.style.backgroundColor = '#bcbcbc';
			warning_mess.style.display = 'none';
		}
	},

	multiplyMatrix = function () {
		var top_table = document.getElementsByClassName('top-matrix')[0].getElementsByTagName('table')[0],
		bot_table = document.getElementsByClassName('bot-matrix')[0].getElementsByTagName('table')[0],
		rows_top = top_table.rows.length, cols_top = top_table.rows[0].cells.length,
		rows_bot = bot_table.rows.length, cols_bot = bot_table.rows[0].cells.length;

		if((rows_top * cols_top) === (rows_bot * cols_bot) && (cols_top === rows_bot)){

				for (var k = 0; k < cols_bot; k++) {
				for (var i = 0; i < rows_top; i++) {
					var sum = 0;
					for (var j = 0; j < rows_bot; j++){
						sum +=  parseFloat(top_table.rows[i].cells[j].childNodes[0].value) * parseFloat(bot_table.rows[j].cells[k].childNodes[0].value);
					}
					if(!isNaN(sum)){

						for(var c = table_c.rows.length - 1; c >= 0; c--){
							table_c.deleteRow(c);
						};


						for (var d = 0; d < rows_top; d++) {
							table_c.insertRow(d);
						};

						var new_cell = table_c.rows[i].insertCell(-1),
						new_input = document.createElement('input');


						new_input.type = 'text';
						new_cell.appendChild(new_input);
						new_input.value = parseFloat(sum);
						new_input.setAttribute('disabled', true);
						new_input.setAttribute('data-cell', (k + 1) + "" + (i + 1));

						if(new_input.getAttribute('disabled')){
							new_input.parentNode.style.background = 'rgba(0,0,0, .15)';
						}

						inputs_c[new_input.getAttribute('data-cell')] = new_input;
					}else{
						return false
					}
				};
			};
		}else{
			setWarning();
		}
	};


//set events
	inputsSetCoord(inputs_a);
	inputsSetCoord(inputs_b);
	inputsSetCoord(inputs_c);

	btnsCheckTableA();

	for (var i = tables.length - 1; i>=0; i --){
		events_obj.add_event(tables[i], 'focusin', inputsFocus);
		events_obj.add_event(tables[i], 'focusout', inputsBlur);
	};

	events_obj.add_event(document.getElementById('clear-matrix'), 'click', inputsClearAll);
	events_obj.add_event(document.getElementById('clear-matrix'), 'click', clearWarning);
	events_obj.add_event(document.getElementById('swap-matrix'), 'click', swapMatrix);


	events_obj.add_event(document.getElementById('label-A') , 'click', btnsCheckTableA);
	events_obj.add_event(document.getElementById('label-B') , 'click', btnsCheckTableB);

	events_obj.add_event(document.getElementById('multiply-btn'), 'click', multiplyMatrix);

	events_obj.add_event(document.getElementsByClassName('editing-controls')[0], 'click', editingMatrix);
	events_obj.add_event(document.getElementsByClassName('editing-controls')[0], 'click', clearWarning);
})()