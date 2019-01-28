import React, { Component } from "react";
import produce from "immer";

import { connect } from "react-redux";
// import { dbActivityLv4 } from "../actions/dbActions";
class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      homeworks: null
    };
  }

  componentDidMount() {
    this.findToFeedback();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.users !== this.props.users) {
      this.findToFeedback();
    }
  }

  handleOnChange = e => {
    console.log(e.target.value);
  };

  handleOnBlur = (hwIdx, qIdx, value) => {
    // console.log(p1, p2);
    console.log(hwIdx, qIdx, value);
    this.setState(
      produce(draft => {
        // console.log(draft.homeworks[hwIdx]["act"]["writing"][qIdx]);
        draft.homeworks[hwIdx]["act"]["writing"][qIdx]["feedback"] = value;
      })
    );
  };

  findToFeedback = () => {
    const users = this.props.users || null;
    if (users) {
      const homeworks = [];
      for (const userId in users) {
        if (users.hasOwnProperty(userId)) {
          const user = users[userId];
          console.log(user);
          for (const actKey in user.activity) {
            if (user.activity.hasOwnProperty(actKey)) {
              const act = user.activity[actKey];
              if (act.id === "quiz104") {
                if (
                  act.writing.filter(v => v.feedback.length === 0).length > 0
                ) {
                  homeworks.push({ userId, actKey, act, profil: user.profil });
                }
              }
            }
          }
        }
      }
      this.setState(
        produce(draft => {
          draft.homeworks = homeworks;
        })
      );
    }
  };

  renderInput = ({ hwIdx, qIdx, handleOnBlur }) => {
    this.blur = event => {
      handleOnBlur(hwIdx, qIdx, event.target.value);
    };

    return (
      <div className="row __q-ip-feedback">
        <div className="col-2">
          <span>피드백</span>
        </div>
        <div className="col-10">
          <textarea
            name="feedback"
            id="feedback"
            rows="3"
            className="w-100"
            onBlur={this.blur}
          />
        </div>
      </div>
    );
  };

  renderFeedback = () =>
    this.state.homeworks.map((student, hwIdx) => (
      <div className="feedback-input-container row" key={student.actKey}>
        <div className="student-info col-2">
          <div className="d-flex justify-content-around">
            <span>{student.profil.class}</span>
            <span>{student.profil.name}</span>
          </div>
        </div>
        <div className="col-10">
          {student.act.writing.map((q, qIdx) => (
            <div key={`${student.actKey}-${q.quiz.no}`}>
              <div className="row __q-question">
                <div className="col-2">
                  <span>주제</span>
                </div>
                <div className="col-10">
                  <div>{q.quiz.question}</div>
                </div>
              </div>

              <div className="row __q-ip1">
                <div className="col-2">
                  <span>입장</span>
                </div>
                <div className="col-10">
                  <div>{q.inputs.ip1}</div>
                </div>
              </div>

              <div className="row __q-ip2">
                <div className="col-2">
                  <span>이유/근거</span>
                </div>
                <div className="col-10">
                  <div>{q.inputs.ip2}</div>
                </div>
              </div>

              <div className="row __q-ip3">
                <div className="col-2">
                  <span>강조</span>
                </div>
                <div className="col-10">
                  <div>{q.inputs.ip3}</div>
                </div>
              </div>

              <this.renderInput
                hwIdx={hwIdx}
                qIdx={qIdx}
                handleOnBlur={this.handleOnBlur}
              />

              <div className="row submit">
                <div className="col offset-2">
                  <button className="btn btn-primary btn-sm">확인</button>
                </div>
              </div>

              <hr />
            </div>
          ))}
        </div>
      </div>
    ));

  render() {
    const { homeworks } = this.state;
    return (
      <div className="row">
        <div className="col-12">
          <h1>feed back page</h1>
        </div>
        <div className="col-12">{homeworks && <this.renderFeedback />}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ db }) => {
  return db;
};

export default connect(mapStateToProps)(Feedback);
