import React from "react";
import CopyrightOutlinedIcon from '@material-ui/icons/CopyrightOutlined';


const Footer = ()=> {
    return (
        <React.Fragment>

            <footer className=" w-100 bg-light text-center">
                <p> {<CopyrightOutlinedIcon/>} 2023 Biswajit's Creation. All Right Reserved ! Term and Condition
                </p>
            </footer>
        
        </React.Fragment>
    )
}

export default Footer;