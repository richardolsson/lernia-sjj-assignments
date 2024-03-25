//initImperative();
//initDeclarative();
initFauxReact();

function initFauxReact() {
  let num = 0;

  const container = document.querySelector('#app');
  updateUi();

  function updateUi() {
    const requestedUi = render();

    requestedUi.forEach((requestedElem, index) => {
      const existingDomElement = container.children[index];
      let domElem;

      if (existingDomElement && existingDomElement.tagName == requestedElem.tag.toUpperCase()) {
        // Reusing existing DOM element
        domElem = existingDomElement;
      } else {
        // Create new DOM element
        domElem = document.createElement(requestedElem.tag);
        domElem.addEventListener('click', requestedElem.onClick);
        container.append(domElem);
      }

      domElem.textContent = requestedElem.content;

      if (requestedElem.style) {
        Object.keys(requestedElem.style).forEach(attribute => {
          domElem.style[attribute] = requestedElem.style[attribute];
        });
      }
    });
  }

  function render() {
    return [
      {
        tag: 'p',
        content: num,
      },
      {
        tag: 'button',
        content: (num == 0) ? 'Click me to increment' : `Click me again (${num})`,
        onClick: () => {
          num += 1;
          updateUi();
        },
      },
      {
        tag: 'button',
        content: 'Reset',
        style: {
          display: (num == 0) ? 'none' : 'inline-block'
        },
        onClick: () => {
          num = 0;
          updateUi();
        },
      },
    ];
  }
}

/**
 * This function initiates the interface using a purely "imperative"
 * approach, the same way we have in previous projects. Every time the
 * state changes, we also have to make updates to the UI. Beacuse state
 * changes from multiple places, we also have to update the UI from all
 * of those places.
 * 
 * Pros:
 * - Very fast
 * 
 * Cons:
 * - Some duplicate code
 * - Easy to make mistakes, especially when making changes to design
 */
function initImperative() {
  let num = 0;

  const p = document.createElement('p');
  p.textContent = num;

  const button = document.createElement('button');
  button.textContent = 'Click me to increment';
  button.addEventListener('click', () => {
    num += 1;

    // State (num) changed, so we have to update UI
    p.textContent = num;
    button.textContent = `Click me again (${num})`;
    resetButton.style.display = 'inline-block';
  });

  const resetButton = document.createElement('button');
  resetButton.textContent = 'Reset';
  resetButton.style.display = 'none';
  resetButton.addEventListener('click', () => {
    num = 0;

    // State (num) changed, so we have to update UI
    p.textContent = num;
    button.textContent = 'Click me to increment';
    resetButton.style.display = 'none';
  });

  const container = document.querySelector('#app');
  container.append(p);
  container.append(button);
  container.append(resetButton);
}


/**
 * This function initiates the interface using a "declarative" approach,
 * where the interface is declared to look a certain way for the current
 * state, and then is re-rendered from scratch whenever the state changes,
 * by emptying the DOM and building all of the elements again.
 * 
 * Pros:
 * - Easy for the programmer not to make mistakes
 * 
 * Cons:
 * - Slow performance
 * - Usability issues like losing focus when an element is removed
 */
function initDeclarative() {
  let num = 0;

  render();

  function render() {
    // Empty everything and start from scratch
    const container = document.querySelector('#app');
    container.innerHTML = '';

    const p = document.createElement('p');
    p.textContent = num;

    const button = document.createElement('button');
    button.addEventListener('click', () => {
      num += 1;

      // State (num) changed, so we have to update UI
      render();
    });

    // Conditional rendering based on state
    button.textContent = (num == 0)
      ? 'Click me to increment'
      : `Click me again (${num})`;

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => {
      num = 0;

      // State (num) changed, so we have to update UI
      render();
    });

    // Conditional rendering based on state
    resetButton.style.display = (num == 0)
      ? 'none'
      : 'display-block';

    container.append(p);
    container.append(button);
    container.append(resetButton);
  }
}