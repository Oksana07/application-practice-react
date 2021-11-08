import { useState } from 'react';
import GoBackHeader from '../_share/GoBackHeader/GoBackHeader';
import shortid from 'shortid';
import Form from '../_share/Form/Form';
import tratnsactionFormOption from '../../assets/data/options/tratnsactionFormOption.json';



const TransactionPage = ({transType, addTransaction, handeleClosePage}) => {
    const [form, setForm] = useState({
        date:"",
         time:"",
         category: transType === "incomes" ? "Зарплата" : "Еда",
         sum:"",
        currency:"USD",
        comment:"",
    })

    const handleChange = (e)=> {
        const {name, value}=e.target;
        setForm(prevForm => ({...prevForm, [name]: value}))
    };

    const handeleSubmit=e=>{
            addTransaction({
            transType, 
            transaction: {...form, id: shortid.generate()},
        });
        handeleClosePage();
    };

        const {date,time,category,sum,currency,comment}=form;
        return (
            <section> 
            <GoBackHeader 
            title={transType === "costs" ? "Расход" : "Доходы"}
            cbGoBack={handeleClosePage}
            />
             <Form
            cbOnSubmit={handeleSubmit} 
            handleChange={handleChange} 
            formOpts={tratnsactionFormOption} 
            formValues={form}
            btnTitle={"Ok"}
             />          
             </section>
        ); 
     } 
       
  

export default TransactionPage;