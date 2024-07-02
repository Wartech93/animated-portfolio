import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";
import Socials from "../Socials/Socials";
import Instagram from "../Socials/Instagram";
import Github from "../Socials/Github";
import Youtube from "../Socials/Youtube";


const Parallax = ({ type }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yBg=useTransform(scrollYProgress, [0,1], ["0%", "50%"])
    const yPlanets=useTransform(scrollYProgress, [0,1], ["0%", "100%"])    
    const yText=useTransform(scrollYProgress, [0,1], ["0%", "200%"])

    return (
    <div className="parallax"
    ref= {ref}
    style={{
        background:type==="services" 
    ? "linear-gradient(180deg, #111132, #0c0c1d)" 
    : "linear-gradient(180deg, #111132, #505064",
    }}
    > 
    
        <motion.a href="https://www.github.com/Wartech93" className="socials">
            <Github/>
            </motion.a>
        <motion.a href="https://www.youtube.com/channel/UC2Nt2v5Tovo2CTOkaUnFG5g" className="socials">
            <Youtube/>
            </motion.a>
        <motion.h1  className="findme"style={{y: yText}}>{type==="services" ? "What can I do?" : "What's been done."}</motion.h1>        
        <motion.div className="mountains"style={{y: yBg}}></motion.div>
        <motion.div className="planets" style={{y: yPlanets}}></motion.div>
        <motion.div className="stars"></motion.div>
        <div className="container">
        <motion.div 
        className="sliding-bg" 
        animate= {{ x: ['0%', '-50%']}}
        transition={{ 
            duration: 40, 
            ease: 'linear', 
        repeat: Infinity}}></motion.div>
        <motion.div 
        className="sliding-bg" 
        animate= {{ x: ['50%', '0%']}}
        transition={{ 
            duration: 40, 
            ease: 'linear', 
        repeat: Infinity}}></motion.div>
        </div>
        <motion.a href="https://www.facebook.com/" className="socials">
            <Socials/>            
            </motion.a>
            <motion.a href="https://www.instagram.com/" className="socials">
            <Instagram/>
            </motion.a>
           
    </div>
    );
};

export default Parallax;