import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="header">
            <div className="left">
                <div className="item menu">
                    <i className="bx bxs-grid"></i>
                </div>
                <Link to={"/"}>
                    <div className="item logo">
                        <i className="bx bxs-buildings"></i>
                        <h3>Trello</h3>
                    </div>
                </Link>
            </div>
            <div className="right">
                <div className="search">
                    <input type="text" placeholder="Tìm kiếm" />
                    <i className="bx bx-search"></i>
                </div>
                <div className="item">
                    <i className="bx bx-bell"></i>
                </div>
                <div className="item">
                    <i className="bx bx-error-circle"></i>
                </div>
                <div className="account">
                    <img
                        src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/204612696_513858903381871_4463796854127515799_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_JkJDGptUwoAX9BvAlc&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WsQ9FSJpcm8rPyqdKlaU1243bUBGUgbUFJTtJgIvxhQ&oe=62847331"
                        alt=""
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;
