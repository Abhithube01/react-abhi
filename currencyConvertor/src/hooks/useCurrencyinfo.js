import { useEffect,useState } from "react";

function useCurrencyinfo (currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/3a09218d0108109da07da5ff/latest/${currency}`)
        .then((res)=> res.json())
        .then((res)=>setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data); 
    return data
    

}

export default useCurrencyinfo;