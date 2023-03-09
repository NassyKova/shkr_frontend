## 3 T3A2-B Full Stack App

A MERN Application built by Patrick Hamer and Anastasia Dyakova(aka Nassy Kova)
<br>
<img src="./docs/icons8-github-30.png" height="20"> [Patrick Hamer](https://github.com/Patrick655321)
<br>
<img src="./docs/icons8-github-30.png" height="20"> [Nassy Kova](https://github.com/NassyKova/)


App description

#

## Links

🌏 Deployed Application: [https://link](https://link)

⚙️ Staging Environment: [https://link](https://link)

💾 Server Repo: [https://github.com/Patrick655321/Shakr--Backend](https://github.com/Patrick655321/Shakr--Backend)

💻 Client Repo: [https://github.com/NassyKova/shkr_frontend](https://github.com/NassyKova/shkr_frontend)

📄 Part A Documentation: [https://github.com/NassyKova/Cocktail]https://github.com/NassyKova/Cocktail)


### System requirements

- NodeJS version v18.12.1


### Server Installation

- Create a directory called `shkr_front` and navigate into that directory.
  - `$ mkdir shkr_back && cd shkr_back`
- Once in the `/shkr_back` directory, in the terminal run the following command:
  - `git clone git@github.com:Patrick655321/Shakr--Backend.git`
- Install npm packages
  - `npm install`
- If a `.env` file has not been provided to you, create one and fill it out using the fields provided in the `.env.sample` file
- Run the server with the following command:
  - `npm run dev`
- This will run the server using nodemon

The API can now be accessed using Postman and `localhost:3000/`

### Client Installation

- Open the terminal and navigate to the `shkr_front` folder
  - `$ cd shkr_front`
- Once in the `/shkr_front` directory, in the terminal run the following command:
  - `git clone git@github.com:NassyKova/shkr_frontend.git`
- Install npm packages
  - `npm install --legacy-peer-deps`
- run the server with the following command:
  - `npm run dev`
- By default the server will run at `http://localhost:5000/`

## API Endpoints

API Endpoint documentation can be found [here](docs/apiendpoints.md)!!!!!

## Server Libraries and Dependencies

### Server Libraries

`mongoose ^6.8.4"`- Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports Node.js and Deno (alpha).

`express ^4.18.2` - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

`dotenv ^16.0.3` - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

`cors ^2.8.5"` - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

????

### Server Development Dependencies

`jest ^29.4.1` - Jest is a JavaScript testing framework that allows developers to run tests on JavaScript and TypeScript code and can be easily integrated with React JS.

<!-- `supertest ^6.3.3` - A Node.js library for testing APIs. Provides high level abstraction for testing. -->

`nodemon ^2.0.20` - Nodemon is a popular tool that is used for the development of applications based on node. js. It simply restarts the node application whenever it observes the changes in the file present in the working directory of your project.

## Client Libraries and Dependencies

### Client Libraries

`react: ^18.2.0` - React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.

`react-dom: ^18.2.0` - The react-dom package provides DOM-specific methods that can be used at the top level of your app and as an escape hatch to get outside the React model if you need to.

`react-router-dom: ^6.8.1` - React-router is the core package containing standard components and functionalities to implement routing in React applications.

`react-bootstrap: "^2.7.2`

`axios: "^1.3.4`

`react-bootstrap: "^2.7.2"`

`react-scripts: "5.0.1"`

`styled-components: "^5.3.6"`


Component libraries:
- `mui` - @mui/material: ^5.11.10,
- `antd` - antd: ^5.2.1,
- `emotion` - @emotion/react: "^11.10.5, @emotion/styled: ^11.10.5,


### Client Development Dependencies

`vite": "^4.0.0` - Vite allows developers to setup and build a front-end development environment for React that contains a dev server. It also has the feature of a Hot Module Reload which updates the server with changes to the codebase.

`@testing-library/jest-dom: ^5.16.5`

`@testing-library/react: ^13.4.0`

`@testing-library/react-hooks: ^8.0.1`

`@testing-library/user-event: ^14.4.3`

`@types/react: ^18.0.26`

`@types/react-dom: ^18.0.9`

`@vitejs/plugin-react: ^3.0.0`

`jsdom: ^21.1.0`

`vitest: ^0.28.3`


CMP1043-1.1 Demonstrate separation of concerns in the App.

CMP1043-1.2 Demonstrate DRY (Don’t Repeat Yourself) principles in all code.

CMP1043-1.3 Appropriate use of libraries used in the app
## Server Libraries and Dependencies

PRG1006-1.1 Demonstrate code flow control

PRG1006-1.2 Demonstrate use of functions

PRG1006-1.3 Apply Object oriented principles/patterns

PRG1006-2.1 Employ and utilise proper source control methodology

PRG1006-2.2 Employ and utilise project management methodology

PRG1006-2.3 Employ and utilise task delegation methodology

PRG1006-4.3 Utilises functions, ranges and classes

PRG1006-6.1 App functionality

PRG1006-6.2 Deployment

PRG1006-6.3 User interface

PRG1006-7.1 Development testing

PRG1006-7.2 Production testing

PRG1006-7.3 Formal testing framework
