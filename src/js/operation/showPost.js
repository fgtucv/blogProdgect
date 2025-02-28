import { getPosts } from "../api/getPostApi.js";
import { createMarkup } from "./createMarkup.js";

export function showePost(page) {
    getPosts(page).then((data) => {
        createMarkup(data)
    });
};