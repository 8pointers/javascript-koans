# JavaScript Koans

JavaScript Koans - exercises for my JavaScript workshop.

- Intro (Jest)
- Objects
- Functions part 1
- Arrays
- Functions part 2
- Functions part 3
- OOP
- Observable
- Promises
- Redux

## Prerequisites

- git client
- NodeJS 12.7.0+ & NPM 6.10.2+
- Recommended Visual Studio Code extensions:
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## How to run it

```bash
git clone https://github.com/8pointers/JavaScript-Koans.git koans
cd koans
npm install
```

### To run a single test from the command line
 
first install jest globally: ```npm install -g jest```.  Then run the test file with jest:

```bash
jest path/to/file.test.js
```
or
```bash
cd path/to
jest file.test.js
```

### To run all the tests from command line

```bash
npm test
```
