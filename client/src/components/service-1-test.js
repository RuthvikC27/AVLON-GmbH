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
                setMessage(JSON.stringify(err.response.data.message));
            })
    })

    return <div>
        { message }
    </div>
}

export default Service1;