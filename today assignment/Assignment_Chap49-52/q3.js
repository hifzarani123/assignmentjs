
        function addRow() {
            var newIndex = document.getElementById('index').value,
                newName = document.getElementById('name').value,
                newClass = document.getElementById('class').value,
                table = document.getElementById('table'),
                tableLength = (table.rows.length) - 1;
            table.insertRow(tableLength).outerHTML = "<tr id='row" + tableLength + "'><td id='index" +
                tableLength + "'>" + newIndex + "</td><td id='name" + tableLength + "'>" + newName +
                "</td><td id='class" + tableLength + "'>" + newClass + "</td><td class='buttons'><input type='button' value='Edit' class='edit' id='edit" +
                tableLength + "' onclick='editRow(" + tableLength + ")'><input type='button' value='Save' class='save' id='save" +
                tableLength + "' onclick='saveRow(" + tableLength + ")'><input type='button' value='Delete' class='del' id='delete" +
                tableLength + "' onclick='deleteRow(" + tableLength + ")'></td></tr>";
            document.getElementById('index').value = '';
            document.getElementById('name').value = '';
            document.getElementById('class').value = '';
        }
        function editRow(rowIndex) {
            document.getElementById('edit' + rowIndex).style.display = 'none';
            document.getElementById('save' + rowIndex).style.display = 'inline';
            var index = document.getElementById('index' + rowIndex),
                name = document.getElementById('name' + rowIndex),
                classes = document.getElementById('class' + rowIndex),
                indexEdit = index.innerHTML,
                nameEdit = name.innerHTML,
                classEdit = classes.innerHTML;
            index.innerHTML = '<input type="text" id="editIndex' + rowIndex + '" size="5" value="' + indexEdit + '">';
            name.innerHTML = '<input type="text" id="editName' + rowIndex + '" value="' + nameEdit + '">';
            classes.innerHTML = '<input type="text" id="editClass' + rowIndex + '" size="5" value="' + classEdit + '">';
        }
        function saveRow(rowIndex) {
            document.getElementById('index' + rowIndex).innerHTML = document.getElementById('editIndex' + rowIndex).value;
            var name = document.getElementById('editName' + rowIndex).value,
                classes = document.getElementById('editClass' + rowIndex).value;
            document.getElementById('name' + rowIndex).innerHTML = name
            document.getElementById('class' + rowIndex).innerHTML = classes
            document.getElementById('edit' + rowIndex).style.display = 'inline';
            document.getElementById('save' + rowIndex).style.display = 'none';
        }
        function deleteRow(rowIndex) {
            document.getElementById('row' + rowIndex).outerHTML = '';
        }