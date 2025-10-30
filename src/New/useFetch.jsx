import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useFetch = (Url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const fetching = async ()=>{
            const res = await axios.get(Url);
            setData(res.data);
            console.log(res.data);
            setLoading(false);
        }
        fetching();
    },[Url])
  
    
  return {data,loading}
}

export default useFetch