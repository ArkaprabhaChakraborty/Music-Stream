import React from 'react';
import {ReactComponent as PlayIcon} from '../svgs/play.svg' 

const Categories=()=>{
    return (
        <div className="mainContext">
        <div className="cardWrap">
        <h1>Uniquely yours</h1>
            <div className="card">
                <div className="cardImage">
                <img src="https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg" alt=""/>
                </div>
                <div className="cardContent">
                    <h3>Some text</h3>
                    <h4>Decription</h4>
                <span className="playIcon">
                    <PlayIcon/>
                </span>
                </div>
            </div>
    </div>
     <div className="cardWrap">
        <h1>Focus</h1>
        <h2>Genre Description</h2>
        <div className="cardWrapsInner">
            <div className="card">
                <div className="cardImage">
                <img src="https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg" alt=""/>
                </div>
                <div className="cardContent">
                    <h3>Some text</h3>
                    <h4>Decription</h4>
                
                <span className="playIcon">
                    <PlayIcon/>
                </span>
                </div>
                </div>
                <div className="card">
                <div className="cardImage">
                <img src="https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg" alt=""/>
                </div>
                <div className="cardContent">
                    <h3>Some text</h3>
                    <h4>Decription</h4>
                
                <span className="playIcon">
                    <PlayIcon/>
                </span>
                </div>
                </div>
                <div className="card">
                <div className="cardImage">
                <img src="https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg" alt=""/>
                </div>
                <div className="cardContent">
                    <h3>Some text</h3>
                    <h4>Decription</h4>
                
                <span className="playIcon">
                    <PlayIcon/>
                </span>
                </div>
                </div>
            </div>
    </div>
     <div className="cardWrap">
        <h1>Uniquely yours</h1>
            <div className="card">
                <div className="cardImage">
                <img src="https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg" alt=""/>
                </div>
                <div className="cardContent">
                    <h3>Some text</h3>
                    <h4>Music for you that lasts forever</h4>
                <span className="playIcon">
                    <PlayIcon/>
                </span>
                </div>
            </div>
    </div> 
    </div>
    )
}
export default Categories