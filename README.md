## Country information fetching

A simple React.js application for fetching Country data.

## Instructions for the demo

- I decided to build the project with React and Typescript.
- I used Create React App to set up the project and built on the structure provided by it
- The workflow should contain 4 steps:
  1. Simple Header section that has title which is clickable and will navigate user to homepage and dark mode button which handles dark mode functionlities.
  2. Search box and Region filter which resulta are not limited to 8.
  3. List of 8 countries.
  4. Once user clicks on each country card it should be navigated to country details which display country details and borders.
- Local storage is used in order to handle the dark mode once page is being refreshed.
- Debouncing is used for search box to prevent unnecessary function call.
- Countries code are gathered in an array and Borders should be called with `promise.all()`
- I created a helper class for Api calls and reused it in different component to collect needed data.
- I used native `fetch()` to consume the API.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
