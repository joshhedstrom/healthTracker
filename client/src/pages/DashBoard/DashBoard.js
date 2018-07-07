import React, { Component } from "react";
import UserInfoCard from '../../components/DashBoard/UserInfoCard';
import DailyProgress from '../../components/DashBoard/DailyProgress';

class DashBoard extends Component {



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