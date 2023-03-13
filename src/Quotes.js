import React, {useState, useEffect} from "react";
import axios from 'axios';

const Quotes = () => {
    const [quotes, setQuotes] = useState({
        text: '',
        author: ''
    })
useEffect(()=>{
    onclick = async () => {
        const response = await axios.get(`https://type.fit/api/quotes`);
        setQuotes(response.data[Math.floor(Math.random())*response.data.length])
    }
}, [])

    return (
        <div className='box'>
            <div className='submit'><input type='submit' value='New Quote' className='submit' onClick={onclick}/></div>
            <p className='words'> {quotes.text}</p>
            <p className='author'>-{quotes.author} </p>
        </div>
    )
}

export default Quotes