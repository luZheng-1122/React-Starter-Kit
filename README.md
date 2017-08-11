# USYD_IoT_starter_kit

### Intro
This starter kit is modified based on [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit), which is an excellent starter kit that integrates React, Redux and React-Router, it also has great and clear project architecture and structure, as well as some very useful tools such as Hot Reloading, and Redux DevTools. I also integrated `Material UI^1.0.0-beta.4` into this starter kit. You guys can read the docs below to find out more or feel free to ask me at any time.
* [davezuko/react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)
* [Material-UI](https://material-ui-1dab0.firebaseapp.com/getting-started/installation)

### How to run
```
git clone this project, or download the zip file then unzip it.
npm install
npm start
open http://localhost:3000/
```
### Recommendation
I highly recommend you to install 2 excellent tools(Browser Extensions) which help you better understand and monitor what's happening with React and Redux in real time:
* [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en), it helps you to see the structure as well as the props and states of React components in your Chrome developer tool.
* [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) as I mentioned, read the [Docs](https://github.com/gaearon/redux-devtools) to learn more.

### Examples
After you ran the app, you would see a yellow duck on your homepage, with the help of React Developer Tools, you can easily tell that this duck image is a part of the React component named HomeView, then find the code in
```
src/routes/Home/components/HomeView.js
```
Then you can try to write your own component here, or try putting some Material UI components like I did, I put 3 MUI buttons and 2 TextFields in this component.

Also, click 'Counter' to go to the counter page, open your Redux Devtools in a new window, click 'Increment' or 'Double' and see what happens on the page and in the Devtools, you should be able to see the actions and change of states in the Devtool.


### Keep your hands dirty!
Anyway, don't be afraid to try any ideas! Enjoy~