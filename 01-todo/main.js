/*
4-stegsprocessen
1. Definiera
2. Bryt isär
3. Experimentera
4. Sätt ihop

Lägg till TODO
1. När användaren klickar på OK eller enter så
   läggs en Todo-item till med texten från input
2.  A: Upptäck klick på knapp
    B: Upptäck enter
    C: Hitta texten i input
    D: Skapa en todo item (DOM-element)
    E: Lägga till todo item
3. Experimentera
    A: addEventListener('click'): reagera + preventDefault()
    B: addEventListener('submit'): reagera + preventDefault()
    C: document.querySelector('input').value
    D: const li = document.createElement('li')
    E: document.querySelector('ul').append(li)
4: Sätt ihop
*/

const todoList = document.querySelector('ul');

document.querySelector('form').addEventListener('submit', ev => {
    const text = document.querySelector('input').value;
    const item = document.createElement('li');

    const itemText = document.createElement('span');
    itemText.innerText = text;
    item.append(itemText);

    const removeButton = document.createElement('button');
    removeButton.innerText = '🗑';
    item.append(removeButton);

    removeButton.addEventListener('click', () => {
        // Access "item" via "closure"
        todoList.removeChild(item);
    });

    todoList.append(item);
    ev.preventDefault();
});