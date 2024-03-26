import { useEffect,useState } from "react";

function useCurrencyinfo (currency){
    const [data,setData] = useState({})
    useEffect(() => {
        const FetchCurr = async () => {
            try {
                const response = await fetch(`https://v6.exchangerate-api.com/v6/3a09218d0108109da07da5ff/latest/${currency}`);
                const responseData = await response.json();
                setData(responseData);
            } catch (error) {
                console.log(error);
            }
        };

        FetchCurr();

    }, [currency])

    return data;

}

export default useCurrencyinfo;