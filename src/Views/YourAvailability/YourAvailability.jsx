import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation, setTimezone, setHoursPerWeek, setAvailability } from '../../Actions';

export default function YourAvailability() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const availabilityForm = useSelector((state) => state.availabilityForm)

    const [localAvailability, setLocalAvailability] = useState({
        'Early Morning': false,
        'Late Mornings': false,
        'Early Afternoons': false,
        'Late Afternoons': false,
        'Evenings': false,
        'Nights': false,
    });

    // Dropdown options
    const timezoneOptions = [
        'UTC-11: Samoa Standard Time', 'UTC-10 Hawaii-Aleutian Standard Time', 'UTC-9: Alaska Standard Time (AKST)', 'UTC-8: Pacific Standard Time (PST)', 'UTC-7: Mountain Standard Time (MST)', 'UTC-6: Central Standard Time (CST)', 'UTC-5: Eastern Standard Time (EST)', 'UTC-Atlantic Standard Time (AST)'
    ];

    const hoursPerWeekOptions = [
        '2-5 hours/week', '5-10 hours/week', '10-20 hours/week', '20-40 hours/week'
    ];

    const handleLocationChange = (e) => {
        // setLocalLocation(e.target.value);
        dispatch(setLocation(e.target.value));
    };

    const handleTimezoneChange = (e) => {
        // setLocalTimezone(e.target.value);
        dispatch(setTimezone(e.target.value));
    };

    const handleHoursPerWeekChange = (e) => {
        // setLocalHoursPerWeek(e.target.value);
        dispatch(setHoursPerWeek(e.target.value));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setLocalAvailability({
            ...localAvailability,
            [name]: checked,
        });
    };
    
    const navigateWelcomeDone = () => {

        // Dispatch the user input data to Redux
        dispatch(setAvailability(Object.keys(localAvailability).filter((key) => localAvailability[key])));

        // Continue to the next step
        navigate('/welcome-done');
    };

    return (
        <div className="professional-background-container" style={{ backgroundColor: '#bcbbc2' }}>
            <div className="flex items-center justify-center">
                <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white">
                    <div className="mb-4 flex items-center">
                    <button className="hover:underline text-lg mr-4" onClick={() => navigate("/professional-background")} style={{ display: 'flex', alignItems: 'center' }}>
                    <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                    </svg>
                    Back
                    </button>
                        {/* progress bar */}
                        <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '83.35%', backgroundColor: '#ed4168' }}></div>
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">
                        Your Availability
                    </p>

                    <h2 className="text-md md:text-lg text-center font-bold mb-12">
                        Tell your teammates about your schedule constraints.
                    </h2>

                    <h6 className="text-md md:text-lg text-left mb-4">
                        1. Where are you located?
                    </h6>

                    <div className="mb-2">
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6" placeholder="Enter your city, country" value={availabilityForm.location} onChange={handleLocationChange} />
                    </div>

                    <h6 className="text-md md:text-lg text-left mb-4">
                        2. What timezone are you in?
                    </h6>

                    <div className="mb-2">
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
                            value={availabilityForm.timezone}
                            onChange={handleTimezoneChange}
                        >
                            <option value="" disabled>Select your timezone</option>
                            {timezoneOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h6 className="text-md md:text-lg text-left mb-4">
                        3. How many hours per week can you dedicate?
                    </h6>

                    <div className="mb-2">
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
                            value={availabilityForm.hoursPerWeek}
                            onChange={handleHoursPerWeekChange}
                        >
                            <option value="" disabled>Select hours per week</option>
                            {hoursPerWeekOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <h6 className="text-md md:text-lg text-left mb-2">
                        4. What are the general hours that you are available?
                    </h6>

                    <p className="text-sm text-gray-500 mb-2">Select all that apply</p>

                    <div className="mb-2">
                        <label className="block mb-1">
                            <input type="checkbox" name="Early Morning" checked={localAvailability['Early Morning']} onChange={handleCheckboxChange} className="mr-2" />
                            Early Morning, 6am-9am
                        </label>
                        <label className="block mb-1">
                            <input type="checkbox" name="Late Mornings" checked={localAvailability['Late Mornings']} onChange={handleCheckboxChange} className="mr-2" />
                            Late Mornings, 9am-12pm
                        </label>
                        <label className="block mb-1">
                            <input type="checkbox" name="Early Afternoons" checked={localAvailability['Early Afternoons']} onChange={handleCheckboxChange} className="mr-2" />
                            Early Afternoons, 12pm-3pm
                        </label>
                        <label className="block mb-1">
                            <input type="checkbox" name="Late Afternoons" checked={localAvailability['Late Afternoons']} onChange={handleCheckboxChange} className="mr-2" />
                            Late Afternoons, 3pm-6pm
                        </label>
                        <label className="block mb-1">
                            <input type="checkbox" name="Evenings" checked={localAvailability['Evenings']} onChange={handleCheckboxChange} className="mr-2" />
                            Evenings, 6pm-9pm
                        </label>
                        <label className="block mb-10">
                            <input type="checkbox" name="Nights" checked={localAvailability['Nights']} onChange={handleCheckboxChange} className="mr-2" />
                            Nights, 9pm-12am
                        </label>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none" style={{ backgroundColor: '#ed4168' }}
                            type="button"
                            onClick={navigateWelcomeDone}
                            >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
