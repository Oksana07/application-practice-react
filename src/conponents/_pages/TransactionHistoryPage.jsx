import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";
import LabelInput from "../_share/LabelInput/LabelInput";

const TransactionHistoryPage = ({transactions = [], handeleClosePage})=>{
    const total = transactions.reduce((acc, { sum }) => acc + Number(sum), 0);

    return (
    <section>
        <GoBackHeader title={'GoBack'} cbGoBack={handeleClosePage}/>
        <button name="prev">Prev</button>
        <LabelInput type="date" title="листопад 2021"/>
        <button name="next">Next</button>
        <table>
        <thead>
          <tr>
            <th>Всего:</th>
            <th>total</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(({category, sum, id }) => (
            <tr key={id}>
              <td>{category}</td>
              <td>{sum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default TransactionHistoryPage;