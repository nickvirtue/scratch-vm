## Oclea scratch-vm
#### Modified Scratch VM library so we can have custom extensions [Original Scratch VM](https://github.com/LLK/scratch-vm) here.

## Installation
To set up a development environment to edit scratch-vm yourself:
```bash
git clone https://github.com/nickvirtue/scratch-vm.git
cd scratch-vm
yarn install
```
To use this version you need to link it:

```bash
yarn link
```
Then in `low-code-ai` client:
```bash
yarn link "scratch-vm"
```

## Development
To compile the extension to Vanilla JS in the correct location:
```bash
yarn run watch:extensiion
```
Now any changes you make will automatically be compiled AND if you are running low code AI locally it should detect the change, re-build and once you refresh the page..... new toys live.
