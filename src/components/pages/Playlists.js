import React from 'react';
import { useParams } from 'react-router';
import {ReactComponent as PlayIcon} from '../pages/svgs/play.svg'; 


const Play = () =>{
    let {id} = useParams();
    return(
        <div className="playlistPage">
            <div className="playlistPageInfo">
                
                    <div className="playlistPageImage">
                    <img src="https://d.newsweek.com/en/full/772816/1-5-jupiter-nasa.jpg" alt=""/>
                    </div>
                    <div className="playlistPageContent">
                    <h1>Title {id}</h1>
                    <h5>Spotify</h5>
                    <p>Playlist description</p>
                    </div>
            </div>
            <div className="icons">
                <div className="playbutton">
                    <PlayIcon/>
                </div>
                <div className="iconsHeart"></div>
                <div className="iconsDots"></div>
            </div>
            <div className="playlistPageSongs">
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                    <li>Song 4</li>
                    <li>Song 5</li>
                </ul>
            </div>
        </div>
    )  
}
export default Play