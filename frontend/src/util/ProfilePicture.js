class UserUtil {
    static #kvArray = [[1, "'../assets/puffle_blue.png'"],
                       [2, "'../assets/puffle_brown.png'"],
                       [3, "'../assets/puffle_orange.png'"],
                       [4, "'../assets/puffle_pink.png'"],
                       [5, "'../assets/puffle_purple.png'"],
                       [6, "'../assets/puffle_sleep.png'"]];
    static #profilePic = new Map(this.#kvArray);

    static getProfilePicture(id) { 
        return this.#profilePic.get(id);
    }
}   

export { UserUtil }