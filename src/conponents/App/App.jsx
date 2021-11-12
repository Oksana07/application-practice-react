import { useEffect, useState } from "react";
import MainPage from "../_pages/MainPage";
import TransationPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionHistoryPage from '../_pages/TransactionHistoryPage';

const App = () => {
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
 
 useEffect(()=>{
   const parsedCosts = JSON.parse(localStorage.getItem('costs'))
   const parsedIncomes = JSON.parse(localStorage.getItem('incomes'))
   parsedCosts && setCosts(parsedCosts);
   parsedIncomes && setIncomes(parsedIncomes);
 }, []);

useEffect(()=>{
  localStorage.setItem('costs', JSON.stringify(costs))
}, [costs]);

useEffect(()=>{
  localStorage.setItem('incomes', JSON.stringify(incomes))
}, [incomes]);

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
  
    case "costsHistory":
    return (
    <TransactionHistoryPage 
    handeleClosePage={handeleClosePage} 
    transactions= {costs}
    />
    );
    case "incomesHistory":
    return (
    <TransactionHistoryPage 
    handeleClosePage={handeleClosePage} 
    transactions= {incomes}
    />
    );
    case "balance":
  return <BalancePage />;
  default:
    return <MainPage handleOpenPage = {handleOpenPage}/>;
    }
};

export default App;
