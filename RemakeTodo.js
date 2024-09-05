document.querySelector('#Submit').addEventListener('click',addList)
document.querySelector('#clear').addEventListener('click',clearList)

function addList(){
let inputValue = document.getElementById('searchInput').value 

let li = document.createElement('li');

li.textContent = inputValue;

document.getElementById('resultList').appendChild(li);

document.getElementById('searchInput').value = '';

let doneButton = document.createElement('button');
    doneButton.textContent = 'Done';

    doneButton.addEventListener('click',function(){
        li.style.textDecoration ='line-through';
    })
    li.appendChild(doneButton)

    //clearButton

    let clearButton = document.createElement('button');
    clearButton.textContent='X';
    clearButton.style.height= '24px';
    clearButton.style.width= '24px'; 

    clearButton.addEventListener('click',function(){
      li.remove()
    })
    li.appendChild(clearButton)

}

function clearList(){
    let ul = document.getElementById('resultList')
    ul.innerHTML=''
}