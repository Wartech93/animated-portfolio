import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/7450058/pexels-photo-7450058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, saepe? Eius distinctio optio neque dolor repudiandae adipisci, nam ullam nesciunt ea maiores beatae blanditiis aperiam facilis autem eum, fuga possimus!",
    },
    {
        id: 2,
        title: "Luxury Auto Rental",
        img: "https://images.pexels.com/photos/12920640/pexels-photo-12920640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, saepe? Eius distinctio optio neque dolor repudiandae adipisci, nam ullam nesciunt ea maiores beatae blanditiis aperiam facilis autem eum, fuga possimus!",
    },
    {
        id: 3,
        title: "Social Network API",
        img: "https://images.pexels.com/photos/2657669/pexels-photo-2657669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, saepe? Eius distinctio optio neque dolor repudiandae adipisci, nam ullam nesciunt ea maiores beatae blanditiis aperiam facilis autem eum, fuga possimus!",
    },
    {
        id: 4,
        title: "Web Text Editor",
        img: "https://images.pexels.com/photos/12920640/pexels-photo-12920640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, saepe? Eius distinctio optio neque dolor repudiandae adipisci, nam ullam nesciunt ea maiores beatae blanditiis aperiam facilis autem eum, fuga possimus!",
    },
];

function Single({ item }) {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={`${item.img}`} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.demo} target="blank">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Portfolio() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => {
        return <Single key={item.id} item={item} />;
      })}
    </div>
  );
}