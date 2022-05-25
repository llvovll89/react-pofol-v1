import React from "react";
import '../../App.css';
import '../Contact.css';

export default function Contact() {
    return (
        <>
            <div className="contact">
                <div className="contact-container">
                    <div className="contact-content">
                        <div className="main-title">CONTACT</div>
                        <div className="sub-title">저의 포트폴리오가 마음에 드신다면 연락처로 연락주시기 바랍니다.</div>
                    </div>
                </div>
                <div className="contact-icons">
                <i className="fab fa-github" />
                <i className="fas fa-envelope" />
                <i className="fab fa-instagram" />
                </div>
                <div className="copyright">@ 2022. Kim Geon ho. All rights reserved.</div>
            </div>
        </>
    )
}