const HEADLINES = [
 'Series 1: Plain values, arithmetic and string ops',
 'Series 2: Basic arrays and loops',
 'Series 3: Basic objects and property access',
 'Series 4: Complex structures',
 'Series 5: Array/Object methods',
 'Series 6: Functions and function references',
 'Series 7: Exceptions',
 'Series 8: Putting it all together',
];

function loadCompleted() {
  try {
    const data = localStorage.getItem('completedExcercises');
    let completedExcercises = JSON.parse(data);

    return completedExcercises || {};
  }
  catch (err) {
    return {};
  }
}

function saveCompleted(exName, solution) {
  const completedExcercises = loadCompleted();

  localStorage.setItem('completedExcercises', JSON.stringify({
    ...completedExcercises,
    [exName]: solution,
  }));

  refreshResetButton();
}

function refreshResetButton() {
  const completed = loadCompleted();

  const oldResetButton = document.querySelector('#resetButton');
  if (oldResetButton) {
    oldResetButton.remove();
  }

  if (Object.keys(completed).length > 0) {
    const resetButton = document.createElement('button');
    resetButton.id = 'resetButton';
    resetButton.innerText = 'Clear all saved solutions';
    resetButton.addEventListener('click', () => {
      localStorage.setItem('completedExcercises', null);

      refreshResetButton();
    });

    document.querySelector('#intro').append(resetButton);
  }
}

function init() {
  refreshResetButton();
  window.addEventListener('storage', () => {
    console.log('hello');
    refreshResetButton();
  });

  initExcercises(document.querySelector('#excercises'), Object.values(excercises));
}

function initExcercises(ctr, excercises) {
  let idx = 0;
  let prevPrefix = null;

  const completed = loadCompleted();

  excercises.forEach(func => {
    const prefix = func.name.slice(0, 3);
    if (prefix != prevPrefix) {
      prevPrefix = prefix;

      const seriesHeader = document.createElement('h1');
      seriesHeader.textContent = HEADLINES[idx++];
      ctr.append(seriesHeader);
    }

    const exDiv = document.createElement('div');
    exDiv.className = 'excercise';
    ctr.append(exDiv);

    if (Object.keys(completed).includes(func.name)) {
      exDiv.classList.add('success');
    }

    const header = document.createElement('h2');
    header.textContent = `Excercise: ${func.name}`;
    exDiv.append(header);

    const code = document.createElement('pre');
    code.className = 'code';
    code.textContent = func.toString();
    exDiv.append(code);

    // Using _ prefix to avoid collison with code written by user
    const _input = document.createElement('textarea');
    _input.className = 'input';
    _input.textContent = completed[func.name] || 'input = ';
    exDiv.append(_input);

    const output = document.createElement('div');
    output.className = 'output';
    output.textContent = 'Enter input to function, then press Submit';
    exDiv.append(output);

    const button = document.createElement('button');
    button.className = 'submit';
    button.textContent = 'Submit';
    button.addEventListener('click', () => {
      exDiv.classList.remove('success');
      exDiv.classList.remove('failure');
      exDiv.classList.remove('error');

      try {
        const inputValue = eval(_input.value);
        const result = func(inputValue);

        if (result === true) {
          output.textContent = 'SUCCESS!';
          exDiv.classList.add('success');

          saveCompleted(func.name, _input.value);
        }
        else {
          output.textContent = 'Failure, try again';
          exDiv.classList.add('failure');
        }
      }
      catch (err) {
        exDiv.classList.add('error');
        output.textContent = 'ERROR! See console for details';
        console.error(err);
      }
    });

    exDiv.append(button);
  });
}
