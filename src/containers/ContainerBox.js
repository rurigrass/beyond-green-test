import React from "react";
import Calculations from '../components/Calculations';
import FormView from '../components/FormView';
import GraphComponent from '../components/GraphComponent.js';

class ContainerBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userSpendInputFromForm: null,
      userTurnoverInputFromForm: null,
    }
  }

  handleUserTurnoverInput(event){
    const userTurnoverInput = event.target.user_turnover_input.value;
    console.log(userTurnoverInput);
  }

  handleUserSpendInput(event){
  const userEnergyInput = event.target.user_energy_input.value;
  console.log(userEnergyInput);
  // this.setState({userSpendInputFromForm: userEnergyInput});
}


  render(){
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
