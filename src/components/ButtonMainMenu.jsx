import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

/* Analytics */
/*
position: absolute;
width: 89px;
height: 30px;
left: 677px;
top: 33px;

font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/!* identical to box height, or 150% *!/

color: #FFFFFF;*/



export const ButtonMainMenu = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontStyle: "normal",
    fontSize: "20px",
    padding: '6px 12px',
    lineHeight: 1.5,
    color: "inherit",
    backgroundColor: 'inherit',
    borderColor: 'inherit',
    fontFamily: "Inter",
});


export default ButtonMainMenu;