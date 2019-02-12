import React from "react";
import { connect } from "react-redux";

import app from "./app.module.scss";
import * as peopleActions from "./store/people-actions.js";
import * as personActions from "./store/person-actions.js";
import GetPeople from "./components/getPeople/getPeople.js";
import PeopleList from "./components/peopleList/peopleList.js";
import Modal from "./components/modal/modal.js";

let url = "https://swapi.co/api/people/";

class App extends React.Component {
  // showModal = () => {
  //   this.setState({ showModal: true });
  // };

  // hideModal = () => {
  //   this.setState({ showModal: false });
  // };

  render() {
    return (
      <>
        <GetPeople link={url} />
        <section className={app.people}>
          <PeopleList />
          <Modal hideModal={this.hideModal} showModal={this.showModal} />
        </section>
      </>
    );
  }
}

const mapStateToProps = store => ({
  people: store.people,
  person: store.person
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: url => dispatch(peopleActions.get(url)),
  getPerson: url => dispatch(personActions.getPersonDetails(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
