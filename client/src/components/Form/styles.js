import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    root: {
        margin: 2,
    },
    paper: {
        padding: 2,
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    fileInput: {
        width: '97%',
        margin: '10px 0',
    },
    buttonSubmit: {
        color: 'green',
        marginBottom: 10,
    },
}));