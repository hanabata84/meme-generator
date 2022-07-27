import React from 'react'

function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevMeme => ({ ...prevMeme, randomImage: allMemeImages[randomNumber].url }))
    }

    function handleOnChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme, [name]: value
        }))
    }

    return (

        <div className='meme-form'>
            <input
                type="text"
                placeholder='Top Text'
                name='topText'
                onChange={handleOnChange}
                value={meme.topText} />
            <input
                type="text"
                placeholder='Bottom Text'
                name='bottomText'
                onChange={handleOnChange}
                value={meme.bottomText} />
            <button onClick={getMemeImage}>Get a new meme image</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme