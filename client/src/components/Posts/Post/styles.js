import {makeStyles} from '@mui/styles';

export default makeStyles({
    // media: {
    //   height: 100,
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   backgroundBlendMode: 'darken',
    // },
    // border: {
    //   border: 'solid',
    // },
    // fullHeightCard: {
    //   height: '100%',
    // },
    // card: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   justifyContent: 'space-between',
    //   borderRadius: '15px',
    //   height: '100%',
    //   position: 'relative',
    // },
    // overlay: {
    //   position: 'absolute',
    //   top: '20px',
    //   left: '20px',
    //   color: 'white',
    // },
    // overlay2: {
    //   position: 'absolute',
    //   top: '20px',
    //   right: '20px',
    //   color: 'white',
    // },
    // grid: {
    //   display: 'flex',
    // },
    // details: {
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   margin: '20px',
    // },
    // title: {
    //   padding: '0 16px',
    // },
    cardActions: {
        position: 'absolute',
        right: 0,
        display: 'flex',
    },
    parentLi: {
        position: "relative",
        height: 110,
        width: 400,
        margin: 2,
        marginTop: 5,
        border: '0.5px solid rgba(0, 0, 0, 0.5)',
    },
    img: {
        padding: 5,
        height: 100,
        width: '25%',
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