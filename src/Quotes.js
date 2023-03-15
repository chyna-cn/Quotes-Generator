import React, {useState, useEffect} from "react";
import axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState({
        text: '',
        author: ''
    })

    const onButtonClick = async () => {
        const response = await axios.get(`https://type.fit/api/quotes`);
        setQuotes(response.data[Math.floor(Math.random()* response.data.length)])
    }

useEffect(()=>{
      onButtonClick();
    }, [],
);


    return (
        <div className='box'>
            <div className='submit'><input type='submit' value='New Quote' className='submit' onClick={onButtonClick}/></div>
            <p className='words'> {quotes.text}</p>
            <p className='author'>-{quotes.author} </p>
        </div>
    )
}

export default Quotes