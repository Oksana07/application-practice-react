import MainInfo from "../MainInfo/MainInfo";
import {mainInfoCosts,
        mainInfoIncomes,
        mainInfoBalance} from '../../assets/data/mainInfoOptions.json';
import StatisticsBtns from '../StatisticsBtns/StatisticsBtns';

const MainPage = () =>{
    return (
<section>
    <h1>Журнал росходов</h1>
    <MainInfo title={"Расходи"} options={mainInfoCosts}/>
    <MainInfo title={"Доходи"} options={mainInfoIncomes}/>
    <MainInfo title={"Баланс"} options={mainInfoBalance}/>
    <StatisticsBtns />
</section>

    );
    
};

export default MainPage;