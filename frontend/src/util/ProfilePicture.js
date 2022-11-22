import blue from "../assets/puffle_blue.png"
import brown from "../assets/puffle_brown.png"
import orange from "../assets/puffle_orange.png"
import pink from "../assets/puffle_pink.png"
import purple from "../assets/puffle_purple.png"
import sleep from "../assets/puffle_sleep.png"

class UserUtil {
    static #kvArray = [ [-1, ""], //Empty profile image
                        [0, blue],
                        [1, brown],
                        [2, orange],
                        [3, pink],
                        [4, purple],
                        [5, sleep]];
    static #profilePic = new Map(this.#kvArray);

    static getProfilePicture(id) { 
        return this.#profilePic.get(id);
    }
}   

export { UserUtil }