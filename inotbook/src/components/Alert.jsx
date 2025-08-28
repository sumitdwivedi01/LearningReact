import React from "react";

const Alert = ({msg}) => {

    return (
        <div>
            <div className="alert alert-primary" role="alert">
           {msg}
            </div>
        </div>
    )
}

export default Alert
