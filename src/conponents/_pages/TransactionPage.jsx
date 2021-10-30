import { Component } from 'react';
import GoBackHeader from '../_share/GoBackHeader/GoBackHeader';
import LabelInput from '../_share/LabelInput/LabelInput';
import shortid from 'shortid';



class TransationPage extends Component {
    state={
        date:"",
        time:"",
        category:"Еда",
        sum:"",
        currency:"USD",
        comment:"",
    };

    handleChange = (e)=>{
        const {name, value}=e.target;
        this.setState({ [name]: value});
    };

    handeleSubmit=e=>{
        e.preventDefault()
        const{transType, addTransaction, handeleClosePage}=this.props;
            addTransaction({
            transType, 
            transaction: {...this.state, id: shortid.generate()},
        });
        handeleClosePage();
    };

    render (){
        const {date,time,category,sum,currency,comment}=this.state;
        const {handeleClosePage, transType}=this.props;
        return (
            <section>
            <GoBackHeader 
            title={transType === "costs" ? "Расход" : "Доходы"}
            cbGoBack={handeleClosePage}
            /> 
            <form onSubmit={this.handeleSubmit}>
            <button type='submit'>Ok</button>
               <LabelInput
               type='date'
               title= 'День'
               name='date'
               value={date}
               cbOnChange={this.handleChange}
               />
               <LabelInput
               type="time"
               title= "Время"
               name="date"
               value = {time}
               cbOnChange={this.handleChange}
               />
               <LabelInput
               type="button"
               title= "Категорія"
               name="categoty"
               value={category}
            //    cbOnChange={()=>{}}
               />
               <LabelInput
               title= "Сума"
               name="sum"
               value={sum}
               placeholder= "Введіть суму"
               cbOnChange={this.handleChange}
               />
               <LabelInput
               type="button"
               title= "Валюта"
               name="currency"
               value={currency}
            //    cbOnChange={()=>{}}
               />
               <LabelInput
               name="comment"
               value={comment}
                placeholder= "Коментар"
               cbOnChange={this.handleChange}
               />
                </form>   
            </section>
        );
    }
    
};

export default TransationPage;