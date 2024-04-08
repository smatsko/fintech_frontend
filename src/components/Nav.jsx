import React from 'react';
import MyAvatar from "./MyAvatar.jsx";

const Nav = () => {
    return (
        <div className={'nav'}>
            <h1 style={{margin: "auto"}}>Tel-book</h1>
            <MyAvatar size={'40'} spvariant={"round"}/>
        </div>
    );
};

export default Nav;