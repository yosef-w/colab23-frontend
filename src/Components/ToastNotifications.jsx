import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeToast } from '../Actions';

function Toast({ message, type, id }) {
    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // This will run after the component is rendered to fade in a new toast
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 10); // You can adjust the delay if needed

        // Cleanup function to clear the timeout if component unmounts
        return () => clearTimeout(timer);
    }, []);

    const getToastClasses = () => {
        switch (type) {
            case 'error':
                return 'bg-orange-200 text-orange-600 shadow-2xl shadow-orange-600';
            case 'success':
                return 'bg-[#1F1D34] text-cyan-400 shadow-2xl shadow-cyan-400';
            default:
                return 'bg-[#1F1D34] text-amber-400 shadow-2xl shadow-amber-400';  // info
        }
    };

    return (
        <div className={`bg-white flex justify-between items-center p-3 max-h-xs w-auto rounded-2xl
                    transition-opacity duration-300 ease-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'} 
                    ${getToastClasses()}` /* Tailwind styles based on `type` */}>
            {type === 'success' ?
                <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.2311 9.90053C36.1772 9.80849 36.0516 9.72604 35.8755 9.65728C35.6944 9.58659 35.4448 9.52454 35.1225 9.48343C34.4777 9.40116 33.5344 9.40176 32.2506 9.59102L32.1164 9.61079L32.2008 9.71692C33.0989 10.8467 33.8296 12.0963 34.3708 13.4283L34.4203 13.5502L34.5036 13.4484C35.4076 12.343 35.9861 11.364 36.1972 10.5878C36.2504 10.3939 36.269 10.242 36.2701 10.1304C36.2706 10.0747 36.2668 10.0283 36.2604 9.99145C36.2544 9.95664 36.2452 9.92424 36.2311 9.90053ZM36.2311 9.90053C36.2311 9.90048 36.231 9.90043 36.231 9.90038L36.1639 9.94034L36.2314 9.90104C36.2313 9.90087 36.2312 9.9007 36.2311 9.90053ZM39.4508 8.06461L39.4509 8.06481C39.8501 8.73759 40.2378 9.89629 39.7885 11.5312L39.7884 11.5315C39.2865 13.387 37.7554 15.5753 35.4465 17.8598L35.4208 17.8853L35.4235 17.9214C35.4525 18.2964 35.4669 18.673 35.4669 19.0544V19.0545C35.4694 21.8235 34.7028 24.5405 33.25 26.9116C31.7972 29.2827 29.7134 31.2176 27.224 32.5068C24.7345 33.796 21.9344 34.3905 19.1264 34.2257C16.3185 34.0609 13.6099 33.1432 11.2937 31.572L11.2645 31.5522L11.2303 31.561C9.30355 32.0579 7.49923 32.3396 5.92614 32.3396C3.45223 32.3396 1.56503 31.6444 0.622892 30.0443L0.622884 30.0443C0.121936 29.1939 -0.153502 28.0047 0.330654 26.4C0.815784 24.7921 2.0646 22.7643 4.62056 20.246L4.64632 20.2206L4.64363 20.1845C4.61577 19.811 4.60184 19.4343 4.60184 19.0544V19.0544C4.59961 16.2845 5.36693 13.5668 6.82083 11.1953C8.27474 8.82389 10.3599 6.88906 12.8506 5.60046C15.3414 4.31186 18.1427 3.71864 20.9514 3.88511C23.7601 4.05158 26.469 4.97138 28.7847 6.54482L28.814 6.5647L28.8482 6.55583C32.3282 5.65474 34.7318 5.6113 36.388 6.003C38.0414 6.39402 38.9522 7.21897 39.4508 8.06461ZM20.0345 7.52205L20.0343 7.52205C17.6878 7.52498 15.3961 8.22201 13.4566 9.52288C11.517 10.8238 10.0189 12.6685 9.15679 14.8182C8.29465 16.9678 8.10828 19.3229 8.6219 21.5781C9.13552 23.8334 10.3254 25.8844 12.037 27.4655L12.0703 27.4963L12.1136 27.4826C15.2767 26.48 18.8055 24.9074 22.3219 22.9183L22.3219 22.9182C26.055 20.8048 29.1294 18.5968 31.4267 16.5676L31.4616 16.5367L31.451 16.4913C30.8583 13.945 29.4066 11.672 27.3331 10.0431C25.2596 8.4142 22.6867 7.52558 20.0345 7.52205ZM3.84052 28.2077L3.8411 28.2087C3.8627 28.2448 3.90058 28.2798 3.94768 28.3125C3.99625 28.3463 4.06026 28.3816 4.14059 28.4163C4.30133 28.4858 4.53151 28.5546 4.84369 28.6042C5.46816 28.7035 6.4257 28.7263 7.82318 28.5179L7.95702 28.4979L7.87281 28.392C6.97568 27.2635 6.24563 26.0155 5.70445 24.6853L5.65482 24.5633L5.57156 24.6654C4.69215 25.7429 4.23168 26.5708 4.00361 27.1542C3.8896 27.4458 3.83323 27.6774 3.81209 27.8493C3.80153 27.9352 3.79962 28.0074 3.8042 28.0654C3.8086 28.1213 3.81953 28.1714 3.84052 28.2077ZM16.3603 29.8571L16.1606 29.9372L16.3651 30.0039C17.5487 30.3902 18.7875 30.587 20.0344 30.5868H20.0345C22.7157 30.5836 25.315 29.676 27.3995 28.015C29.484 26.3539 30.9278 24.0396 31.4901 21.4574L31.5351 21.2507L31.3665 21.3785C29.0822 23.1111 26.6791 24.6862 24.1743 26.0927L24.174 26.0929C21.6597 27.5218 19.0491 28.7795 16.3603 29.8571ZM32.3514 9.65535C32.342 9.64345 32.3326 9.63156 32.3231 9.61969L32.262 9.66831C32.292 9.66388 32.3218 9.65957 32.3514 9.65535ZM31.3874 21.5587C31.4119 21.5401 31.4364 21.5216 31.4609 21.503L31.4137 21.4408L31.3374 21.4241C31.3309 21.454 31.3243 21.4838 31.3175 21.5136C29.0591 23.2196 26.6853 24.7723 24.2126 26.1609L31.3874 21.5587Z" fill="#36D6E3" stroke="#36D6E3" stroke-width="0.15625" />
                    <ellipse cx="15.9317" cy="14.8119" rx="1.2402" ry="1.22582" fill="#36D6E3" />
                    <ellipse cx="24.327" cy="11.9831" rx="1.2402" ry="1.22582" fill="#36D6E3" />
                    <path d="M26.9027 14.7175C26.9027 14.7175 25.5433 17.1702 22.2333 18.4027C18.9233 19.6352 16.0271 18.7428 16.0271 18.7428" stroke="#36D6E3" stroke-width="2" stroke-linecap="round" />
                </svg>


                :
                type === "error" ?
                    <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M36.2311 9.90053C36.1772 9.80849 36.0516 9.72604 35.8755 9.65728C35.6944 9.58659 35.4448 9.52454 35.1225 9.48343C34.4777 9.40116 33.5344 9.40176 32.2506 9.59102L32.1164 9.61079L32.2008 9.71692C33.0989 10.8467 33.8296 12.0963 34.3708 13.4283L34.4203 13.5502L34.5036 13.4484C35.4076 12.343 35.9861 11.364 36.1972 10.5878C36.2504 10.3939 36.269 10.242 36.2701 10.1304C36.2706 10.0747 36.2668 10.0283 36.2604 9.99145C36.2544 9.95664 36.2452 9.92424 36.2311 9.90053ZM36.2311 9.90053C36.2311 9.90048 36.231 9.90043 36.231 9.90038L36.1639 9.94034L36.2314 9.90104C36.2313 9.90087 36.2312 9.9007 36.2311 9.90053ZM39.4508 8.06461L39.4509 8.06481C39.8501 8.73759 40.2378 9.89629 39.7885 11.5312L39.7884 11.5315C39.2865 13.387 37.7554 15.5753 35.4465 17.8598L35.4208 17.8853L35.4235 17.9214C35.4525 18.2964 35.4669 18.673 35.4669 19.0544V19.0545C35.4694 21.8235 34.7028 24.5405 33.25 26.9116C31.7972 29.2827 29.7134 31.2176 27.224 32.5068C24.7345 33.796 21.9344 34.3905 19.1264 34.2257C16.3185 34.0609 13.6099 33.1432 11.2937 31.572L11.2645 31.5522L11.2303 31.561C9.30355 32.0579 7.49923 32.3396 5.92614 32.3396C3.45223 32.3396 1.56503 31.6444 0.622892 30.0443L0.622884 30.0443C0.121936 29.1939 -0.153502 28.0047 0.330654 26.4C0.815784 24.7921 2.0646 22.7643 4.62056 20.246L4.64632 20.2206L4.64363 20.1845C4.61577 19.811 4.60184 19.4343 4.60184 19.0544V19.0544C4.59961 16.2845 5.36693 13.5668 6.82083 11.1953C8.27474 8.82389 10.3599 6.88906 12.8506 5.60046C15.3414 4.31186 18.1427 3.71864 20.9514 3.88511C23.7601 4.05158 26.469 4.97138 28.7847 6.54482L28.814 6.5647L28.8482 6.55583C32.3282 5.65474 34.7318 5.6113 36.388 6.003C38.0414 6.39402 38.9522 7.21897 39.4508 8.06461ZM20.0345 7.52205L20.0343 7.52205C17.6878 7.52498 15.3961 8.22201 13.4566 9.52288C11.517 10.8238 10.0189 12.6685 9.15679 14.8182C8.29465 16.9678 8.10828 19.3229 8.6219 21.5781C9.13552 23.8334 10.3254 25.8844 12.037 27.4655L12.0703 27.4963L12.1136 27.4826C15.2767 26.48 18.8055 24.9074 22.3219 22.9183L22.3219 22.9182C26.055 20.8048 29.1294 18.5968 31.4267 16.5676L31.4616 16.5367L31.451 16.4913C30.8583 13.945 29.4066 11.672 27.3331 10.0431C25.2596 8.4142 22.6867 7.52558 20.0345 7.52205ZM3.84052 28.2077L3.8411 28.2087C3.8627 28.2448 3.90058 28.2798 3.94768 28.3125C3.99625 28.3463 4.06026 28.3816 4.14059 28.4163C4.30133 28.4858 4.53151 28.5546 4.84369 28.6042C5.46816 28.7035 6.4257 28.7263 7.82318 28.5179L7.95702 28.4979L7.87281 28.392C6.97568 27.2635 6.24563 26.0155 5.70445 24.6853L5.65482 24.5633L5.57156 24.6654C4.69215 25.7429 4.23168 26.5708 4.00361 27.1542C3.8896 27.4458 3.83323 27.6774 3.81209 27.8493C3.80153 27.9352 3.79962 28.0074 3.8042 28.0654C3.8086 28.1213 3.81953 28.1714 3.84052 28.2077ZM16.3603 29.8571L16.1606 29.9372L16.3651 30.0039C17.5487 30.3902 18.7875 30.587 20.0344 30.5868H20.0345C22.7157 30.5836 25.315 29.676 27.3995 28.015C29.484 26.3539 30.9278 24.0396 31.4901 21.4574L31.5351 21.2507L31.3665 21.3785C29.0822 23.1111 26.6791 24.6862 24.1743 26.0927L24.174 26.0929C21.6597 27.5218 19.0491 28.7795 16.3603 29.8571ZM32.3514 9.65535C32.342 9.64345 32.3326 9.63156 32.3231 9.61969L32.262 9.66831C32.292 9.66388 32.3218 9.65957 32.3514 9.65535ZM31.3874 21.5587C31.4119 21.5401 31.4364 21.5216 31.4609 21.503L31.4137 21.4408L31.3374 21.4241C31.3309 21.454 31.3243 21.4838 31.3175 21.5136C29.0591 23.2196 26.6853 24.7723 24.2126 26.1609L31.3874 21.5587Z" fill="#EF5A1A" stroke="#EF5A1A" stroke-width="0.15625" />
                        <ellipse cx="15.9317" cy="14.8119" rx="1.2402" ry="1.22582" fill="#EF5A1A" />
                        <ellipse cx="24.327" cy="11.9831" rx="1.2402" ry="1.22582" fill="#EF5A1A" />
                        <path d="M26.8436 15.5748C26.8436 15.5748 24.148 14.8018 20.936 16.2708C17.724 17.7397 16.3071 20.4186 16.3071 20.4186" stroke="#EF5A1A" stroke-width="2" stroke-linecap="round" />
                    </svg>

                    :
                    type === "info" ?
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28.25 15.0167C33.2834 16.2483 36.6667 18.555 36.6667 21.2067C36.6667 25.1517 29.2 28.3333 20 28.3333C10.8 28.3333 3.33337 25.1517 3.33337 21.2067C3.33337 18.5567 6.73337 16.2317 11.7834 15" stroke="#EBB237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.0001 28.3334L28.3334 33.3334M14.1667 28.3334L11.6667 33.3334M20.0001 23.3334H20.0167M11.6667 21.6667H11.6834M28.3334 21.6667H28.3501M11.6667 15C11.6667 16.8417 15.3984 18.3334 20.0001 18.3334C24.6017 18.3334 28.3334 16.8417 28.3334 15V14.9417C28.3334 10.3717 24.6017 6.66669 20.0001 6.66669C15.3984 6.66669 11.6667 10.3717 11.6667 14.9417V15Z" stroke="#EBB237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        :
                        ''
            }
            <div className='m-2 max-w-xs'>
                {message}
            </div>

            {/* X button to close toast */}
            <button onClick={() => {
                setIsVisible(false);
                setTimeout(() => dispatch(removeToast(id)), 300);  // Remove toast after fade-out animation
            }}>
                {/* X button stylings */}
                {type === "success" ?
                    <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7.35355" y1="7.64645" x2="27.3536" y2="27.6464" stroke="#36D6E3" />
                        <line x1="7.38717" y1="27.6464" x2="27.3872" y2="7.64645" stroke="#36D6E3" />
                    </svg>

                    :
                    type === "info" ?
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="7.35355" y1="7.64645" x2="27.3536" y2="27.6464" stroke="#EBB237" />
                            <line x1="7.38717" y1="27.6464" x2="27.3872" y2="7.64645" stroke="#EBB237" />
                        </svg>

                        :
                        type === "error" ?
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="7.35355" y1="7.64645" x2="27.3536" y2="27.6464" stroke="#EF5A1A" />
                                <line x1="7.38717" y1="27.6464" x2="27.3872" y2="7.64645" stroke="#EF5A1A" />
                            </svg>

                            :
                            ''
                }

            </button>
        </div>
    );
}

export default function ToastList() {
    const toasts = useSelector(state => state.toasts);

    return (
        <div className="fixed top-36 right-4 space-y-2">
            {toasts.map(toast => <Toast key={toast.id} {...toast} />)}
        </div>
    );
}
