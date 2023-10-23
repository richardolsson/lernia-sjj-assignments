function init() {
  const items = [];

  document.querySelector('.todoForm').addEventListener('submit', (ev) => {
    ev.preventDefault();

    const text = document.querySelector('.todoForm__input').value;
    const item = {
      id: `item-${items.length + 1}`,
      text: text,
      completed: false,
    };

    items.push(item);

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
  });

  function updateItems() {
    for (const item of items) {
      const itemElement = document.getElementById(item.id);
      itemElement.classList.toggle('todoList__item--completed', item.completed);
    }
  }
}

init();