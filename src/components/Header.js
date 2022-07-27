import React from 'react'
import memeIcon from '../assets/troll-face.svg'

function Header() {
    return (
        <header>
            <img src={memeIcon} alt="meme face" />
            <p className='icon-text'>Meme Generator</p>
            <p>React Course - Project 3</p>
        </header>
    )
}

export default Header