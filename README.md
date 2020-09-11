# Tap Room

### React Friday Independant Project, 09.11.2020

## By Benjamin Russell

## Description

This application will allow a user to track the different types of beer on tap at a tap room. The user will be able to see a list of all taps and see the details of a specific tap. The user will also be able to edit a taps details incase something was entered incorrectly. A tap can also be deleted when that keg is empty. Each time a beer is poured the amount of beer in the keg should be decreased and no more beer should be poured after the keg reaches 0 pints left.

## Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| 1. As a user, I want to see a list/menu of all available kegs. For each keg, I want to see its name, brand, price and alcoholContent. |  | List of all Beers on Tap List |
| 2. As a user, I want to submit a form to add a new keg to a list. | Add New Tap button | New Tap appears on list |
| 3. As a user, I want to be able to click on a keg to see its detail page. |  | Pfriem IPA details |
| 4. As a user, I want to see how many pints are left in a keg. | Pour button | 123 pints left |
| 5. As a user, I want to be able to click a button next to a keg whenever I sell a pint of it. This should decrease the number of pints left by 1. Pints should not be able to go below 0. | Pour button | Out of Stock |

## Known Bugs

_No known issues. Please contact me if you have any problems._

## Support and contact details

Please feel free to contact me through GitHub (username: brussell36) with any questions, ideas or concerns. 

## Technologies Used

* React.js
* Webpack
* Visual Studio Code 
* Git and Git BASH 
* JSX
* HTML
* BootStrap
* CSS

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Benjamin Russell_**


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
