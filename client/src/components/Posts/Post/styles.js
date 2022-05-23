import { makeStyles } from '@mui/styles';

export default makeStyles({
    cardActions: {
        position: 'absolute',
        right: 0,
        display: 'flex',
    },
    parentLi: {
        position: "relative",
        height: '11rem',
        width: 500,
        margin: 2,
        marginTop: 5,
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        borderRadius: '4px',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',

        '&:hover': {
            boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
        },
    },

    img: {
        padding: 5,
        height: 100,
        width: 100,
        display: 'block',
        float: 'left'
    },
    texts: {
        float: "left",
        display: 'block',
    },
    name: {
        paddingTop: 5,
        fontWeight: "bold"
    },
    rating: {
        position: "absolute",
        fontSize: "large",
        bottom: 10,
        left: 115,
        float: "bottom"
    },
    ratingCount: {
        position: "absolute",
        bottom: 10,
        right: 10,
        float: "bottom"
    },
    above8: {
        color: 'green'
    },
    above5: {
        color: 'orange'
    },
    above0: {
        color: 'red'
    }
});