import PropTypes from 'prop-types';

const styles = {
    courseItem: {
        padding: 1,
        margin: 2,
        display: "inline-block",
        fontSize: 12,
        border: '1px solid black'
    }
}

function CourseItem({course}) {
    return (
        <div style={styles.courseItem}>{course}</div>
    )
}

export default CourseItem