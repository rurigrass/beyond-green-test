import React from "react";
import Calculations from '../components/Calculations';
import FormView from '../components/FormView';
// import Co2GraphComponent from '../components/Co2GraphComponent.js';

class ContainerBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userTurnoverInputFromForm: null,
      userSpendInputFromForm: null,
    }
    this.handleUserTurnoverInput = this.handleUserTurnoverInput.bind(this);
    this.handleUserSpendInput = this.handleUserSpendInput.bind(this);
  }

  handleUserTurnoverInput(event){
    const userTurnoverInput = event.target.user_turnover_input.value;
    this.setState({userTurnoverInputFromForm: userTurnoverInput});

  }

  handleUserSpendInput(event){
  const userSpendInput = event.target.user_energy_input.value;
  this.setState({userSpendInputFromForm: userSpendInput});
}


  render(){
    return(
      <div className='container-box-contents'>
        <FormView
          handleUserTurnoverInput={this.handleUserTurnoverInput}
          handleUserSpendInput={this.handleUserSpendInput}
        />
        <Calculations
          turnover={this.state.userTurnoverInputFromForm}
          energySpend={this.state.userSpendInputFromForm}
        />

      </div>
    )
  }


}

export default ContainerBox
