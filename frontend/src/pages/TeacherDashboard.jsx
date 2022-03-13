import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody, Button } from "reactstrap";

import home from "../assets/img/home.png";
import cap from "../assets/img/cap.png";
import user from "../assets/img/user.png";
import settings from "../assets/img/settings.png";
import logout from "../assets/img/logout.png";
import helmet from "../assets/img/helmet.png";
import stopwatch from "../assets/img/stopwatch.png";
import gintoki from "../assets/img/gintoki.png";

// MEETING CONTROL IMAGES
import mic from "../assets/img/meeting-controls/mic.png";
import cameraOn from "../assets/img/meeting-controls/cameraOn.png";
import hand from "../assets/img/meeting-controls/hand.png";
import chat from "../assets/img/meeting-controls/chat.png";
import expand from "../assets/img/meeting-controls/expand.png";
import exit from "../assets/img/meeting-controls/exit.png";
import screenShare from "../assets/img/meeting-controls/screenShare.png";

import daoko from "../assets/daoko.mp4";

class TeacherDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraModal: false,
      studentList: [
        { firstName: "Anakin", lastName: "Skywalker" },
        { firstName: "Obi Wan", lastName: "Kenobi" },
        { firstName: "Galen", lastName: "Marek" },
        { firstName: "Qui Gon", lastName: "Jinn" },
        { firstName: "Plo", lastName: "Koon" },
        { firstName: "Ahsoka", lastName: "Tano" },
        { firstName: "Kit", lastName: "Fisto" },
        { firstName: "Luke", lastName: "Skywalker" },
        { firstName: "Jyn", lastName: "Erso" },
        { firstName: "Din", lastName: "Djarin" },
        { firstName: "Leia", lastName: "Organa" },
      ],
    };

    this.toggleCameraModal = this.toggleCameraModal.bind(this);
  }

  toggleCameraModal() {
    this.setState((prevState) => ({ cameraModal: !prevState.cameraModal }));
    console.log("log test", this.state.cameraModal);
  }

  render() {
    return (
      <>
        <main className="teacher-dashboard">
          <Modal
            centered
            size="lg"
            className="student-data-modal"
            toggle={this.toggleCameraModal}
            isOpen={this.state.cameraModal}
          >
            <ModalBody>
              <img src={gintoki} alt="" />
            </ModalBody>
          </Modal>

          <div className="left">
            <div className="side-bar">
              <div>
                <div className="logo">P.</div>
                <div className="icons-list">
                  <img src={home} alt="" />
                  <img src={cap} alt="" />
                  <img src={user} alt="" />
                  <img src={settings} alt="" />
                </div>
              </div>
              <img src={logout} alt="" />
            </div>
          </div>

          <div className="right">
            <div className="top-bar">
              <div className="exam-info">
                <h3>Class Report - </h3>
                <img src={helmet} alt="" />
                <h3>History</h3>
              </div>
            </div>

            <div className="bottom-container">
              {this.state.studentList.map((el) => {
                return (
                  <div className="student-card">
                    <img src={`https://ui-avatars.com/api/?name=${el.firstName}+${el.lastName}`} alt="" />
                    <h3>{`${el.firstName} ${el.lastName}`}</h3>
                    <h5>48934</h5>

                    <div className="info-container">
                      <div className="info-box">
                        <p className="info">B+</p>
                        <p className="tag">Avg. Grade</p>
                      </div>
                      <div className="info-box">
                        <p className="info">78.5%</p>
                        <p className="tag">Attendence</p>
                      </div>
                    </div>

                    <button>View Details</button>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default TeacherDashboard;
