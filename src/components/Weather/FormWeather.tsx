import { useFormLogic } from 'hooks/useFormLogic';
import { IFormLogic } from 'types/interfaices';

function FormWeather() {
    const { changeCity, setInputCity, country, location }: IFormLogic = useFormLogic();

    return (
        <form className='weather-form' onSubmit={(e) => changeCity(e)}>
            <div>Enter the desired city:</div>
            <input className='text-field__input' type='name' id='name' name='city' onChange={(e) => setInputCity(e.target.value)} />
            <label className='text-field__label' htmlFor='name'>
                {location}, {country}
            </label>
            <button type='button' className='button-33'>
                Найти
            </button>
        </form>
    );
}

export default FormWeather;
