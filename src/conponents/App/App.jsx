import { useState } from "react";
import MainPage from "../_pages/MainPage";
import TransationPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";

const App = () => {
// state = {
const [activePage, setActivePage]= useState("");
const [costs, setCosts]= useState([]);
const [incomes, setIncomes]= useState([]);

const handleOpenPage = (activePage) => setActivePage(activePage);

const handeleClosePage = ()=> setActivePage("");

const addTransaction =({transType, transaction})=>{
  transType === "costs" && 
  setCosts (prevCosts => [...prevCosts, transaction]);
  transType === "costs" && 
  setIncomes (prevIncomes => [...prevIncomes, transaction]);
 };
 

switch(activePage) {
  case "costs":
  return (
  <TransationPage  
  transType={activePage} 
  handeleClosePage= {handeleClosePage} 
  addTransaction={addTransaction}
  />
  );
  case "incomes":
  return (
  <TransationPage
   transType={activePage} 
   handeleClosePage={handeleClosePage}
   addTransaction={addTransaction}
   />
  );
  case "balance":
  return <BalancePage />;
  default:
    return <MainPage 
    handleOpenPage ={handleOpenPage}
    />
    }
};

export default App;
