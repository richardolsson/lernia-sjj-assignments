//initImperative();
//initDeclarative();
initFauxReact();

/**
 * This function initializes code which emulates React (to some extent)
 * in architecture. The render() function works similarly to how a
 * React component works, in that it declares and returns an object
 * structure which describes the UI the way it's supposed to look only
 * for the current state (num). The separate updateUi() function will
 * run the render() function to get that declaration, and then do some
 * very naive logic to either create or update DOM elements to match
 * the current UI state. See more comments below.
 *
 * The purpose of this function is to explain the React architecture,
 * not to try and re-implement it in full.
 *
 * Pros
 * - Programmer defines UI declaratively (in render())
 * - UI updates quickly because DOM elements are not re-created
 *
 * Cons
 * - This only supports a small minority of what React does
 */
function initFauxReact() {
  let num = 0;

  /**
   * This function updates the state (num) and triggers an update
   * of the UI using updateUi().
   */
  function setNum(value) {
    num = value;
    updateUi();
  }

  const container = document.querySelector('#app');
  updateUi();

  /**
   * This function gets executed whenever state changes. It runs render()
   * which defines what the correct (requested) UI state is. It then
   * loops over the requested elements and updates the DOM to look
   * accordingly. When React does this for real, there's a lot more logic
   * going on to figure out what has actually changed, and which elements
   * in the DOM represent the elements in the previous and requested UI
   * state. But the principle is the same.
   */
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

      Object.keys(requestedElem.style).forEach(attribute => {
        domElem.style[attribute] = requestedElem.style[attribute];
      });
    });
  }

  /**
   * This is just a helper function which creates element objects
   * according to the rules of our "library". It is very similar to
   * how the React.createElement() function takes attributes and
   * creates objects that can be understood by the React UI updating
   * algorithm.
   *
   * In real React, this function is usually not spelled out by the
   * programmer, who instead uses JSX to express the elements, which is
   * then transpiled to normal JS, for example:
   *
   * <h1 className="header">Hello</h1>
   * createElement('h1', { className: 'header' }, 'Hello')
   *
   * It's important to understand that all that JSX does in React, is
   * to execute createElement() which in turn creates objects.
   */
  function createElement(tag, props, content) {
    return {
      tag: tag,
      style: {},
      content: content,
      ...props
    };
  }

  /**
   * This function is our equivalent of React components, i.e. a
   * function which returns an object (or in this case, an array of
   * objects) that define what the UI should look like right now.
   * Note how there is no imperative code, just a single return
   * statement.
   */
  function render() {
    return [
      // <p>{num}</p>
      createElement('p', null, num),
      createElement('button', {
        onClick: () => {
          setNum(num + 1);
        },
      }, (num == 0) ? 'Click me to increment' : `Click me again (${num})`
      ),
      createElement('button', {
        style: {
          display: (num == 0) ? 'none' : 'inline-block'
        },
        onClick: () => {
          setNum(0);
        },
      }, 'Reset'),
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