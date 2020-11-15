import React, {
    useEffect,
    useState
} from 'react';
import axios from 'axios';

function Service2(){
    const [ message, setMessage ] = useState('');

    useEffect(() => {
        axios.get("/api/service2")
            .then(res => {
                setMessage(res.data.message);
            })
            .catch(err => {
                setMessage(JSON.stringify(err.response.data));
            })
    })

    return <div>
        { message }
    </div>

}

export default Service2