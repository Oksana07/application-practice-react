import { useContext, useEffect, useState } from "react";
import MainPage from "../_pages/MainPage";
import TransationPage from "../_pages/TransactionPage";
import BalancePage from "../_pages/BalancePage";
import TransactionHistoryPage from '../_pages/TransactionHistoryPage';
import {useAppContext} from '../../conponents/AppProvider/AppProvider';

const App = () => {

const {activePage, costs, incomes} = useAppContext();

switch(activePage) {
  case "costs":
  return <TransationPage transType={activePage} />;
  case "incomes":
  return <TransationPage transType={activePage} />;
   case "costsHistory":
    return <TransactionHistoryPage  transactions= {costs}/>;
    case "incomesHistory":
    return <TransactionHistoryPage transactions= {incomes} />;
    case "balance":
  return <BalancePage />;
  default:
    return <MainPage />;
    }
};

export default App;
