import GoBackHeader from '../_share/LabelInput/LabelInput';
import LabelInput from '../_share/LabelInput/LabelInput';

const TransationPage = () => {
    return (
        <section>
        <GoBackHeader title='Расход'/> 
        <form>
        <button type='submit'>Ok</button>
           <LabelInput
           type='date'
           title= 'День'
           name='date'
           value=''
           cbOnChange={()=>{}}
           />
           <LabelInput
           type="time"
           title= "Время"
           name="date"
           value=""
           cbOnChange={()=>{}}
           />
           <LabelInput
           type="button"
           title= "Категорія"
           name="categoty"
           value="Їжа"
           cbOnChange={()=>{}}
           />
           <LabelInput
           title= "Сума"
           name="sum"
           value=""
           placeholder= "Введіть суму"
           cbOnChange={()=>{}}
           />
           <LabelInput
           type="button"
           title= "Валюта"
           name="currency"
           value="USD"
           cbOnChange={()=>{}}
           />
           <LabelInput
           name="comment"
           value=""
            placeholder= "Коментар"
           cbOnChange={()=>{}}
           />
            </form>   
        </section>
    );
    
};

export default TransationPage;