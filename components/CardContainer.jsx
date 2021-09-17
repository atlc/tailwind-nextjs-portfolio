import React from "react";

const CardContainer = ({ children }) => {
    return <div className={`flex flex-wrap justify-evenly mt-5 pb-5`}>{children}</div>;
};

export default CardContainer;
