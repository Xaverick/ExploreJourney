"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineArrowDown } from 'react-icons/ai'
import './plan.scss'

interface FAQItem {
    title: string;
    content: React.ReactNode;
    move: boolean;
    open: boolean;
}

interface PlanProps {

    data: {
  
      itinerary: {
  
        heading: string;
  
        content: JSX.Element;
  
        move: boolean;
  
        open: boolean;
  
      }[];
  
      inclusion:  string[] | JSX.Element[];  
      exclusion: string[] | JSX.Element[];
  
    };
  
  }

const Plan: React.FC<PlanProps> = ({ data }) => {
    const [liveData, setLiveData] = useState(data.itinerary)
    const togglefaq = (index : number) => {
        setLiveData(liveData.map((item, i) => {
        if (i === index) {
            item.move = !item.move;
            item.open = !item.open;
            
        } 
        return item;
        }))
    
    }

    return (
        <div className='contact-question-and-faq'>
            <div id="faq" className='faq-section'>
                <h1>Detailed Tour Plan</h1>
                <div className='faq'>
                    {liveData.map((item, index) => (

                        <div key={index} className='single-faq'>
                            <div className='question'>
                                <h1>{item.heading}</h1>
                                <motion.div
                                    className='arrow'
                                    onClick={() => togglefaq(index)}
                                    initial="down"
                                    animate={{ rotate: item.move ? 180 : 0 }}
                                    transition={{ duration: 0.1, ease: "linear" }}
                                    variants={{
                                        down: { rotate: 0 }
                                    }}
                                >
                                    <AiOutlineArrowDown />
                                </motion.div>

                            </div>
                            <AnimatePresence initial={false}>
                                {item.open && (

                                    <motion.div
                                        className="answer"
                                        key="content"
                                        initial="collapsed"
                                        animate="open"
                                        exit={{ opacity: 0, height: 0, padding: 0 }}
                                        transition={{ duration: 0.3, ease: "linear" }}
                                        variants={{
                                            open: { opacity: 1, height: 'auto' },
                                            collapsed: { opacity: 0, height: 0, padding: 0 },

                                        }}
                                    >
                                        {item.content}
                                    </motion.div>

                                )}
                            </AnimatePresence>

                        </div>

                    ))}
                </div>
            </div>

            <div className="inclusion">
                <h1 className="heading_inclusion">Inclusions</h1>
                <ul>
                    {data.inclusion.map((item, index) => (
                        <div className="flex gap-3 items-start">
                            <div className="point" />
                            <li key={index}>{item}</li>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="exclusion">
                <h1 className="exclusion_inclusion">Exclusions</h1>
                <ul>
                    {/* <div className="point" /> */}
                    {data.exclusion.map((item, index) => (
                        <div className="flex gap-3 items-start">
                            <div className="point" />
                            <li key={index}>{item}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Plan