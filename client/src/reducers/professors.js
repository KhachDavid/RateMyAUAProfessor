export default (professors = [], action) => {
    if (action.type === 'CREATE') {
        return [...professors, action.payload];
    } else if (action.type === 'FETCH_ALL') {
        return action.payload;
    } else if (action.type === 'DELETE') {
        return professors.filter((professor) => professor._id !== action.payload);
    } else if (action.type === 'UPDATE' || action.type === 'RATE') {
        return professors.map((professors) => professors._id === action.payload._id ? action.payload : professors);
    } else {
        return professors;
    }
}