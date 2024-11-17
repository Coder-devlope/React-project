import './Player.css'
import video from '../assets/video.mp4'
import { useRef } from 'react'
export default function Player({play,playing}){

const player=useRef(null)
const closePlayer=(m)=>{
    if(m.target===player.current){
        playing(false)
    }
}
    return(
        <div className={`video-player ${play?'':'hideMobileMenu'}`} ref={player} 
        onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
        </div>
    )
}