import { createMarkup } from "../operation/createMarkup.js";

export const addPostApi = async (newPost) => {

    try{
        const options = {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {
              "Content-Type": "application/json; charset=UTF-8",
            },
        }

        const data = await fetch("https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post", options).then((data) => {
            return data.json()
        })

        return data;
    } catch(error){
        return error;
    }
};