import React from "react";
import { connect } from "react-redux";
import * as peopleActions from "../../store/people-actions.js";
import * as personActions from "../../store/person-actions.js";

const getPeople = props => {
  return (
    <header>
      <a href="#" onClick={() => props.get(props.link)}>
        <img src="https://vignette.wikia.nocookie.net/logopedia/images/6/6c/Star_Wars_Logo.svg/revision/latest/scale-to-width-down/634?cb=20160406191633" />
      </a>
    </header>
  );
};

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
)(getPeople);
