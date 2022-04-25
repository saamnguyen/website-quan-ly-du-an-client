import React from "react";

const NavBoard = () => {
    return (
        <div className="navboard">
            <div className="list">
                <div className="item">
                    <div className="left">
                        <i className="bx bxs-dashboard"></i>
                    </div>
                    <div className="right">
                        <p>Bảng</p>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <i className="bx bx-user"></i>
                    </div>
                    <div className="right">
                        <p>Thành viên</p>
                        <i className="bx bx-plus"></i>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <i className="bx bxs-brightness"></i>
                    </div>
                    <div className="right">
                        <p>Cài đặt</p>
                    </div>
                </div>
            </div>
            <div className="list">
                <div className="top">
                    <p>Các bảng của bạn</p>
                    <i className="bx bx-plus"></i>
                </div>
                <div className="item">
                    <div className="left">
                        <img
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/204612696_513858903381871_4463796854127515799_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_JkJDGptUwoAX9BvAlc&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WsQ9FSJpcm8rPyqdKlaU1243bUBGUgbUFJTtJgIvxhQ&oe=62847331"
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <p>Bảng</p>
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <img
                            src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/204612696_513858903381871_4463796854127515799_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_JkJDGptUwoAX9BvAlc&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WsQ9FSJpcm8rPyqdKlaU1243bUBGUgbUFJTtJgIvxhQ&oe=62847331"
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <p>Bảng</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBoard;
