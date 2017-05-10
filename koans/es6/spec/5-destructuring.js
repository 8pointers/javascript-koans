describe('Destructuring', () => {
  it('should understand destructuring 1', () => {
    const person = {
      firstName: 'Myamoto',
      lastName: 'Musashi'
    };
    const { firstName, lastName } = person;
    expect(firstName).toBe(__);
    expect(lastName).toBe(__);
  });
  it('should understand destructuring 2', () => {
    const person = {
      firstName: 'Myamoto',
      lastName: 'Musashi'
    };
    const { firstName: first, lastName: last } = person;
    expect(first).toBe(__);
    expect(last).toBe(__);
  });
  it('should understand destructuring 3', () => {
    const listeners = [];
    const myFunction = function (listener, { type, priority }) {
      listeners.push({ listener, type: type || 'default', priority: priority || 0});
    };

    myFunction (window.alert, { type: 'onBalanceChanged', priority: 2 });
    myFunction (window.alert, { type: 'onBalanceChanged' });
    myFunction (window.alert, { priority: 1 });

    expect(listeners).toEqual(__);
  });
});
