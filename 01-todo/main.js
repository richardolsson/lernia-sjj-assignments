function init() {
  const items = [];

  document.querySelector('.todoForm').addEventListener('submit', (ev) => {
    ev.preventDefault();

    const inputElement = document.querySelector('.todoForm__input');
    const text = inputElement.value;

    const existingErrorElement = document.querySelector('.todoForm__error');
    if (existingErrorElement) {
      existingErrorElement.remove();
    }

    if (text == '') {
      const errorElement = document.createElement('p');
      errorElement.textContent = 'Input must not be empty';
      errorElement.classList.add('todoForm__error');

      const formElement = document.querySelector('.todoForm');
      formElement.append(errorElement);

      return;
    }


    const item = {
      id: `item-${items.length + 1}`,
      text: text,
      completed: false,
    };

    items.push(item);

    inputElement.value = '';

    const listElement = document.querySelector('.todoList');

    const itemElement = document.createElement('li');
    itemElement.classList.add('todoList__item');
    itemElement.id = item.id;
    listElement.append(itemElement);

    const spanElement = document.createElement('span');
    spanElement.textContent = item.text;
    spanElement.classList.add('todoList__itemLabel');
    itemElement.append(spanElement);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('todoList__deleteButton');
    itemElement.append(deleteButton);

    spanElement.addEventListener('click', () => {
      item.completed = !item.completed;
      updateItems();
    });

    deleteButton.addEventListener('click', () => {
      const index = items.indexOf(item);
      items.splice(index, 1);
      updateItems();
    });
  });

  function updateItems() {
    const itemElements = document.querySelectorAll('.todoList__item');
    for (const itemElement of itemElements) {
      const itemInArray = items.find(i => i.id == itemElement.id);
      if (itemInArray) {
        itemElement.classList.toggle('todoList__item--completed', itemInArray.completed);
      } else {
        itemElement.remove();
      }
    }

    const completedItems = items.filter(item => item.completed);
    const counterElement = document.querySelector('.todoCounter');
    counterElement.textContent = `${completedItems.length} completed`;
  }
}

init();