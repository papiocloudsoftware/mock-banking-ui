# Mock Banking User Interface

This is a mock interface for a sample bank home page.  It's built using the following languages/frameworks

| Language/Framework       | Usage |
| ------------------------ | ------- |
| [Typescript][typescript] | Language for generating type safe javascript                                                     |
| [React][react]           | Framework for building dynamic User Interfaces                                                   |
| [Material UI][material]  | React library for building User Interfaces that meet the [Material Design Spec][material-design] |

## Development Environment

To develop against this codebase, the following development tools should be installed on your
workstation first:
* [Node 12+](https://nodejs.org/en/download/)
* [Yarn](https://yarnpkg.com/) - `npm install -g yarn`
* [Git](https://github.com/git-guides/install-git)
* [GitHub](https://docs.github.com/en/github/getting-started-with-github/quickstart/set-up-git)

### IDE Setup

You can use your IDE of choice to develop in this app but it should have Typescript/React support at
a minimum.  The best recommendation for IDE is [VSCode](https://code.visualstudio.com/) as
it's free and works very well with Node/Typescript/React

### Running the Application

Upon download of the application, run the `yarn` command to install the dependencies.  This
needs to be done once upon initial download and any time `dependencies` or `devDependencies` are
changed in the [`package.json`](./package.json) file.

Once dependencies are installed, run `yarn start` to build the application and start the
development server.  This will launch a browser at [http://localhost:3000/]() where you will
be able to test the application.  Any changes made to code will be automatically updated
in the browser while the development server is running.

[react]: https://reactjs.org/
[typescript]: https://www.typescriptlang.org/docs/handbook/intro.html
[material]: https://material-ui.com/
[material-design]: https://material.io/

## Other Scripts

In the project directory, you can run the following `scripts` defined in the [`package.json`](./package.json):

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn serve`

Runs the site from the `build` folder.  Can be run after `yarn build` to test the production
built site.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
