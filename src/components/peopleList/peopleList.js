import React from "react";
import { connect } from "react-redux";
import * as peopleActions from "../../store/people-actions.js";
import * as personActions from "../../store/person-actions.js";

const peopleList = props => {
  return (
    <ul>
      {props.people.map((result, i) => (
        <li onClick={() => props.getPerson(result.url)} key={i}>
          {result.name}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = store => ({
  people: store.people
});

const mapDispatchToProps = (dispatch, getState) => ({
  get: url => dispatch(peopleActions.get(url)),
  getPerson: url => dispatch(personActions.getPersonDetails(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(peopleList);
