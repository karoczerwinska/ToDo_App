document.addEventListener('DOMContentLoaded', function () {

    var table = document.getElementById('to-do-list');
    var plus = document.getElementById('plus');
    var input = document.getElementById('my-input');
    var alertBox = document.getElementById('alert-box');

// dodawanie nowego wiersza

    function addRow(type) {

        var newRow = table.insertRow(table.rows.length - 1);

        // wstawianie nowych elementów <td>

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = '<input type="checkbox" class="checkbox">';
        cell2.innerHTML = '';
        cell3.innerHTML = `<p>${type.charAt(0).toUpperCase() + type.slice(1)}</p>`;
        cell4.innerHTML = '<div class="trash"><img src="./images/trash.png" alt="Delete item"> </img></div>';
    }

    plus.addEventListener('click', function newElement() {

        if (input.value === '') {
            alertBox.style.display = 'inline-block';
        }
        else {
            addRow(input.value);

            // czyszczenie wartości inputa po dodaniu

            input.value = '';
        }
    });

    // wykonanie zadania

    table.addEventListener('click', function(e) {

        // sprawdzenie czy target to obrazek

        if(e.target.matches('img')) {

            // jeżeli tak, to usuń wiersz tabeli

            e.target.parentElement.parentElement.parentElement.remove();
        }

        // sprawdzenie czy target to checkbox

        else if(e.target.matches('input.checkbox')) {

            // jeśli tak, to zmień klasę na 'done'

            var inputText = e.target.parentNode.parentNode.childNodes[2];

            var trashIcon = e.target.parentNode.parentNode.childNodes[3];

            inputText.classList.toggle('done-task');
            trashIcon.classList.toggle('done-trash');
        }
    })
});


