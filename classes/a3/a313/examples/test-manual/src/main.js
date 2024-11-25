import FakeAPI from './api.js';
import { TextFilter, TypeFilter } from './filters.js';
import AllChallengesList from './list.js';

const dataSource = new FakeAPI();

const container = document.querySelector('#container');
const buttons = document.createElement('div');
container.append(buttons);

const listElement = document.createElement('ul');
container.append(listElement);

const onlineButton = document.createElement('button');
onlineButton.textContent = 'online';
onlineButton.addEventListener('click', () => {
  const list = new AllChallengesList(dataSource, new TypeFilter('online'));
  list.render(listElement);
});
buttons.append(onlineButton);

const onsiteButton = document.createElement('button');
onsiteButton.textContent = 'onsite';
onsiteButton.addEventListener('click', () => {
  const list = new AllChallengesList(dataSource, new TypeFilter('onsite'));
  list.render(listElement);
});
buttons.append(onsiteButton);