import React from "react";

function Projects(props) {
    console.log(props);
    return (
        <>
            <h2 className={props.headerColor}>Mis proyectos</h2>
            <ul>
                <li>Proyecto 1</li>
                <li>Proyecto 2</li>
                <li>Proyecto 3</li>
                <li>Proyecto 4</li>
                <li>Proyecto 5</li>
            </ul>
        </>
    );
}

export { Projects };