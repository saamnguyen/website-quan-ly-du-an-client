import React from "react";

const Left = () => {
	return (
		<div className="home__left">
			<nav className="home__left-nav">
				<div className="home__left-nav_header">
					<ul className="home__left-nav_header__ul">
						<li className="home__left-ul_item">
							<a href="">
								<i class="bx bxs-dashboard"></i>
								<span>Boards</span>
							</a>
						</li>
						<div>
							<li className="home__left-ul_item">
								<a href="">
									<i class="bx bx-wallet-alt"></i>
									<span>Templates</span>
								</a>
							</li>
						</div>
						<li className="home__left-ul_item">
							<a href="">
								<i class="bx bx-home-alt-2"></i>
								<span>Home</span>
							</a>
						</li>
					</ul>
				</div>

				<div className="home__left-nav_body">
					<div>
						<ul className="home__left-body_list">
							<div className="home__left-body_header">
								<div className="home__left-body_header-text">
									<div>Workspaces</div>
								</div>
								<button>
									<i class="bx bx-plus"></i>
								</button>
							</div>

							<li className="">
								<a href="" className=" home__left-body_list-item">
									<div className="_1VpGxMa27o5FHE">T</div>
									<span>Không gian làm việc</span>
									<span className="icon">
										<i class="bx bx-chevron-down"></i>
									</span>
								</a>
								<ul className="">
									<li className="home__left-body_list-footer">
										<a href="" className=" _2GFX5xx4d2BRju _3FGea1Woz0t99E">
											<span className="icon">
												<i class="bx bxs-dashboard"></i>
											</span>
											<span className="text">Boards</span>
										</a>
									</li>
									<li className="home__left-body_list-footer">
										<a href="" className=" _2GFX5xx4d2BRju _3FGea1Woz0t99E">
											<span className="icon">
												<i class="bx bx-heart"></i>
											</span>
											<span className="text">Hightlights</span>
										</a>
									</li>
									<li className="home__left-body_list-footer">
										<a href="" className=" _2GFX5xx4d2BRju _3FGea1Woz0t99E">
											<span className="icon">
												<i class="bx bxl-windows"></i>
											</span>
											<span className="text">Views</span>
										</a>
									</li>
									<li className="home__left-body_list-footer">
										<a href="" className=" _2GFX5xx4d2BRju _3FGea1Woz0t99E">
											<span className="icon">
												<i class="bx bx-body"></i>
											</span>
											<span className="text">Members</span>
										</a>
									</li>
									<li className="home__left-body_list-footer">
										<a href="" className=" _2GFX5xx4d2BRju _3FGea1Woz0t99E">
											<span className="icon">
												<i class="bx bx-bug"></i>
											</span>
											<span className="text">Settings</span>
										</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Left;
