import { animate } from "framer-motion";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import  emailjs from "@emailjs/browser";

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    }
}

const Contact = () => {

    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const isInView = useInView(ref, { margin: "-100px" })

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_d4xj35n', 'template_2oq5hwl', formRef.current, {
                publicKey: 'Li0iOK2R77PEvIaiQ',
            })
            .then(
                (result) => {
                    setSetSuccess(true)


                    console.log('SUCCESS!');
                },
                (error) => {
                    setError(true)
                },
            );
    };


    return (
        <motion.div
            ref={ref}
            className="contact"
            variants={variants}
            initial="initial"
            whileInView="animate">
            <motion.div
                className="textContainer"
                variants={variants}>
                <motion.h1
                    variants={variants}>
                    Let's Work Together
                </motion.h1>
                <motion.div
                    className="item"
                    variants={variants}>
                    <h2>Mail</h2>
                    <span>hello@react.dev</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Address</h2>
                    <span>hello street new york</span>
                </motion.div>
                <motion.div className="item">
                    <h2>Phone</h2>
                    <span>1234567890</span>
                </motion.div>
            </motion.div>
            <div className="formContainer">
                <motion.div className="contactSvg"
                    initial={{ opacity: 1 }}
                    whileInView={{ opacity: 0 }}
                    transition={{ delay: 3, duration: 1 }}>

                    <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg"
                        width="450px" height="450px" viewBox="0 0 32 32" >
                        <style type="text/css">
                        </style>
                        <motion.path
                            strokeWidth={0.2}
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={isInView && { pathLength: 1 }}
                            transition={{ duration: 3 }}
                            className="sharpcorners_een" d="M28,18.141v-4.283c1.722-0.446,3-1.997,3-3.859c0-2.209-1.791-4-4-4
	c-1.152,0-2.182,0.494-2.912,1.273l-4.22-2.302C19.946,4.658,20,4.337,20,4c0-2.209-1.791-4-4-4s-4,1.791-4,4
	c0,0.337,0.054,0.658,0.132,0.971l-4.22,2.302C7.182,6.494,6.152,6,5,6c-2.209,0-4,1.791-4,4c0,1.862,1.278,3.412,3,3.859v4.283
	C2.278,18.587,1,20.138,1,22c0,2.209,1.791,4,4,4c1.152,0,2.182-0.494,2.912-1.273l4.22,2.302C12.054,27.342,12,27.663,12,28
	c0,2.209,1.791,4,4,4s4-1.791,4-4c0-0.337-0.054-0.658-0.132-0.971l4.22-2.302C24.818,25.506,25.848,26,27,26c2.209,0,4-1.791,4-4
	C31,20.138,29.722,18.587,28,18.141z M18.912,25.273C18.182,24.494,17.152,24,16,24s-2.182,0.494-2.912,1.273l-4.22-2.302
	C8.946,22.658,9,22.337,9,22c0-1.862-1.278-3.413-3-3.859v-4.283C7.722,13.412,9,11.862,9,10c0-0.337-0.054-0.658-0.132-0.971
	l4.22-2.302C13.818,7.506,14.848,8,16,8s2.182-0.494,2.912-1.273l4.22,2.302C23.054,9.342,23,9.663,23,10
	c0,1.862,1.278,3.412,3,3.859v4.283c-1.722,0.446-3,1.997-3,3.859c0,0.337,0.054,0.658,0.132,0.971L18.912,25.273z"/>
                    </svg>
                </motion.div>
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 4, duration: 1 }}>
                    <input type="text" required placeholder="Name" name="name" />
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message" />
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
        </motion.div>
    );
};
export default Contact;