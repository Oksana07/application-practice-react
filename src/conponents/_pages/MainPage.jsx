import MainInfo from "../MainInfo/MainInfo";
import StatisticsBtns from '../StatisticsBtns/StatisticsBtns';
import {mainInfoCosts,
        mainInfoIncomes,
        mainInfoBalance
        } from '../../assets/data/mainInfoOptions.json';


const MainPage = ({handleOpenPage}) =>{
    return (
<section>
    <h1>Журнал росходов</h1>
    <MainInfo 
    title={"Расходи"} 
    options={mainInfoCosts} 
    activePage='costs'
    handleOpenPage={handleOpenPage}
    />
    <MainInfo 
    title={"Доходи"} 
    options={mainInfoIncomes} 
    activePage='incomes'
    handleOpenPage={handleOpenPage}
    />
    <MainInfo 
    title={"Баланс"} 
    options={mainInfoBalance} 
    activePage='balance'
    handleOpenPage={handleOpenPage}
    />
    <StatisticsBtns />
</section>

    );
    
};

export default MainPage;