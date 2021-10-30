import { Component } from "react";
import MainPage from "../_pages/MainPage";
import TransationPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";

class App extends Component {
state = {
  activePage: "", 
  costs:[],
  incomes:[],
 };

 handleOpenPage = (activePage) => {
   this.setState({activePage});
 };

 handeleClosePage = ()=> this.setState({activePage: ""}) ;

 addTransaction =({transType, transaction})=>{
   this.setState(prevState =>({[transType]:[...prevState[transType], transaction]
  }));
 };
 
  render () {
    const {activePage} = this.state;
    switch(activePage) {
  case "costs":
  return (
  <TransationPage  
  transType={activePage} 
  handeleClosePage= {this.handeleClosePage} 
  addTransaction={this.addTransaction}
  />
  );
  case "incomes":
  return (
  <TransationPage
   transType={activePage} 
   handeleClosePage={this.handeleClosePage}
   addTransaction={this.addTransaction}
   />
  );
  case "balance":
  return 
  <BalancePage />;
  default:
    return (
    <MainPage 
    handleOpenPage ={this.handleOpenPage}
    />
    );
    }
  }
};

export default App;
