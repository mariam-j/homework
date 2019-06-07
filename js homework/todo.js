const myButt = document.getElementById('myButt');
const input = document.getElementById('input');

function enter(e) {
    if (e.which === 13) {
        addElements();
        removeText();
    }
}

function addElements() {
    const flexDiv = document.createElement('div');
    flexDiv.className = 'flexDiv';
    const newDiv = document.createElement('div');
    const newButt = document.createElement('button');
    flexDiv.appendChild(newDiv);
    flexDiv.appendChild(newButt);
    document.getElementById('list').appendChild(flexDiv);
    const text = document.getElementById('input').value;
    newButt.innerHTML = 'x';
    newDiv.className = 'newDiv';
    newButt.className = 'newButt';
    document.getElementById('list').style.textTransform = 'capitalize';
    newDiv.innerHTML = text;
    newButt.addEventListener('click', function() { list.removeChild(flexDiv) });

    function toggle() {
        if (newDiv.style.textDecoration == 'none') {
            newDiv.style.textDecoration = 'line-through';
            flexDiv.style.backgroundColor = '#5D5D65';
            newButt.style.backgroundColor = '#5D5D65';
        } else {
            newDiv.style.textDecoration = 'none';
            flexDiv.style.backgroundColor = '#C0C0C0';
            newButt.style.backgroundColor = '#F2CCCC';
        }
    }

    flexDiv.onclick = toggle;
}

function removeText() {
    input.value = null;
}



myButt.onclick = function() {
    if (input.value === '') {
        return alert('Write something');
    } else {
        addElements();
    }
}
input.addEventListener('click', removeText);
input.addEventListener("keyup", enter);