const myURL = new URL('https://example.org:8010');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';
console.log(myURL);
console.log(myURL.href);