import React from "react";
import Co2GraphComponent from './Co2GraphComponent';

class Calculations extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      electricitySpend: null,
      gasSpend: null
    };
    this.getElectricityKWhYear = this.getElectricityKWhYear.bind(this);
    this.getGasKWhYear = this.getGasKWhYear.bind(this);
    this.getElectricityKgCO2eYear = this.getElectricityKgCO2eYear.bind(this);
    this.getGasKgCO2eYear = this.getGasKgCO2eYear.bind(this);
    this.getElectricityTCO2eYear = this.getElectricityTCO2eYear.bind(this);
    this.getGasTCO2eYear = this.getGasTCO2eYear.bind(this);
    this.getTotalTCO2eYear = this.getTotalTCO2eYear.bind(this);
    this.getTotalTCO2eOverPerThousandTurnover = this.getTotalTCO2eOverPerThousandTurnover.bind(this);
  }

  getElectricitySpend(energySpend) {
    const electricitySpend = energySpend * 0.3;
    return electricitySpend;
  }

  getGasSpend(energySpend) {
    const gasSpend = energySpend * 0.7;
    return gasSpend;
  }

  getElectricityKWhYear() {
    const electricityKWhYear = this.state.electricitySpend / 0.148;
    return electricityKWhYear;
  }

  getGasKWhYear() {
    const gasKWhYear = this.state.gasSpend / 0.0362;
    return gasKWhYear;
  }

  getElectricityKgCO2eYear() {
    const electricityKgCO2eYear = this.getElectricityKWhYear() * 0.35;
    return electricityKgCO2eYear;
  }

  getGasKgCO2eYear() {
    const gasKgCO2eYear = this.getGasKWhYear() * 0.185;
    return gasKgCO2eYear;
  }

  getElectricityTCO2eYear() {
    const electricityTCO2eYear = this.getElectricityKgCO2eYear() / 1000;
    return electricityTCO2eYear;
  }

  getGasTCO2eYear() {
    const gasTCO2eYear = this.getGasKgCO2eYear() / 1000;
    return gasTCO2eYear;
  }

  getTotalTCO2eYear() {
    const totalTCO2eYear = this.getElectricityTCO2eYear() + this.getGasTCO2eYear();
    return totalTCO2eYear;
  }

  getTotalTCO2eOverPerThousandTurnover() {
    const turnoverThousands = this.props.turnover / 1000;
    const totalTCO2eOverTurnover = this.getTotalTCO2eYear() / turnoverThousands;
    return totalTCO2eOverTurnover
  }

  componentWillReceiveProps(newProps){
    const newState = {
      electricitySpend: this.getElectricitySpend(newProps.energySpend),
      gasSpend: this.getGasSpend(newProps.energySpend)
    };
    this.setState(newState);
  }

  render() {
    return(
      <div>
        <p>energy Spend: {this.props.energySpend}</p>
        <p>turnover: {this.props.turnover}</p>
        <p>electricity Spend: {this.state.electricitySpend}</p>
        <p>gas Spend: {this.state.gasSpend}</p>
        <p>electricity KWh per Year: {this.getElectricityKWhYear()}</p>
        <p>gas KWh per Year: {this.getGasKWhYear()}</p>
        <p>electricity KgCO2e per Year: {this.getElectricityKgCO2eYear()}</p>
        <p>gas KgCO2e per Year: {this.getGasKgCO2eYear()}</p>
        <p>electricity TCO2e per Year: {this.getElectricityTCO2eYear()}</p>
        <p>gas TCO2e per Year: {this.getGasTCO2eYear()}</p>
        <p>total TCO2e per Year: {this.getTotalTCO2eYear()}</p>
        <p>total TCO2e per Year Over £'000 Turnover: {this.getTotalTCO2eOverPerThousandTurnover()}</p>
        <Co2GraphComponent totalCo2OverTurnover={this.getTotalTCO2eOverPerThousandTurnover()}/>
      </div>
    )
  }
}




export default Calculations;
