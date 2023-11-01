import React from 'react';

const About = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-800">
            <div className="bg-white p-6 rounded shadow-lg">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">About Dinnerator</h1>
                <p className="text-gray-700">
                    Dinnerator is a meal planning application designed to help you simplify the process of deciding what to eat.
                    It offers a variety of meal ideas and recipes to make your meal planning a breeze.
        </p>
                <div className="mt-4">
                    <p className="text-gray-700">
                        Have questions or need assistance? Feel free to reach out to us at <a href="mailto:help@dinnerator.com" className="text-blue-500">help@dinnerator.com</a>.
          </p>
                </div>
            </div>
        </div>
    );
};

export default About;
