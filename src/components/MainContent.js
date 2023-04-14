import React from "react";

function MainContent(props) {
    return (
        <div className={'MainContent MaintConent-' + props.color}>
            {props.children}
        </div>
    );
}

export { MainContent };