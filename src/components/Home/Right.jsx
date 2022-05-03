import React from "react";

const Right = () => {
	return (
		<div>
			<div className="home__right">
				<div className="home__right-header">
					<div className="home__right-top">
						<div className="home__right-top_icon">
							<i class="bx bx-time-five"></i>
						</div>
						<div className="home__right-top_text">Recently viewed</div>
					</div>
					<div className="home__right-body">
						<a href="">
							<div></div>
							<span className="home__right-body-text">
								<span>Test</span>
								<span>Trello khÔng gian làm việc</span>
							</span>
						</a>
						<button className="home__right-body-btn">
							<i class="bx bx-star"></i>
						</button>
					</div>
				</div>
				<div className="home__right-header">
					<div className="home__right-bottom">
						<div>Links</div>
					</div>
					<div className="home__right-buttom-1">
						<button>
							<span className="home__right-buttom-1_icon">
								<i class="bx bx-plus"></i>
							</span>
							<span className="home__right-buttom-1_text">
								<span>Create a board</span>
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Right;
