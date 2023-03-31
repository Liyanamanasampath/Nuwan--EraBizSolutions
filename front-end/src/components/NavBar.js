import React from "react";
import { Menu, Button, Col, Row, Image } from "antd";
import '../Styles/navbar.scss';
function NavBar() {
	return (
		<div className="nav-bar">
			<Row>
				<Col span={12}>
					<div className="logo">
						<Image src="C:\Users\acer\Desktop\React landing page\landing-application\src\images\logo.jpg" alt="Logo" />
					</div>
				</Col>
				<Col span={8}>
					<Menu mode="horizontal" className="menu-hr" >
						<Menu.Item key="home">
							Home
						</Menu.Item>
						<Menu.Item key="doctor">
							Doctor
						</Menu.Item>
						<Menu.Item key="service">
							Service
						</Menu.Item>
                        <Menu.Item key="review">
							Review
						</Menu.Item>
					</Menu>
				</Col>
				<Col span={4}>
					<Button type="primary" className="nav-button">
						CONTACT US
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default NavBar;
