export const getPosts = async (page) => {
    try {
        const result = await fetch(`https://67bf7fceb2320ee05013e1b7.mockapi.io/blogproject/post?page=${page}&limit=4`).then((data) => {
            return data.json();
        });
        return result;
    } catch(error){
        return error;
    };
};