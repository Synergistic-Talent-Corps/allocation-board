// Using Chrome, go to react.org, right click inspect, go to 'chrome web store'
// Extensions, search for 'react' and install 'React Developer Tools, 'Components tab' will be added in inspect

// Install node js - nodejs.org - 'node -v' in a command prompt will show you the version

// in VS Code, open a terminal, 'npm init' to create a new project
// - package name
// - version
// - description
// - index.jsx
// creates a package.json file

// open in terminal
// npm install --save react react-com
// npm install -D typescript
// npm install -D @types/react @types/react-dom
// npm install -D @types/node
// npm install -D webpack webpack/cli
// npm install -D ts-loader

// create tsconfig.json

// from a terminal
// npm run build

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Header } from './header';
import { CustomTime } from './custom-time';
import { FruitLoops } from './fruit-loops';
import { Footer } from './footer';

let fruit : Array<string> = [
    "red",
    "green",
    "blue",
    "yellow",
    "pink",
    "brown"
]

ReactDom.render(
    <div>
        <Header text="Hello World New Laptop"/>
        <CustomTime />
        <FruitLoops fruit={fruit} />
        <p>this is a paragraph</p>
        <a href="#">Click me</a>
        <Footer text="Copyright &copy; 2020 tapQA. All Rights Reserved"/>
    </div>,
    document.querySelector('#root')
)
