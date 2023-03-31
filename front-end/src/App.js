import React, { Component } from "react";
import './Styles/app.scss';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import FilterSection from './components/FilterSection';


class App extends Component {

	render() {
		return (
			<div className="App">
				<NavBar />
				<HeroSection />
				<hr style={{ padding: 0 }} />
				<FilterSection getAllDoctors={this.getAllDoctors} />
			</div>
		);
	}
}

export default App;
