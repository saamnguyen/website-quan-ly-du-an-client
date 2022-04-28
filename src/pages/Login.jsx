import React from "react";

const Login = () => {
	return (
		<>
			<div className="login">
				<div className="">
					<header className="login__header">
						<div className="login__header-container ">
							<i className="bx bxs-buildings"></i>
							<h3>Trello</h3>
						</div>
					</header>
					<section className="login__section">
						<div className="login__title">
							<h5>Đăng xuất khỏi Trallo</h5>
						</div>
						<div className="login__profile">
							<div className="login__profile-wrapper">
								<section className="login__profile-section">
									<div className="login__profile-avatar">
										<img
											className="loggin__profile_img"
											src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/204612696_513858903381871_4463796854127515799_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=_JkJDGptUwoAX9BvAlc&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_WsQ9FSJpcm8rPyqdKlaU1243bUBGUgbUFJTtJgIvxhQ&oe=62847331"
											alt="avatar"
										/>
									</div>
									<section className="login__profile-text">
										<h2>Nguyen Trung Hieu</h2>
										<p>trunghieu.dev@actvn.edu.vn</p>
									</section>
								</section>
							</div>
						</div>
						<form action="post" className="login__form">
							<button>Đăng Xuất</button>
						</form>
						<div className="login__footer">
							<a href="">
								<span>Đăng nhập bằng tài khoản khác?</span>
							</a>
						</div>
					</section>
					<div className="login__foot">
						<div>
							<ul className="login__foot-list">
								<li>
									<a href="">
										<span>Chính sách bảo mật</span>
									</a>
								</li>
								<p>•</p>
								<li>
									<a href="">
										<span>Thông báo người dùng</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<footer className="footer">
					<span>NO COPYRIGHT</span>
				</footer>
			</div>
		</>
	);
};

export default Login;
