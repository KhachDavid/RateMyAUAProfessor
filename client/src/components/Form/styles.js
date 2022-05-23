import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
        margin: 2,
    },
    paper: {
        padding: 15,

        '&:hover': {
            boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 5px 8px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
        },    
    },

    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSubmit: {
        color: 'green',
        marginBottom: 10,
    },
}));