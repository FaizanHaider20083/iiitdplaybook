
import React,{useState,useEffect} from 'react';
import './Cards.css';


function Rules() {


    

  
    const [slide,setSlide] = useState(1) /* sets slide */

    let[caption1,setCaption1] = useState('Top 10 tips for idk what') /*Sets caption for first image box*/

    const[caption2,setCaption2] = useState('Padh le kuch website me kuch nahin rakha')/*sets caption for second image box*/

    const[caption3,setCaption3] = useState('Bro,endsem kaise gaye')/*sets caption for third image box*/


    const[image1,setImage1] = useState('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image1.jpg')/* sets image for first image box*/

    const[image2,setImage2] = useState('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image2.jpeg')/* sets image for second image box*/
    const[image3,setImage3] = useState('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image3.png')/* sets image for third image box*/
    const[href1,setHref1] = useState('#');/*href for box 1 and i am pretty sure you get what I mean now*/
    const[href2,setHref2] = useState('#');
    const[href3,setHref3] = useState('#');

    const[dot,setDot] = useState('1');

    
    
    const [dot1,setDot1] = useState('dotselected');/*Sets dot 1 as active*/
    const [dot2,setDot2] = useState('dot');/*sets dot 2 as inactive*/
    const [dot3,setDot3] = useState('dot');/*sets dot 3 as inactive*/

    


    const setAttribute = (props) => {
        /**when props are passed it gives props are undefined error and i couldnt find a way aroudn it */
        
        setImage1 ( props.iimage1);
        setImage2 (props.iimage2);
        setImage3 (props.iimage3);
       
        setCaption1(props.ccaption1);
        setCaption2(props.ccaption2);
        setCaption3(props.ccaption3);
        setHref3(props.hhref3);
        setHref2(props.hhref2);
        setHref1(props.hhref1);


        

            

    }

    useEffect(() => {
        console.log(slide)
    },[slide]);

    

    const updateSlide = (props) =>{

        /* uses the above function only but I hard coded it. Sorry :(( */
        if (slide === 1){
                    setImage3 ( 'https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image3.png');
                    setImage2 ('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image1.jpg');
                    setImage1 ('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image2.jpeg');
                    setCaption1('Top 10 tips for idk what');
                    setCaption2('Padh le kuch, website me kuch nahin rakha');
                    setCaption3('Bro, endsem kaise gaye?');
                    setHref3('#');
                    setHref2('#');
                    setHref1('#');
                    setDot1('dotselected');
                    setDot2('dot');
                    setDot3('dot');


        }
        if (slide === 2){

                    setImage2 ( 'https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image3.png');
                    setImage3 ('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image1.jpg');
                    setImage1 ('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image2.jpeg');
                    setCaption1('Another random text');
                    setCaption2('Shitposting');
                    setCaption3('I didnt know i had so less creativity');
                    setHref3('#');
                    setHref2('#');
                    setHref1('#');
                    setDot1('dot');
                    setDot2('dotselected');
                    setDot3('dot');

        }
        if (slide === 3){



                    setImage1 ( 'https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image3.png');
                    setImage2 ('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image1.jpg');
                    setImage3 ('https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image2.jpeg');
                    setCaption1('I am out of placeholders');
                    setCaption2('Shitposting');
                    setCaption3('work i beg you');
                    setHref3('#');
                    setHref2('#');
                    setHref1('#');
                    setDot1('dot');
                    setDot2('dot');
                    setDot3('dotselected');
                    
                    




        }
    }
    

    return(
        <div className = "rules">
        <br />
        <br />
        <br />
        <br />
            <h1 className="heading"> Rules and Regulations</h1>
            <br ></br>
             
             <p className="subHeading"> Subheading</p>
             <br />
             <a className="prev-button" onClick={() => {
                

                 setSlide(slide-1);
                 setDot(slide-1);
                 if (slide === 1){
                     setSlide(3);
                     setDot(3);
                 }
                 updateSlide(slide);
                 


                }} href="#" >‹</a>
             <div className = "row">
                
                 <div className = "column">
                    <div className="container">
                        <a href = {href1}>
                        
                            <img src={image1} className = 'image' id='image1' alt="Should have been here"  />
                        </a>
                        <div className = "Caption"> {caption1}</div>


                    
                    </div>
                     
                 </div>
                 <div className = "column">
                 <div className="container">
                        <a href = {href2}>
                        
                            <img src={image2} className = 'image' id='image2' alt="Should have been here"  />
                        </a>
                        <div className = "Caption"> {caption2}</div>


                    
                    </div>
                    
                 </div>
                 <div className = "column" >
                 <div className="container">
                        <a href = {href3}>
                        
                            <img src={image3} className = 'image' id='image3' alt="Should have been here"  />
                        </a>
                        <div className = "Caption"> {caption3}</div>
                        

                    
                    </div>

                   
                
                    
                 </div>
                 
            </div>
            <a className="next-button" onClick={() => {

                

                setSlide(slide+1);
                setDot(slide+1);
                if (slide === 3){
                    setSlide(1)
                    setDot(1)
                }

                updateSlide(slide);
                
            }} href='#'>{`›`}</a>

            
            
            
            <div className="DotHolder">
            
                <span className={dot1} onClick={() => {
                
                    /*setAttribute(ccaption1 = "Top 10 tips for internships", ccaption2 = "Top 10 tips for jobs",ccaption3 ='Top 10 tips for idk what',hhref1 ='#',hhref2 ='#',hhref3 ='#',iimage3 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/f031d014/src/Assets/Internships/image3.png',iimage2 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image2.jpeg',iimage1 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/4ab3ac7d/image1.jpg');*/
                    setSlide(1);
                    updateSlide(slide);
                    
                    


        

                }}></span> 
                
            <span className={dot2} onClick={(iimage1,iimage2,iimage3,ccaption2,ccaption3,ccaption1,hhref1,hhref2,hhref3) => {

                    /*setAttribute(ccaption1 = "Worst tips for internships", ccaption2 = "Yeh ek aur caption",ccaption3 ='Placeholder',hhref1 ='#',hhref2 ='#',hhref3 ='#',iimage3 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image3.png',iimage2 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image2.jpeg',iimage1 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/4ab3ac7d/image1.jpg');*/
                    setSlide(2);
                    updateSlide(slide);
                    
                    
                    
                
            }}></span> 
            <span className={dot3} onClick={(ccaption1,ccaption2,ccaption3,iimage1,iimage2,iimage3,hhref1,hhref2,hhref3) => {
               /* setAttribute(ccaption1 = "React is wayy tougher than I imagined", ccaption2 = "Lot more tough",ccaption3 ='I am out of placeholders',hhref1 ='#',hhref2 ='#',hhref3 ='#',iimage3 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image3.png',iimage2 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/45b2d1e7/image2.jpeg',iimage1 ='https://cdn.statically.io/gh/FaizanHaider20083/iiitdplaybook/4ab3ac7d/image1.jpg');*/
                setSlide(3);
                updateSlide(slide);
                    
                    
            }}></span> 
            </div>
           </div> 


             

        
    
    )

    
    
    
}

export default Rules;
