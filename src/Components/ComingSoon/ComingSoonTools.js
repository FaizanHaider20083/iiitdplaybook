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
    const [index,setIndex] = useState(0);
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
        
        
        
        
        

       <div className='row'>


        
        
       
        <ExportCard cardList ={data} ></ExportCard>
        </div>
       
        
        
        
        
        
       

        
        
       
        </div>
       
        
    );
}

function ExportCard({cardList}){

    
    const [index,setIndex] = useState(0);
    const [next,setNext] = useState(50);
    const increment =() => {
        console.log("here");
        var newIndex = index+1;
        if (index === cardList.length -1){
            newIndex = 0;
        }

        setIndex(newIndex);
    }
    const decrement =() => {
        var newIndex = index -1;
        if (newIndex === -1){
            newIndex = cardList.length -1;

        } 
        setIndex(newIndex);
    }

    useEffect(() => {



        if (index === cardList.length -1){
            setNext(0);
        }
        else setNext(index+1);

    })

    

    return cardList.map((card, id) => {
        
        return (
        
        <div>
       
        {(id === index || id === next) && 
        
        
        <DisplayCard Ccard ={card} /> }

        {id=== 0 &&
        <div>
        <button className='prev' onClick={decrement} >prev</button>
        <button className ='next' onClick={increment}>next</button>
        </div>}


        
        
        </div>)
        
        
      });
}

export default ComingSoonTools;




