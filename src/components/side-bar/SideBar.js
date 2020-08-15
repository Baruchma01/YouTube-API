import React from "react";
import classes from './SideBar.css'


const SideBar = () => {
    const buttons = [
        'דף הבית',
        'הסרטונים החמים',
        'מינויים',
        'ספרייה',
        'היסטוריה',
        'הסרטונים שלך',
        'לצפייה בהמשך',
        'סרטונים שאהבתי',
        'תוצאות נוספות'
    ];
    
    return <div className={classes.SideBarContainer}>
        {buttons.map(button => <button key={button} className={classes.Btn}>{button}</button>)}
    </div>
}

export default SideBar