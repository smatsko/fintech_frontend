import User from "./User.js";
export const isAdministrator = (userProfile) => {
    return userProfile && userProfile.user && userProfile.user.roles.includes("ADMINISTRATOR")
}



class UserProfile {
    constructor( user, token) {
       this.user = user;
       this.token = token;
    }

}

export default UserProfile;


