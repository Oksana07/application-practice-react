import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from '../StatisticsBtns/StatisticsBtns';
import {mainInfoCosts,
        mainInfoIncomes,
        mainInfoBalance
        } from '../../assets/data/mainInfoOptions.json';
import { useAppContext } from "../AppProvider/AppProvider";
import { useRouteMatch } from "react-router-dom";


const MainPage = ({history}) =>{
    // const {handleOpenPage} = useAppContext();
    const openTransactionPage = (transType) =>
    history.push("/transaction/" + transType);
    const openTransactionHistoryPage = (transType) =>
    history.push("/history/" + transType);
    const openBalancePage = () => 
    history.push("/balance");

    return (
<section>
    <h1>Журнал росходов</h1>
    <MainInfo 
    title={"Расходи"} 
    options={mainInfoCosts} 
    activePage='costs'
    handleOpenPage={openTransactionPage}
    />
    <MainInfo 
    title={"Доходи"} 
    options={mainInfoIncomes} 
    activePage='incomes'
    handleOpenPage={openTransactionPage}
    />
    <MainInfo 
    title={"Баланс"} 
    options={mainInfoBalance} 
    activePage='balance'
    handleOpenPage={openBalancePage}
    />
    <StatisticsBtns handleOpenPage={openTransactionHistoryPage}/>
</section>

    );
    
};

export default MainPage;