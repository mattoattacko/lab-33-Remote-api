import React from "react";
import { connect } from "react-redux";
import * as peopleActions from "../../store/people-actions.js";
import * as personActions from "../../store/person-actions.js";
import app from "../../app.module.scss";

const Modal = props => {
  return (
    <div className="modal" onClick={props.hideModal}>
      <div className={app.person}>
        {Object.keys(props.person).map((key, i) => (
          <div key={i}>
            <span>{key}:</span>
            <span>{props.person[key]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  person: store.person
});

const mapDispatchToProps = (dispatch, getState) => ({
  getPerson: url => dispatch(personActions.getPersonDetails(url))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
