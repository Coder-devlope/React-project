import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Programms from './Components/Programms'
import Title from './Components/Title'
import About from './Components/About'
import Campus from './Components/Campus'
import Testmonial from './Components/Testmonial'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Player from './Components/player'
export default function App(){

    const [play,playing]=useState(false)


    return(<>
    <Navbar/>
    <Hero/>
    <div className="container">
    <Title subTitle="Our Programms" title="What We Offers"/>
    <Programms/>
    <About playing={playing}/>
    <Campus p="Gallery" h2="Campus Photos"/>
    <Testmonial p="TESTIMONIAL" h2="What Student Say"/>
    <Contact p="Contact Us" h2="Get In Touch"/>
    <Footer/>
    </div>
    <Player play={play} playing={playing}/>
    </>)
}