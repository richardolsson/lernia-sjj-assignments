import LabelFilter from "./label.js";

describe('LabelFilter', () => {
  const labels = [
    'foo',
    'bar',
    'other',
    'label',
  ];

  it('matches when challenge has all selected labels', () => {
    const filter = new LabelFilter(labels);
    filter.setConfig({
      foo: true,
      bar: true,
    });

    expect(filter.matches({
      labels: ['foo', 'bar', 'other', 'label'],
    })).toBeTruthy();
  });

  it('does not match challenge is missing some selected labels', () => {
    const filter = new LabelFilter(labels);
    filter.setConfig({
      foo: true,
      bar: true,
    });

    expect(filter.matches({
      labels: ['foo', 'other', 'label'],
    })).toBeFalsy();
  });

  it('matches when no labels are selected', () => {
    const filter = new LabelFilter(labels);
    expect(filter.matches({
      labels: ['foo', 'other', 'label'],
    })).toBeTruthy();
  });
});
