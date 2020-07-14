# allocation-board
Using Chrome, go to react.org, right click inspect, go to 'chrome web store'
Extensions, search for 'react' and install 'React Developer Tools, 'Components tab' will be added in inspect

Install node js - nodejs.org - 'node -v' in a command prompt will show you the version

Install Visual Studio Code or the IDE of your choice.

Install git

Connect Visual Studio Code to git: https://github.com/Synergistic-Talent-Corps/allocation-board

Once the code is on your machine, then the following two commands from a terminal:
- C:\git\allocation-board>npm install
    - this will install all of the dependancies in C:\git\allocation-board\package.json
- C:\git\allocation-board\Client>npm install
    - make sure the 'C' is uppercase. This will install all of the dependancies in C:\git\allocation-board\Client\package.json

To start working on the project, run teh first two commends below

1) In a Terminal window, start the Express server running on port 5000 run the command below. This will start the backend Express server and wait for changes to server.ts. If you make changes to server.ts, on save it will recompile and restart the backend server.
- C:\git\allocation-board>npm run dev

2) In another Terminal window, cd into the Client (make sure the 'C' is upper case) directory. To run the front end react server run the command below. This will start the front end react server, and if you make changes to any files under the Client directory and save, webpack will recompile everything and refresh the browser.
- C:\git\allocation-board\Client> npm run start:dev

3) To just build the bundle.js,
- C:\git\allocation-board\Client> npm run build
