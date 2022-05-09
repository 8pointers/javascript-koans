# JavaScript Koans

## Prerequisites

- evergreen web browser
- git client
- Docker (Docker Desktop on MacOS/Windows)
- Visual Studio Code with [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed

## Setup

Clone the repository:

```sh
git clone https://github.com/8pointers/javascript-koans.git
```

Open the `javascript-koans` folder in Visual Studio Code.

If Visual Studio Code prompts you to reopen the folder in container, accept. Otherwise open Visual Studio Code Command Palette (CMD+SHIFT+P/CTRL+SHIFT+P) and select `Remote-Containers: Rebuild and Reopen in Container`.

Once the container is built and ready, open Visual Studio Code Command Palette and select `View: Toggle Terminal` (CTRL+`) to open a built-in terminal and then run:

```sh
npm start
```

To run all the tests:

```sh
npm test
```

To run a specific test(s):

```sh
npm test -- src/1-intro/1-game-of-life.test.js
npm test -- 1-game-of-life
npm test --  --testNamePattern "should return false when a live cell has more than three live neighbours - overcrowding"
```
