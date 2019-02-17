// import React from "react";
// import { connect } from "react-redux";
// import app from "./app.module.scss";
// import * as peopleActions from "./store/people-actions.js";
// import * as personActions from "./store/person-actions.js";
// import GetPeople from "./components/getPeople/getPeople.js";
// import PeopleList from "./components/peopleList/peopleList.js";
// import Modal from "./components/modal/modal.js";
// import * as utils from './lib/utils.js';
// export default App;

// testing different display idea.

import React from "react";
import app from "./app.module.scss";
import * as utils from "./lib/utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [],
      person: {}
    };

    this.fetchPeople = this.fetchPeople.bind(this);
  }

  async fetchPeople(e) {
    e.preventDefault();
    let url = "https://swapi.co/api/people/";
    const data = await utils.get(url);
    const people = data.results;
    this.setState({ people });
  }

  async fetchPerson(url) {
    const person = await utils.get(url);
    this.setState({ person });
  }

  render() {
    return (
      <>
        <a href="#" onClick={this.fetchPeople}>
          <img src="https://vignette.wikia.nocookie.net/logopedia/images/6/6c/Star_Wars_Logo.svg/revision/latest/scale-to-width-down/634?cb=20160406191633" />
        </a>
        <section className={app.people}>
          <ul>
            {this.state.people.map((result, i) => (
              <li onClick={() => this.fetchPerson(result.url)} key={i}>
                {result.name}
              </li>
            ))}
          </ul>
          <div className={app.person}>
            {Object.keys(this.state.person).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.state.person[key]}</span>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}

export default App;
