import React from 'react'
import {motion, useMotionValue, useTransform} from 'framer-motion'

const checkVariant ={
    initial:{
        color: '#fff',
    },
    check:{
        pathLength: 1,
    },
    unCheck:{
        pathLength: 0,
    },
};

const boxVariant ={

    check:{
        background: 'blue',
        transition: {duration: .1},
    },
    unCheck:{
        background: 'gray',
        transition: {duration: .1},
    },
};

const CheckButton = ({checked,
    //setChecked,
    handleCheck}) => {
    const pathLength = useMotionValue(0);
    const opacity = useTransform(pathLength,[0.05,0.15],[0,1]);


  return (
    <motion.div
    variants={boxVariant}
        animate={checked?'check':'unCheck'}
        //onClick={()=>{setChecked(!checked);}}
        onClick={handleCheck}
    >
        <motion.svg viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
	<motion.path
		fill="none"
        variants={checkVariant}
        animate={checked?'check':'unCheck'}
        style={{pathLength,opacity}}
		strokeMiterlimit="10"
		strokeWidth="6"
		d="M1.5 22L16 36.5L51.5 1"
		strokeLinejoin="round"
		strokeLinecap="round"
	/>
</motion.svg>
    </motion.div>
  )
}

export default CheckButton