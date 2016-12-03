# Welcome to React and Redux!

## Instructor

Eric Greene - [http://t4d.io](http://t4d.io) - [LinkedIn](https://www.linkedin.com/in/ericwgreene)

## Schedule

Class:
- Wednesday - Friday: 9:00am to 4:30pm (questions and answers from 4:30pm to 5pm)

Breaks:
- Morning: 10:15am to 10:30am
- Lunch: Noon to 1pm
- Afternoon #1: 2:05pm to 2:15pm
- Afternoon #2: 3:20pm to 3:30pm

## Course Outline

	JavaScript topics will be included as needed into the React & Redux content

- Day 1 - Overview of React, JSX, Props, State, Component Composition
- Day 2 - Forms, Overview of Flux, Overview of Redux, Reducers, Immutable Programming
- Day 3 - React & Redux, Asynchronous Programming 

## Links

### Instructor's Resources

- [DevelopIntelligence](http://www.developintelligence.com/)
- [Eric's Blog](http://t4d.io/)
- [WintellectNOW](https://www.wintellectnow.com/Home/Instructor?instructorId=EricGreene) - Special Offer Code: GREENE-2016
- [Microsoft Virtual Academy](https://mva.microsoft.com/search/SearchResults.aspx#!q=Eric%20Greene&lang=1033)
- [React Blog Posts - Post 4 - React Unit Tests](https://github.com/training4developers/react-flux-blog)
- [TopTal Videos](https://www.toptal.com/videos)
- [React SitePoint](http://www.sitepoint.com/author/ericgreene/)
- [Redux Videos](https://egghead.io/courses/getting-started-with-redux)

### Other Resources

- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [JavaScript Air Podcast](http://javascriptair.podbean.com/)
- [Speaking JavaScript](http://speakingjs.com/es5/)
- [TC39 Process - Feature Stages](http://www.2ality.com/2015/11/tc39-process.html)
- [Official ES2016 Features](http://www.2ality.com/2016/01/ecmascript-2016.html)
- [Possible ES2017 Features](http://www.2ality.com/2016/02/ecmascript-2017.html)

## Overview

This project configuration bundles JavaScript files with Webpack transpiling ES2017 and JSX code to run in an ES5.1 environment.

## Application Setup

Step 1. Install Node.js version 7 or higher. To install Node.js click [here](https://nodejs.org).

Step 2. Download this repository. Extract the zip file to a working folder on your system.

Step 3. Open a terminal window, change to the folder where you extracted the zip file. You should see a **package.json** file in the folder.

On Windows, the terminal is called "Node.js Command Prompt". This will command prompt will contain the proper paths for Node.js development. DO NOT RUN the Node.js program. Click the icon named "Node.js Command Prompt". For Mac users, the Mac terminal is all you need.

Step 4. From the terminal, run the following command:

```bash
$ npm i && npm start
```

It could take a few minutes for this command to complete. If you have connection issues due to a proxy server, please edit the **.npmrc** file per the instructions in those files. Then re-run the command above.

This set has been completed successfully when you receive the following message:

```bash
Hash: 9c2fcd4942f7122f9a69
[0] Version: webpack 1.13.2
[0] Time: 11132ms
[0]        Asset       Size  Chunks             Chunk Names
[0]       app.js    85.9 kB       0  [emitted]  app
[0] polyfills.js     745 kB       1  [emitted]  polyfills
[0]    vendor.js    7.15 MB       2  [emitted]  vendor
[0]   index.html  507 bytes          [emitted]  
[0]     + 657 hidden modules
[0] Child html-webpack-plugin for "index.html":
[0]         + 3 hidden modules
```

This terminal window is now running the web server, a second terminal window will need to be opened to run additional terminal commands.

Step 5. Open a web browser, and navigate to [http://localhost:3000](http://localhost:3000).  The React web application should load and be usable.

**To Modify the Web Application**

Step 6. Open your favorite text editor (such as [Atom](https://atom.io/) or [Visual Studio Code](https://code.visualstudio.com)), and modify the files in the **src** folder. When file changes are saved, **webpack** will automatically transpile and bundle the application code and assets, and deploy it to the **dist** folder. To see the changes, reload your web browser.

## NPM Scripts Command Reference

From a terminal, in the root project folder (where the **package.json** file exists), the following commands can be executed to perform various project development tasks.

- **npm start** - removes the dist folder, builds and deploys the web app, and starts the web app and the rest app
- **npm run clean** - removes the **dist** folder
- **npm run webpack:w** - runs webpack in watch mode so web app file changes are automatically processed, and deployed to the **dist** folder
- **npm run webpack** - runs webpack once to process web app files, and deploys them to the **dist** folder
- **npm run web** - starts the web server
- **npm run rest** - starts the rest server

## Useful Resources

- [React](https://facebook.github.io/react/)
- [Redux](https://github.com/reactjs/redux)
- [Babel](https://babeljs.io/)
- [Webpack](https://webpack.github.io/)
- [SASS](http://sass-lang.com/)