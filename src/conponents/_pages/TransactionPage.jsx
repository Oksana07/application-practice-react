import { useState } from 'react';
import GoBackHeader from '../_share/GoBackHeader/GoBackHeader';
import LabelInput from '../_share/LabelInput/LabelInput';
import shortid from 'shortid';



const TransationPage = ({transType, addTransaction, handeleClosePage}) => {
    // state={
    const [form, setForm] = useState({
        date:"",
         time:"",
         category:"Еда",
         sum:"",
        currency:"USD",
        comment:"",
    })

    const handleChange = (e)=> {
        const {name, value}=e.target;
        setForm(prevForm => ({...prevForm, [name]: value}))
    };

    const handeleSubmit=e=>{
        e.preventDefault()
            addTransaction({
            transType, 
            transaction: {...form, id: shortid.generate()},
        });
        handeleClosePage();
    };

        const {date,time,category,sum,currency,comment}=form;
        return (
            <GoBackHeader 
            title={transType === "costs" ? "Расход" : "Доходы"}
            cbGoBack={handeleClosePage}
            /> 
            
        )
    };
    

export default TransationPage;