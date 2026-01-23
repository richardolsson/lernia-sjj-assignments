export default class TypeFilter extends EventTarget {
  constructor(searchType) {
    super();

    this.searchType = searchType;
  }

  matches(challenge) {
    const notFiltering = !this.searchType;
    const typeMatches = challenge.type == this.searchType;
    return notFiltering || typeMatches;
  }

  render() {
    const filter = document.createElement('div');

    const label = document.createElement('label');
    label.textContent = 'By type';
    filter.append(label);

    const onlineLabel = document.createElement('label');
    onlineLabel.textContent = 'Online';
    filter.append(onlineLabel);

    const handleChange = () => {
      if (onlineCheckbox.checked && onsiteCheckbox.checked) {
        this.searchType = null;
      } else if (onlineCheckbox.checked) {
        this.searchType = 'online';
      } else if (onsiteCheckbox.checked) {
        this.searchType = 'onsite';
      } else {
        this.searchType = null;
      }

      this.dispatchEvent(new Event('change'));
    };

    const onlineCheckbox = document.createElement('input');
    onlineCheckbox.type = 'checkbox';
    onlineCheckbox.addEventListener('change', handleChange);
    onlineLabel.append(onlineCheckbox);

    const onsiteLabel = document.createElement('label');
    onsiteLabel.textContent = 'Onsite';
    filter.append(onsiteLabel);

    const onsiteCheckbox = document.createElement('input');
    onsiteCheckbox.type = 'checkbox';
    onsiteCheckbox.addEventListener('change', handleChange);
    onsiteLabel.append(onsiteCheckbox);

    return filter;
  }
}