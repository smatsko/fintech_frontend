import thisBackGround from "../images/d6f61555025582efcc0b03c68ae791e1.jpeg";

export const AppBarHeight = 64;
export const AppBottomBarHeight = 64;

export const prjStyles = {
    AppBar: {
        background: "#04031C",
        height: `${AppBarHeight}px`
    },
    AppBottomBar: {
        background: "#04031C",
        height: `${AppBottomBarHeight}px`,
        color:"white",
        display: 'flex',
        flexDirection: 'horizontal',
        justifyContent: 'space-between',
        alignItems: "center",
    },

    fpPart1 : {
        backgroundImage: `url(${thisBackGround})`,
        backgroundSize: "cover",
        color: "white",
        alignItems:"center",
        justifyContent: "space-around"
    },
    fpPart4 : {
        background: "linear-gradient(174deg, #04031C -13.39%, #27296D 99.24%)",
        color: "white"
    },
    fpPartOther : {
        background: "linear-gradient(174deg, #04031C -13.39%, #27296D 99.24%)",
        color: "white",
        alignItems:"center",
        justifyContent: "space-around"
    },
    AdminPage: {
        background: "linear-gradient(174deg, #04031C -13.39%, #27296D 99.24%)",
        color:"white",

    }

}



export const styleMainBody = {
    fontFamily: "Inter",
    display: "flex",
    color: "white",
    boxSizing: "border-box",
    background: "linear-gradient(174deg, #04031C -13.39%, #27296D 99.24%)"
}

export const styleTopBottom = {
    background: "#04031C",
    color: "white",
    p: 0, m: 0
}