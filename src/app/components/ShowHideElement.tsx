'use client';
import React, { useState } from "react";

interface Props {
    pregunta: string;
    respuesta: string;
    numero: string;
}

const ShowHideElement: React.FC<Props> = ({ pregunta, respuesta, numero }) => {
    const [isAnswerVisible, setIsAnswerVisible] = useState(false);

    const toggleAnswerVisibility = () => {
        setIsAnswerVisible(!isAnswerVisible);
    };

    return (
        <div className="p-4 border-b border-gray-300">
            <div className="cursor-pointer" onClick={toggleAnswerVisibility}>
                <div className="flex justify-between items-center">
                    <p className="flex items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
                        <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                            {numero}
                        </span>
                        {pregunta}
                    </p>
                    <button
                        aria-label="toggler"
                        className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleAnswerVisibility();
                        }}
                    >
                        <img
                            className={`transform transition-transform duration-300 ${isAnswerVisible ? "rotate-180" : ""} dark:hidden`}
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                            alt="toggler"
                        />
                        <img
                            className={`transform transition-transform duration-300 ${isAnswerVisible ? "rotate-180" : ""} dark:block hidden`}
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                            alt="toggler"
                        />
                    </button>
                </div>
            </div>
            {isAnswerVisible && (
                <div className="mt-4 w-full">
                    <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                        {respuesta}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ShowHideElement;