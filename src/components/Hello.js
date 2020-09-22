import React, { Component } from 'react';
import '../styles/Hello.scss';
import myImg from '../assets/avatar.jpg';

export default class Hello extends Component {
  render() {
    return (
      <div className="myName">
        <img src={myImg} className="myImg" />
        <h1>HELLOE,</h1>
        <h2>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV</h2>
      </div>
    );
  }
}