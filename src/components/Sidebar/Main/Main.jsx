import React from 'react'
import "./Main.css"
import { assets } from '../../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Mohamed</span></p>
                    <p>How can I Help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Settle a Debate: How should you store bread?</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Write code for a specific task, including edge cases</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Give me ideas for what to do with what's in this image?</p>
                        <img src={assets.gallery_icon} alt="" />
                    </div>
                </div>

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Main