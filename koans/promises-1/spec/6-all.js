describe('Promise.all', function () {
  const getResource = function (url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200 || xhr.status === 304) {
            try {
              resolve(JSON.parse(xhr.responseText));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error('HTTP request failed'));
          }
        }
      };
      xhr.send();  
    });
  };
  it('should understand Promise.all', function () {
    return Promise.all([getResource('data/player/1.json'), getResource('data/player/7.json')])
      .then(result => expect(result).toEqual(__));
  });
  it('should understand how Promise.all deals with rejections', function () {
    return Promise.all([getResource('data/player/brake-it.json'), getResource('data/player/7.json')])
      .catch(reason => expect(reason).toEqual(__));
  });
});
