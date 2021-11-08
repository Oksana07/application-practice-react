import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";

const TransactionHistoryPage = ()=>{
    return (
    <section>
        <GoBackHeader/>
        <button name="prev">Prev</button>
        <LabelInput type="date" title="листопад 2021"/>
        <button name="next">Next</button>
    </section>
    );
}

export default TransactionHistoryPage;