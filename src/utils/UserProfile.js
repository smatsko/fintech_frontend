import User from "./User.js";
export const isAdministrator = (userProfile) => {
    return userProfile && userProfile.user && userProfile.user.roles.includes("ADMINISTRATOR")
}



class UserProfile {
    constructor( user) {
       this.user = user;
    }

}

export default UserProfile;


