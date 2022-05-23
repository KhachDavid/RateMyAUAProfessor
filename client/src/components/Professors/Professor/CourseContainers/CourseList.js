import React from "react";
import CourseItem from "./CourseItem";

const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}

function updatedProps(coursesString) {
    return coursesString.toString().split(",");
}

function CourseList(props) {
    return (
        <ul style={styles.ul}>
            {updatedProps(props.courses).map((course) => {
                return <CourseItem course={course}/>
            })}
        </ul>
    )
}

export default CourseList