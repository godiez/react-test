import React from "react";

function AboutMe(props) {
    return (
        <>
            <h2 className={props.headerColor}>Sobre Mí</h2>
            <img
                src="https://i.imgur.com/MK3eW3Am.jpg"
                alt="Katherine Johnson"
                />
            <p>test@test.com</p>
        </>
    );
}

export { AboutMe };