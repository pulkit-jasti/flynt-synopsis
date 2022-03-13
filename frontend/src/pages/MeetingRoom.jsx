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

class MeetingRoom extends Component {
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
        <main className="exam-main">
          <Modal
            centered
            size="lg"
            className="camera-modal"
            toggle={this.toggleCameraModal}
            isOpen={this.state.cameraModal}
          >
            <ModalBody>
              <img src={gintoki} alt="" />
            </ModalBody>
          </Modal>
          {/* <div className="camera-overlay" id="camera-overlay">
          <div className="camera-window card">
            <div className="top">
              <h3>Camera</h3>
              <button className="close" id="close-camera">
                <img src="img/close.png" alt="" />
              </button>
            </div>
            <img src="img/gintoki.png" alt="" />
          </div>
        </div> */}
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
              <h3>Lecture - 3 </h3>
              <div className="exam-info">
                <img src={helmet} alt="" />
                <h3>History</h3>
              </div>
              <div className="time-left">
                <img src={stopwatch} alt="" />
                <h3>&nbsp; 1h 29m</h3>
              </div>
            </div>

            <div className="bottom-container">
              <div className="left">
                <div className="meeting-window card">
                  <video src={daoko}></video>

                  <div className="controls-trigger">
                    <div className="controls-box">
                      <div className="control-wrapper">
                        <img src={mic} alt="" />
                      </div>
                      <div className="control-wrapper" onClick={this.toggleCameraModal.bind(this)}>
                        <img src={cameraOn} alt="" />
                      </div>
                      <div className="control-wrapper">
                        <img src={hand} alt="" />
                      </div>
                      <div className="control-wrapper">
                        <img src={chat} alt="" />
                      </div>
                      <div className="control-wrapper">
                        <img src={screenShare} alt="" />
                      </div>
                      <div className="control-wrapper">
                        <img src={expand} alt="" />
                      </div>
                      <Link to="/">
                        <div className="control-wrapper">
                          <img src={exit} alt="" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right card">
                <h3>Participants</h3>

                <div className="student-list">
                  {this.state.studentList.map((el) => {
                    return (
                      <div className="student-wrapper">
                        <img src={`https://ui-avatars.com/api/?name=${el.firstName}+${el.lastName}`} alt="" />
                        <p>{`${el.firstName} ${el.lastName}`}</p>
                      </div>
                    );
                  })}
                </div>

                {/* <div className="chat">
                  <i className="fa fa-comments-o" aria-hidden="true"></i>
                  <p>Chat with the instructor</p>
                </div> */}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default MeetingRoom;
