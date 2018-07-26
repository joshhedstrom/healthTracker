import React, { Component } from 'react';
import NutritionGoalCard from '../../components/NutritionGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from "moment"

class NutritionGoal extends Component {
  state = {
    token: localStorage.getItem('jwtToken'),
    userId: localStorage.getItem('userId'),
    progress: 0,
    currentDayId: '',
    nutrition: 0,
    updatedNutrition: 0,
    quantities: [],
    dates: [],
    date: moment().format("MM/DD/YYYY"),
    toggled: {
      healthyFat: false,
      proteinBreakfast: false,
      fruitAndVegs: false,
      newFruit: false,
      newReceipe: false,
      fastFood: false,
      noMeat: false,
      skipBreakfast: false,
      noSugar: false,
      noAlcohol: false
    },
    redirect: false,
    isChecked: false
  };

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  };

  componentDidMount() {
    let savedDate = localStorage.getItem('date')
    if (moment().format("MM/DD/YYYY") !== savedDate ) {
      localStorage.setItem('toggled', JSON.stringify(this.state.toggled))
    }
    this.setState(
      {
        toggled: localStorage.getItem('toggled')
          ? JSON.parse(localStorage.getItem('toggled'))
          : this.state.toggled
      },
      () =>
        this.setState({
          progress: Object.keys(this.state.toggled).reduce(
            (count, key) => (this.state.toggled[key] ? count + 1 : count),
            0
          )
        })
    );
    let url = `/api/healthtracker/getDays/${localStorage.getItem('userId')}`;

    // Sets the Authorization request header
    axios.defaults.headers.common['Authorization'] = localStorage.getItem(
      'jwtToken'
    );

    axios.get(url).then(res => {
      let data = res.data;

      let nutritionQuantities = [];
      let datesArr = [];

      for (let i = data.length - 1; i > -1; i--) {
        nutritionQuantities.push(data[i].nutrition);
        datesArr.push(moment(data[i].date).format("MM/DD/YYYY"))
      }

      this.setState({
        updatedNutrition: data[0].nutrition,
        currentDayId: data[0]._id,
        quantities: nutritionQuantities,
        dates: datesArr
      });
    });
  }

  handleCheckboxChange = e => {
    this.setState(
      {
        toggled: {
          ...this.state.toggled,
          [e.target.value]: !this.state.toggled[e.target.value]
        }
      },
      () => {
        localStorage.setItem('toggled', JSON.stringify(this.state.toggled));
        localStorage.setItem('date', moment().format("MM/DD/YYYY") )
      }
    );
  };

  //axios call to update database
  handleSubmit = () => {
    let arr = this.state.quantities;

    arr.splice(-1,1)
    arr.push(this.state.updatedNutrition);

    this.setState({ nutrition: this.state.updatedNutrition }, () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem(
        'jwtToken'
      );
      axios
        .post('/api/healthTracker/updateNutrition', {
          nutrition: this.state.progress,
          id: this.state.currentDayId
        })
        .then(data => data)
        .catch(err => {
          console.log(err);
        });
    });
    console.log("updated nutrition data")
    console.log(this.state)
  }

  handleChange = name => (event, isChecked) => {
    this.handleCheckboxChange(event);
    this.setState({
      [name]: event.target.checked
    });
    this.updateProgress(event.target.value, isChecked);
    console.log(event.target.value);
  };

  updateProgress = (value, isChecked) => {
    if (isChecked) {
      this.setState({
        progress:
          typeof this.state.progress === 'string' ? 0 : this.state.progress + 1
      });
      localStorage.setItem(value, true);
    } else {
      this.setState({ progress: this.state.progress - 1 });
      localStorage.setItem(value, false);
    }
  };

  render() {
    return (
      <div>
        {this.renderRedirect()}
        <NutritionGoalCard
          quantities={this.state.quantities}
          dates={this.state.dates}
          handleChange={this.handleChange.bind()}
          progress={this.state.progress}
          handleSubmit={this.handleSubmit}
          toggled={this.state.toggled}
        />
      </div>
    );
  }
}

export default NutritionGoal;
