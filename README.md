## React Redux Communication

This project demonstrates basic communication between React components and Redux state management, including synchronous and asynchronous actions.

### Features

- Update person and game names using Redux actions
- Fetch users asynchronously from an API using Redux Thunk
- Display state updates in the UI

### Project Structure

```sh
react-redux-communication/
├── public/
├── ├──src/
├──     store/
├──     ├── actions/
├──         ├── gameActions.js
├──         ├── personActions.js
├──         ├── userActions.js
├──     ├── reducers/
├──         ├── gameReducer.js
├──         ├── personReducer.js
├──         ├── userReducer.js
├──     ├── index.js
│     ├── App.js
│     ├── App.css
│     ├── App.test.js
│     ├── index.css
│     ├── index.js
├── package.json
├── README.md
```

### Getting Started

#### Prerequisites

- Node.js (>=10)
- npm

#### Installation

**1. Clone the repository:**

```sh
git clone <repository-url>
cd react-redux-tutorial
```

**2. Install dependencies:**

```sh
npm install
```

**Running the App**

Start the development server:

```sh
npm start
```

The app will be available at http://localhost:3000.

#### Usage

- Click Update Person to change the person's name.
- Click Update Game to change the game's name.
- Click Fetch Users to load users from the API and display them.

#### Tech Stack

- React
- Redux
- React-Redux
- Redux Thunk
