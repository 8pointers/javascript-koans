describe('Observable', function () {
  let next;
  beforeEach(function () {
    next = jasmine.createSpy('next');
  });

  it('1- should work', function () {
    const observable = Rx.Observable.create(function (observer) {
      observer.next(1);
    });

    observable.subscribe({ next });

    expect(next).toHaveBeenCalledWith(1);
  });
});
