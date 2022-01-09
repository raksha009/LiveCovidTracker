import React, {useEffect, useState} from 'react';

const Covid = () =>{
    const [curStatus, setStatus] = useState([]);
    
    const getCovidData = async () => {
        try{
            const response = await fetch('https://data.covid19india.org/data.json');
            const actualData = await response.json();
            console.log(actualData);
            setStatus(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
        <section>
            <h1> LIVE</h1>
            <h2> COVID TRACKER </h2>
            <div>


            </div>
        </section>
        </>
    )
} ;

 



export default Covid;

