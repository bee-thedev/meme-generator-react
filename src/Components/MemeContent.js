import React from "react";
// import data from "../memeData"

export default function MemeContent(){
    
    const [meme, setMeme] = React.useState({
        topText: " ",
        bottomText: " ",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    console.log(meme)
    const[allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(response=> response.json())
        .then(data=> setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage(){
        let randomNumber = Math.floor(Math.random()*allMemeImages.length)   
        let url = allMemeImages[randomNumber].url; 
        setMeme((prevMeme)=>({
            ...prevMeme ,
            randomImage : url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme((prevMeme)=>({
            ...prevMeme,
            [name] : value
        }))
}
 
    return(
        <div className="meme-content">
        <div className="form">

            <input 
                type="text" 
                id="topText" 
                name="topText" 
                value={meme.topText}
                className="fword" 
                placeholder="First word"
                onChange={handleChange}
                />

            <input 
                type="text" 
                id="bottomText" 
                name="bottomText"
                value={meme.bottomText} 
                className="lword" 
                placeholder="Last word"
                onChange= {handleChange}
                />

            <button className="submit" onClick={getMemeImage}>Get a New Meme Image</button>
      </div>
            <div className="meme">
            <img src={meme.randomImage} alt="a meme worth thousand laughs" className="meme-image" />
            <h2 className="meme-text top">{meme.topText}</h2>
            <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </div>
    )
}