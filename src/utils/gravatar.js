export const  gravatarNames = ["Monsterid", "Wavatar", "Robohash"];
export const  gravatarUrl = "https://gravatar.com/avatar/1?d="
export function gravatarFullUrl (name) {
    if (name) {
        return `${gravatarUrl}${name.toLowerCase()}`;
    }
    return `${gravatarUrl}404`
}