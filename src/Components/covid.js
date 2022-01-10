import React, {useEffect, useState} from 'react';
import './covid.css';

const Covid = () =>{
    const [curdata, setStatus] = useState([]);
    
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

            <div class="cards-list">
                <div class="card 1">
                    <div class="card_image"> 
                        <img src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" /> 
                    </div>
                    <div class="card_title title-white">
                        <p>OUR COUNTRY</p>
                        <p>India</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> 
                        <img src="https://post.greatist.com/wp-content/uploads/sites/3/2020/04/iStock-1214743843-1200x628.jpg" /> 
                    </div>
                    <div class="card_title title-white">
                        <p>TOTAL RECOVERED</p>
                        <p>{curdata.recovered}</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> 
                        <img src="https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/10/2020/10/coronavirus-red-stripe.jpg" /> 
                    </div>
                    <div class="card_title title-white">
                        <p>TOTAL CONFIRMED</p>
                        <p>{curdata.confirmed}</p>
                    </div>
                </div>

                <div class="card 1">
                    
                </div>

                <div></div>
                <div class="card 1">
                    <div class="card_image"> 
                        <img src="https://th.bing.com/th/id/OIP.4YbJapqF_OJK0gbvAnpYUgHaEK?pid=ImgDet&rs=1" /> 
                    </div>
                    <div class="card_title title-white">
                        <p>TOTAL DEATHS</p>
                        <p>{curdata.deaths}</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> 
                        <img src="https://covid19.colorado.gov/sites/covid19/files/styles/carousel_images/public/Protect%20%26%20prepare%20(4)-twitter.png" /> 
                    </div>
                    <div class="card_title title-white">
                        <p>TOTAL ACTIVE</p>
                        <p>{curdata.active}</p>
                    </div>
                </div>

                <div class="card 1">
                    <div class="card_image"> 
                        <img src="https://giffiles.alphacoders.com/142/14259.gif" /> 
                    </div>
                    <div class="card_title title-white">
                        <p>LAST UPDATED</p>
                        <p>{curdata.lastupdatedtime}</p>
                    </div>
                </div>
            </div>


           

             
        </section>
        </>
    )
} ;

 



export default Covid;

