import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutLineArrowDropDown} from 'react-icons/md'
import "./Value.css"
import data from "../../utils/accordion"
import { MdArrowDropDown } from 'react-icons/md';


const Value = () => {
  const [className,setcClassName] = useState(null); 
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right  */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Value</span>
          <span className='primaryText'>Value we give to you</span>
          <span className='secondaryText'>We are always ready to provide the best services to you
            <br />
            We believe a good place to live makes your living better.
          </span>

          <Accordion
          className='accordion'
          allowMultipleExpanded={false}
          preExpanded={[0]} 
          > 
          {
           data.map((item,i)=>{
            return(
              <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                 <AccordionItemHeading>
                  <AccordionItemButton className='flexCenter accordionButton '>
                    <AccordionItemState>
                      {({expanded})=>expanded ? setcClassName("expanded"): setcClassName("collapsed ")}
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon} </div>
                    <span className="primaryText">
                      {item.heading}
                    </span>
                    <div className="flexCenter icon">
                      <MdArrowDropDown size={20}/> 
                    </div>
                  </AccordionItemButton>
                 </AccordionItemHeading>
                 <AccordionItemPanel>
                  <p className="secondaryText">
                    {item.detail}
                  </p>
                 </AccordionItemPanel>
              </AccordionItem>
            )
           })
          }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Value
