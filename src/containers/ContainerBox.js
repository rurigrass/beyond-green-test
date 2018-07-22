import React from "react";
import Calculations from '../components/Calculations';
import FormView from '../components/FormView';
import GraphComponent from '../components/GraphComponent.js';

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
  const userEnergyInput = event.target.user_energy_input.value;
  this.setState({userSpendInputFromForm: userEnergyInput});
}


  render(){
    console.log(this.state.userTurnoverInputFromForm);
    console.log(this.state.userSpendInputFromForm);
    return(
      <div className='container-box-contents'>
        <FormView
          handleUserTurnoverInput={this.handleUserTurnoverInput}
          handleUserSpendInput={this.handleUserSpendInput}
        />

      </div>
    )
  }


}

export default ContainerBox
