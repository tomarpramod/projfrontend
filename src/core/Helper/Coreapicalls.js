import {API} from "../../backend";

export const getProducts = () => {
    return fetch(`${API}product`, {method: "GET"})
    .then(respnse => {
        return respnse.json();
    })
    .catch(err => console.log(err))
}