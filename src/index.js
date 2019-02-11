import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

//Convert the current react component state to use a Redux Store
//Create a store
//Connect to it, create it, provide from the index
//Connect to it from the component
//Create a reducer that holds the state
//Create actions that update the store after a fetch
//Alter your fetch to call those actions instead of doing a setState()
//Have a store for holding all people and a store for holding state of 1 person
//On each fetch, change the contents of the store.
//Alter the rendering function to use props instead of state
//Break the app into multiple components
//A wrapper that has the link
//A lister that shows the people
//A detailer that shows the person after being clicked on
//Convert the native fetch...() calls from being in the components to instead invoking action methods
//These should return functions that dispatch the real action
//You'll need to have thunk in place to make this work
//Cache the results in the store
//Once you're all wired up, alter the stores to hold onto state as you fetch things. This way, when you start clicking on people more than once, you don't end up going out to the API to get their data.

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
