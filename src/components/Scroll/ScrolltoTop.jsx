import {Fab , Zoom }from '@mui/material';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function ScrolltoTop(){
    return(
        <>
          <Zoom in={useScrollTrigger()}>
          <Fab onClick={() =>{
            window.scrollTo(0,0);
          }} sx={{position:"fixed" , bottom:33 , right:33}} color="primary" aria-label="add">
        <KeyboardControlKeyIcon sx={{fontSize :"1.8rem"}} />
      </Fab>
        
          </Zoom>
        </>
    )
}