import React, { Component } from "react";
import UserInfoCard from '../../components/DashBoard/UserInfoCard';
import DailyProgress from '../../components/DashBoard/DailyProgress';

class DashBoard extends Component {

	state = {
		waterIntake: 0,
		nutritionPoints: 0,
		exercsieHrs: 0,
		weightCurrent: 0,
	}



render() {
	return (
		<div>
			<UserInfoCard />
	      	<DailyProgress />
	    </div>

	)
}

};

export default DashBoard;