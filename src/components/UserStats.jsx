import React, {useContext} from 'react';
import MyAvatar from "./MyAvatar.jsx";
import {UserContext} from "../utils/userContext.js";
import {Grid} from "@mui/material";


const UserStats = () => {
    const {name, followers, following, setFollowers, setFollowing, handleDisplay} = useContext(UserContext);

    return (
            <div className={'user-stats'}>
                <div>
                    <MyAvatar size={50} spVariant={"square"}/>
                    {name}
                </div>
                <div className={"stats"}>
                    <div>Followers:
                        <span
                            onClick={() => {
                                setFollowers(followers + 1);
                            }
                            }
                            onContextMenu={(e) => {
                                e.preventDefault();
                                setFollowers(followers - 1);
                            }
                            }

                        >{followers}</span></div>
                    <div>Following:
                        <span
                            onClick={() => {
                                setFollowing(following + 1);
                            }
                            }
                            onContextMenu={(e) => {
                                e.preventDefault();
                                setFollowing(following - 1);
                            }

                            }
                        >{following}</span></div>


                </div>
            </div>
    );
};

export default UserStats;