import React from "react"

export default function Info() {
    return(
        <div className="info-container">
            <div><img className="img" src="./images/Brian.jpg"/></div>
                <div className="info-container">
                <h1 className="name">Brian Branca</h1>
                <small className="title">Frontend Web Developer</small>
                <a className="email-link" href="#">bbranca.io</a>
            </div>
            <div className="button-container">
                <a className="btn email-btn" href="mailto:brianbranca16@gmail.com" target="_blank">Email</a>
                <a className="btn linked-btn" href="https://www.linkedin.com/in/brian-branca-25aa58161/" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}


        //   <a href="mailto:brianbranca16@gmail.com" class="mybutton"
        //     ><i class="btn-i fas fa-envelope-square" title="Email"></i
        //   ></a>