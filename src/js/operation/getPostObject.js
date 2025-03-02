import { addPostApi } from "../api/addPostApi";

export function createObject(login, text, img) {
    const date = new Date();

    const postObject = {
        authorLogin: `${login}`,
        authorName: `${login}`,
        postImeges: `${img}`,
        publicationDate: date.getTime(),
        likes: Math.round(Math.random() * (536 - 8) + 1),
        views: Math.round(Math.random() * (536 - 8) + 1) * 10,
        postText: `${text}`,
    }

    addPostApi(postObject)
}