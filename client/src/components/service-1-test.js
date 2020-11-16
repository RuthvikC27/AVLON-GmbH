import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';

function Service1(){
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        axios.get("/api/service1")
            .then(res => {
                setMessage(res.data.message);
            })
            .catch(err => {
                setMessage(JSON.stringify("Validation error"));
            })
    })

    return <div>
        <h1>Service 1 message</h1>
        <p>{ message }</p>
    </div>
}

export default Service1;