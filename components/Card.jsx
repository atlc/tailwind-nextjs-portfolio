import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../store/reducers";

const Card = ({ header, subheader, bodies, second_body, sub_body, second_sub_body }) => {
    const color = useSelector(selectColor);
    return (
        <div
            className={`w-5/6 md:w-2/3 lg:w-2/5 mt-4 border-2 border-${color}-300 dark:border-${color}-800 rounded-lg bg-${color}-50 dark:bg-${color}-300 p-3 shadow-2xl`}>
            <div
                className={`bg-${color}-200 shadow-lg rounded-lg mt-2 text-center text-${color}-800 dark:text-${color}-900 p-3 dark:bg-${color}-400`}>
                <div className="text-2xl font-light md:text-4xl">{header}</div>
                {subheader && <div className="text-lg italic font-light md:text-2xl md:text-xl">{subheader}</div>}
            </div>
            {bodies &&
                bodies.map((body, index) => (
                    <div
                        key={`card-body-paragraph-${index}`}
                        className={`font-light text-base md:text-xl p-2 mt-2 text-${color}-800 dark:text-${color}-900`}>
                        {body}
                    </div>
                ))}
            {sub_body && <div className={`font-bold text-sm md:text-lg p-2 text-${color}-800 dark:text-${color}-900`}>{sub_body}</div>}
            {second_body && (
                <div className={`font-light text-base md:text-xl p-2 mt-2 text-${color}-800 dark:text-${color}-900`}>{second_body}</div>
            )}
            {second_sub_body && (
                <div className={`font-bold text-sm md:text-lg p-2 text-${color}-800 dark:text-${color}-900`}>{second_sub_body}</div>
            )}
        </div>
    );
};

export default Card;
