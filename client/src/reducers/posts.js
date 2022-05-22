export default (posts = [], action) => {
    if (action.type === 'CREATE') {
        return [...posts, action.payload];
    } else if (action.type === 'FETCH_ALL') {
        return action.payload;
    } else if (action.type === 'DELETE') {
        return posts.filter((post) => post._id !== action.payload);
    } else if (action.type === 'UPDATE' || action.type === 'RATE') {
        return posts.map((posts) => posts._id === action.payload._id ? action.payload : posts);
    } else {
        return posts;
    }
}