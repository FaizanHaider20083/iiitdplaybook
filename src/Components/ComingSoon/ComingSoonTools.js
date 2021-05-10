/*Make a card of and exportt it*/ 
import firebase from 'firebase';
import React,{useState,useEffect} from 'react';
import './Rules.css';
import DisplayCard from './ComingSoonSupplies';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function ComingSoonTools(){
    const [data,setData] = useState([]);
    let temp1 = [];
    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
      };
    
    
    
    
    const getData = async() => {
        let cardsData = firebase.database().ref('Tips');
        await cardsData.once('value',(snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let dict = {};
                
                dict.image = childSnapshot.val().image;
                dict.caption = childSnapshot.val().caption;
                dict.tips = childSnapshot.val().tips;
                
                temp1.push(dict);
                console.log("here");
            });
        });


        setData(temp1);

    };


    useEffect(() => {
        getData();
        
    }, []);


    return(
        
        <div id="Slider">
        <br />
        <h1 className="heading">Rules and regulations </h1>
        <br />
        <p className="subHeading">Subheading</p>
        
        
        
        
       

        <Slider {...settings}>
        
        
       
        <ExportCard cardList ={data}></ExportCard>
        </Slider>
        

        
        
        
        
        
       

        
        
       
        </div>
       
        
    );
}

function ExportCard({cardList}){
    

    return cardList.map((card, id) => {
        
        return (<div>

        <DisplayCard Ccard ={card}/>
        
        </div>)
        
      });
}

export default ComingSoonTools;

