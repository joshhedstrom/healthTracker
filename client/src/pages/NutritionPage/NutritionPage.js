import React, { Component } from 'react';
import NutritionGoalCard from '../../components/NutritionGoalCard';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
const questions = [['fruitAndVegs',"Had 5-9 Servings of Fruits and Vegetables"], ['healthyFat',"Consumed at least 26 grams of healthy fat each day"], ['proteinBreakfast',"Eat at least 15 grams of protein for breakfast"],["newFruit","Tried a new Fruit or Vegetables"],["newReceipe","Experimented with a new healthy receipe"],["fastFood","Avoided Fast Food"],["noMeat","Refrained from eating meat"],["skipBreakfast","Didn't skip breakfast"],["noSugar","Avoided Sugar"],["noAlcohol","Refrained from alcohol"]]

class NutritionGoal extends Component {
  state = {
    progress: 0,
    currentDayId: "",
    updatedNutrition: 0,
    quantities: [],
    dates: [],
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

  }

  renderRedirect = () => {
    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />;
    }
  }

  componentDidMount() {
    //axios call to check current progress
    // Sets the url to query
    console.log('component mounted!')
    this.setState({
      toggled: localStorage.getItem('toggled') ? JSON.parse(localStorage.getItem('toggled')) : this.state.toggled,
    }, () => this.setState({      progress: Object.keys(this.state.toggled).reduce((count, key) => this.state.toggled[key] ? count + 1 : count, 0)
    }))
    let url = `/api/healthtracker/getDays/${localStorage.getItem('userId')}`

    // Sets the Authorization request header
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');

    axios.get(url)
    .then(res => {
      let data = res.data

      let nutritionQuantities = []
      let datesArr = []

      for (let i = data.length - 1; i > -1; i --) {
        nutritionQuantities.push(data[i].nutrition)
        // datesArr.push(moment(data[i].date).format("MM/DD/YYYY"))
      }

      this.setState({
        // progress: data[0] && data[0].nutrition ? data[0].nutrition : 'No progress yet...',
        currentDayId: data[0]._id,
        quantities: nutritionQuantities,
        dates: datesArr

      
      })
    })  

  }

  handleCheckboxChange = e => {
    console.log('inside handleCheckboxChange, e.target.value is: ', e.target.value)
    this.setState({
      toggled: {
        ...this.state.toggled,
        [e.target.value]: !this.state.toggled[e.target.value]
      }
    }, () => {
      localStorage.setItem('toggled', JSON.stringify(this.state.toggled))

      console.log(localStorage)
    })
  }
  
  handleSubmit = ()=> {
    //axios call to update database
  }

  handleChange = name => (event, isChecked) => {
    this.handleCheckboxChange(event)
    this.setState({
      [name]: event.target.checked
     })
     this.updateProgress(event.target.value, isChecked);
     console.log(event.target.value)
      }

      updateProgress = (value, isChecked) => {
        if (isChecked) {
          this.setState({progress: typeof(this.state.progress) === 'string' ? 0 : this.state.progress + 1 })
          localStorage.setItem(value, true)
        }  else  {
          this.setState({progress: this.state.progress - 1})
          localStorage.setItem(value, false)
        }
    }


    render() {
      return (
        <div>
          {this.renderRedirect()}
          <NutritionGoalCard 
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
