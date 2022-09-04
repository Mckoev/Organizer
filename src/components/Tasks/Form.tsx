import React from 'react';

type Props = {
    userInput: string;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (event: React.FormEvent<HTMLInputElement>) => void;
};

function Form({ handleSubmit, userInput, handleChange }: Props) {
    console.log(handleSubmit);
    console.log(userInput);
    console.log(handleChange);
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input value={userInput} type='text' onChange={handleChange} />
            <button>
                <img
                    className='icon'
                    src={require('../../img/plus.png')}
                    alt='plus'
                />
            </button>
        </form>
    );
}

export default Form;
