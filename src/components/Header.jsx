import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { Login } from "../pages";

const Header = () => {
	const [hidden, setHidden] = useState(false);

	const toggleLoggin = () => {
		setHidden(!hidden);
		console.log(hidden);
	};

	const removeLoggin = () => {
		setHidden(false);
		console.log(hidden);
	};

	const toggleAlert = () => {
		alert("Chức năng này sẽ được bổ sung sau!!!");
	};

	return (
		<nav className="header">
			<div className="left">
				<div className="item menu">
					<Link to="/board/1">
						<i className="bx bxs-grid"></i>
					</Link>
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
					<i className="bx bx-bell" onClick={() => toggleAlert()}></i>
				</div>
				<div className="item">
					<i className="bx bx-error-circle" onClick={() => toggleAlert()}></i>
				</div>
				<div className="account">
					<img
						onClick={() => toggleLoggin()}
						onfocusout={() => removeLoggin()}
						src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/204612696_513858903381871_4463796854127515799_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_JkJDGptUwoAX9BvAlc&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WsQ9FSJpcm8rPyqdKlaU1243bUBGUgbUFJTtJgIvxhQ&oe=62847331"
						alt=""
					/>
					<div className={clsx("loggin", hidden && "hidden")}>
						<div className="loggin__components">
							<p className="loggin__title">Account</p>
						</div>
						<div className="loggin__components loggin__profile">
							<div className="loggin__profile-wrapper">
								<img
									className="loggin__profile_img"
									src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/204612696_513858903381871_4463796854127515799_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_JkJDGptUwoAX9BvAlc&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WsQ9FSJpcm8rPyqdKlaU1243bUBGUgbUFJTtJgIvxhQ&oe=62847331"
									alt="avatar"
								/>
								<div className="loggin__profile_title">
									<p className="loggin__profile_title-name">
										Nguyen Trung Hieu
									</p>
									<p className="loggin__profile_title-email">
										trunghieu.dev@actvn.vn
									</p>
								</div>
							</div>
							<p className="loggin__add" onClick={() => toggleAlert()}>
								Add another account
							</p>
						</div>
						<div className="loggin__components">
							<a className="loggin__add" onClick={() => toggleAlert()}>
								Profile and visibility
							</a>
							<a className="loggin__add" onClick={() => toggleAlert()}>
								Activity
							</a>
							<a className="loggin__add" onClick={() => toggleAlert()}>
								Cards
							</a>
							<a className="loggin__add" onClick={() => toggleAlert()}>
								Settings
							</a>
						</div>
						<div className="loggin__components">
							<a className="loggin__add" onClick={() => toggleAlert()}>
								Help
							</a>
							<a className="loggin__add" onClick={() => toggleAlert()}>
								Shortcuts
							</a>
						</div>
						<div className="loggin__components">
							<Link
								to="/login"
								className="loggin__add"
								onClick={() => toggleLoggin()}
							>
								<a>Log out</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
