import React from 'react';
import { Box } from "@mui/material";
import me from '../../img/self1.png';
import cka from '../../img/CKA.png';
import ckad from '../../img/CKAD.png';
import Style from './Portfolio.module.scss';

export default function Portfolio() {
    window.addEventListener('contextmenu', function (e) {
        e.preventDefault();
      }, false);
    return (
        <>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
                <h1><a href={require("../../pareshResume.pdf")} download="PareshResume">Download my Resume</a></h1>
                <div class="column" >
                    <img className={Style.icon} src={cka} alt="paresh" height={300} width={300} />
                    <img src={me} alt="paresh" height={700} width={380} />
                    <img className={Style.icon} src={ckad} alt="paresh" height={300} width={300} />
                </div>
            </Box>
        </>
    );
};