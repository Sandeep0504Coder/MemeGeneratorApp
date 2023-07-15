import React, { useState } from "react";
import memeData from "../memeData";

export default function MainContent() {
  const [meme, setMeme] = useState({
    url: "https://i.imgflip.com/4/1ihzfe.jpg",
    topText: "",
    bottomText: "",
  });
  const [allMemeImage,setMemeImage]=React.useState(memeData)
  
  
  function getMemeImage() {
    
    const memesArray = allMemeImage.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    const newMeme={...meme}
    newMeme.url=url
    setMeme(newMeme);
  }
  /*const thingsArray=["Thing 1","Thing 2"]
    function addItem(){
        thingsArray.push(`Thing ${thingsArray.length+1}`)
        console.log(thingsArray)

    }*/
    console.log(meme)
    function handleChange(event){
        
    setMeme((prevMeme)=>{
        return {
            ...prevMeme,
            [event.target.name]:event.target.value
        }
    })
    
    }
    
    
  
  return (
    <div>
      <div className="form" >
        <input
          type="text"
          name="topText"
          value={meme.topText}
          placeholder="Top text"
          className="form-input"
          onChange={handleChange}
          
          
        />
        <input
          type="text"
          name="bottomText"
          placeholder="Bottom text"
          className="form-input"
          onChange={handleChange}
          value={meme.bottomText}
          
        />
        <button
          className="form-button"
          onClick={()=>{return getMemeImage()}}
        >
          Get a new meme image{" "}
        </button>
      </div>
      <div className="meme">
      <img className="meme-img" src={meme.url} alt="" max-width="100%" />
      <div className="topText">{meme.topText}</div>
      <div className="bottomText">{meme.bottomText}</div>
      </div>  
    </div>
  );
}
