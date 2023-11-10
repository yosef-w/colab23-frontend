import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addMeeting} from '../../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function MeetingItem({ meeting }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const user = useSelector((state) => state.user)
  const meetings = useSelector((state) => state.meetings.meetings);
  const dispatch = useDispatch()

  // useEffect(()=>{}, [meetings])

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const deleteMeeting = async () => {

    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/deletemeeting/${meeting.id}`
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    const res = await fetch(url, options)
    const data = await res.json()
    if (data.status == 'ok') {
      console.log(data.message)
      //Updates the meeting state in order to re-render with updated
      dispatch(addMeeting(data.meetings))
    }
  }

  return (
    <div className={`bg-white p-4 rounded-lg shadow-md my-2 ${isChecked ? 'line-through' : ''}`}>
      <div className="flex items-center">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Meeting">
            <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M6.00001 8.75002C6.00001 8.75002 6.34001 8.70419 6.83334 8.57252C8.13417 8.22544 10.5 7.28336 10.5 5.01753C10.5 4.68692 10.4349 4.35956 10.3084 4.05412C10.1819 3.74868 9.99642 3.47116 9.76265 3.23738C9.52888 3.00361 9.25135 2.81817 8.94591 2.69166C8.64048 2.56514 8.31311 2.50003 7.98251 2.50003H5.51751C5.18421 2.49574 4.85337 2.55768 4.5442 2.68226C4.23503 2.80684 3.95368 2.99158 3.71647 3.22576C3.47926 3.45994 3.29091 3.73889 3.16236 4.04644C3.03382 4.35398 2.96762 4.68399 2.96762 5.01732C2.96762 5.35065 3.03382 5.68065 3.16236 5.9882C3.29091 6.29574 3.47926 6.57469 3.71647 6.80887C3.95368 7.04305 4.23503 7.22779 4.5442 7.35237C4.85337 7.47695 5.18421 7.5389 5.51751 7.53461H6.00001V8.75002ZM6.83334 6.70127H5.51751C5.29414 6.70479 5.0723 6.66383 4.86492 6.58078C4.65753 6.49773 4.46874 6.37425 4.30954 6.21753C4.15033 6.06081 4.0239 5.87399 3.9376 5.66793C3.8513 5.46188 3.80685 5.24071 3.80685 5.01732C3.80685 4.79392 3.8513 4.57276 3.9376 4.3667C4.0239 4.16065 4.15033 3.97382 4.30954 3.8171C4.46874 3.66038 4.65753 3.5369 4.86492 3.45385C5.0723 3.37081 5.29414 3.32984 5.51751 3.33336H7.98251C8.20368 3.33336 8.42268 3.37692 8.62701 3.46156C8.83134 3.5462 9.017 3.67025 9.17339 3.82664C9.32978 3.98303 9.45384 4.16869 9.53848 4.37302C9.62311 4.57736 9.66667 4.79636 9.66667 5.01753C9.66667 6.09378 8.91334 6.81044 7.88792 7.30502C7.54758 7.46673 7.19495 7.60118 6.83334 7.70711V6.70127ZM6.54167 13.3334C7.46251 13.3334 8.20834 12.5875 8.20834 11.6667C8.20834 10.7459 7.46251 10 6.54167 10C5.62084 10 4.87501 10.7459 4.87501 11.6667C4.87501 12.5875 5.62084 13.3334 6.54167 13.3334ZM7.37501 11.6667C7.37501 11.8877 7.28721 12.0997 7.13093 12.2559C6.97465 12.4122 6.76269 12.5 6.54167 12.5C6.32066 12.5 6.1087 12.4122 5.95242 12.2559C5.79614 12.0997 5.70834 11.8877 5.70834 11.6667C5.70834 11.4457 5.79614 11.2337 5.95242 11.0774C6.1087 10.9212 6.32066 10.8334 6.54167 10.8334C6.76269 10.8334 6.97465 10.9212 7.13093 11.0774C7.28721 11.2337 7.37501 11.4457 7.37501 11.6667ZM3.00001 15.9446C3.00001 14.7621 5.35959 14.1667 6.54167 14.1667C7.72376 14.1667 10.0833 14.7625 10.0833 15.9446V17.5H3.00001V15.9446ZM3.83334 16.6667V15.9446C3.83334 15.9404 3.83334 15.9321 3.84417 15.9113C3.85751 15.8854 3.88792 15.84 3.95376 15.7792C4.09084 15.6521 4.32042 15.5134 4.63834 15.3854C5.27584 15.1292 6.05501 15 6.54167 15C7.02792 15 7.80792 15.1292 8.44501 15.3854C8.76251 15.5134 8.99251 15.6521 9.12959 15.7792C9.19542 15.84 9.22584 15.8854 9.23917 15.9109C9.25001 15.9317 9.25001 15.9409 9.25001 15.9442V16.6667H3.83334ZM16.125 11.6667C16.125 12.5875 15.3792 13.3334 14.4583 13.3334C13.5375 13.3334 12.7917 12.5875 12.7917 11.6667C12.7917 10.7459 13.5375 10 14.4583 10C15.3792 10 16.125 10.7459 16.125 11.6667ZM14.4583 12.5C14.6794 12.5 14.8913 12.4122 15.0476 12.2559C15.2039 12.0997 15.2917 11.8877 15.2917 11.6667C15.2917 11.4457 15.2039 11.2337 15.0476 11.0774C14.8913 10.9212 14.6794 10.8334 14.4583 10.8334C14.2373 10.8334 14.0254 10.9212 13.8691 11.0774C13.7128 11.2337 13.625 11.4457 13.625 11.6667C13.625 11.8877 13.7128 12.0997 13.8691 12.2559C14.0254 12.4122 14.2373 12.5 14.4583 12.5ZM10.9167 15.9446C10.9167 14.7621 13.2763 14.1667 14.4583 14.1667C15.6404 14.1667 18 14.7625 18 15.9446V17.5H10.9167V15.9446ZM11.75 16.6667V15.9446C11.75 15.9404 11.75 15.9321 11.7608 15.9113C11.7742 15.8854 11.8046 15.84 11.87 15.7792C12.0075 15.6521 12.2375 15.5134 12.555 15.3854C13.1925 15.1292 13.9717 15 14.4583 15C14.9446 15 15.7246 15.1292 16.3617 15.3854C16.6792 15.5134 16.9092 15.6521 17.0467 15.7792C17.1121 15.84 17.1425 15.8854 17.1558 15.9109C17.1667 15.9317 17.1667 15.9409 17.1667 15.9442V16.6667H11.75ZM14.5 8.96086C14.9875 9.11419 15.3333 9.16669 15.3333 9.16669V7.95127H15.4825C15.8158 7.95556 16.1466 7.89362 16.4558 7.76904C16.765 7.64446 17.0463 7.45972 17.2835 7.22554C17.5208 6.99136 17.7091 6.71241 17.8377 6.40486C17.9662 6.09732 18.0324 5.76731 18.0324 5.43398C18.0324 5.10066 17.9662 4.77065 17.8377 4.4631C17.7091 4.15556 17.5208 3.87661 17.2835 3.64243C17.0463 3.40825 16.765 3.22351 16.4558 3.09893C16.1466 2.97435 15.8158 2.9124 15.4825 2.91669H13.8508C13.1832 2.91669 12.5428 3.18193 12.0707 3.65405C11.5986 4.12617 11.3333 4.76651 11.3333 5.43419C11.3333 7.64086 13.3279 8.59253 14.5 8.96086ZM15.4825 7.11794H14.5V8.08169C14.2354 7.9872 13.9783 7.87299 13.7308 7.74003C12.8625 7.26877 12.1667 6.56169 12.1667 5.43378C12.1668 4.98718 12.3443 4.55891 12.6601 4.24316C12.9759 3.92741 13.4042 3.75003 13.8508 3.75003H15.4825C15.7059 3.74651 15.9277 3.78747 16.1351 3.87052C16.3425 3.95357 16.5313 4.07705 16.6905 4.23377C16.8497 4.39049 16.9761 4.57731 17.0624 4.78337C17.1487 4.98942 17.1932 5.21059 17.1932 5.43398C17.1932 5.65738 17.1487 5.87855 17.0624 6.0846C16.9761 6.29065 16.8497 6.47748 16.6905 6.6342C16.5313 6.79092 16.3425 6.9144 16.1351 6.99745C15.9277 7.08049 15.7059 7.12146 15.4825 7.11794Z" fill="black" />
          </g>
        </svg>

        <h3 className={`font-semibold ml-1 text-lg text-left ${isChecked ? 'line-through' : ''}`}>
          {meeting.title}
        </h3>
      </div>
      <div className="flex items-center mt-2">
        <div className="relative" ref={menuRef}>
          <div className="kebab-menu cursor-pointer hover:shadow-md" onClick={toggleMenu}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Kebab-Menu</title>
              <g id="Kebab-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="Container" x="0" y="0" width="24" height="24"></rect>
                <path
                  d="M12,6 C12.5522847,6 13,5.55228475 13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 C11,5.55228475 11.4477153,6 12,6 Z"
                  id="shape-03"
                  stroke="#030819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0,0"
                ></path>
                <path
                  d="M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z"
                  id="shape-03"
                  stroke="#030819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0,0"
                ></path>
                <path
                  d="M12,20 C12.5522847,20 13,19.5522847 13,19 C13,18.4477153 12.5522847,18 12,18 C11.4477153,18 11,18.4477153 11,19 C11,19.5522847 11.4477153,20 12,20 Z"
                  id="shape-03"
                  stroke="#030819"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="0,0"
                ></path>
              </g>
            </svg>
          </div>
          {isMenuOpen && (
            <div className="menu-dropdown absolute whitespace-nowrap z-10 mt-2 right-0 w-fit bg-white border border-stone-600 rounded-lg shadow-lg">
              <ul className="p-2">
                <li className="cursor-pointer hover:bg-gray-100 p-2" onClick={toggleMenu}>
                  <button onClick={() => deleteMeeting()}>Delete</button>
                </li>
              </ul>
            </div>
          )}
        </div>
        <p className={`ml-2 text-left text-gray-500 ${isChecked ? 'line-through' : ''}`}>
          Date/Time: {meeting.date}
        </p>
      </div>
      <p className={`text-left ml-7 ${isChecked ? 'line-through' : ''}`}>
        Notes: {meeting.notes}
      </p>
    </div>
  );
}
