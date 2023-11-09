import React from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();
  const navigateToSignIn = () => {
    navigate('/signin')
  }

   // Define the paths where you want to hide the Sign In / Sign Up button
   const pathsToHideButton = 
      ['/signin',
      '/personal-details',
      '/professional-background',
      '/skills-and-tools',
      '/about-you',
      '/your-availability',
      '/review-details',
      '/welcome-done'];

   // Check if the current location matches any of the paths to hide the button
   const shouldHideButton = pathsToHideButton.includes(location.pathname);

  return (
    <nav className="flex justify-around items-center text-gray-800 py-2 h-10" id='nav-wrapper'>

    {!shouldHideButton && (
      <div className="link-wrapper w-1/5 ml-44">

      </div>
      )}

      <div className="mx-auto text-center text-3xl">
        <h1>
          <NavLink to="/">
            <svg width="144" height="71" viewBox="0 0 144 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9661 56.8052V30.6692H8.03414V27.6452H21.8221V30.6692H17.0341V56.8052H12.9661ZM29.6474 57.0932C28.0154 57.0932 26.7554 56.7812 25.8674 56.1572C24.9794 55.5092 24.3554 54.5732 23.9954 53.3492C23.6594 52.1012 23.4914 50.5772 23.4914 48.7772V44.0252C23.4914 42.1772 23.6714 40.6412 24.0314 39.4172C24.3914 38.1932 25.0154 37.2692 25.9034 36.6452C26.8154 36.0212 28.0634 35.7092 29.6474 35.7092C31.3994 35.7092 32.6834 36.0692 33.4994 36.7892C34.3394 37.5092 34.8914 38.5532 35.1554 39.9212C35.4194 41.2652 35.5514 42.8852 35.5514 44.7812V46.4732H27.3434V50.6492C27.3434 51.4892 27.4154 52.1732 27.5594 52.7012C27.7274 53.2292 27.9794 53.6252 28.3154 53.8892C28.6754 54.1292 29.1314 54.2492 29.6834 54.2492C30.2594 54.2492 30.6914 54.1172 30.9794 53.8532C31.2914 53.5652 31.4954 53.1692 31.5914 52.6652C31.7114 52.1372 31.7714 51.5252 31.7714 50.8292V49.5692H35.5154V50.3612C35.5154 52.4492 35.0714 54.0932 34.1834 55.2932C33.2954 56.4932 31.7834 57.0932 29.6474 57.0932ZM27.3434 44.3852H31.7714V42.5132C31.7714 41.6492 31.7234 40.9292 31.6274 40.3532C31.5314 39.7532 31.3274 39.3092 31.0154 39.0212C30.7274 38.7092 30.2594 38.5532 29.6114 38.5532C28.9874 38.5532 28.5074 38.6972 28.1714 38.9852C27.8594 39.2732 27.6434 39.7652 27.5234 40.4612C27.4034 41.1332 27.3434 42.0692 27.3434 43.2692V44.3852ZM42.7837 57.0932C41.9677 57.0932 41.2477 56.8652 40.6237 56.4092C39.9997 55.9292 39.5077 55.3292 39.1477 54.6092C38.7877 53.8652 38.6077 53.0852 38.6077 52.2692C38.6077 50.9732 38.8237 49.8812 39.2557 48.9932C39.6877 48.1052 40.2757 47.3612 41.0197 46.7612C41.7877 46.1372 42.6637 45.5972 43.6477 45.1412C44.6557 44.6852 45.7117 44.2412 46.8157 43.8092V42.3332C46.8157 41.4932 46.7677 40.7972 46.6717 40.2452C46.5757 39.6932 46.3717 39.2852 46.0597 39.0212C45.7717 38.7332 45.3277 38.5892 44.7277 38.5892C44.1997 38.5892 43.7677 38.7092 43.4317 38.9492C43.1197 39.1892 42.8917 39.5372 42.7477 39.9932C42.6037 40.4252 42.5317 40.9412 42.5317 41.5412V42.5852L38.7157 42.4412C38.7637 40.1372 39.2917 38.4452 40.2997 37.3652C41.3077 36.2612 42.8677 35.7092 44.9797 35.7092C47.0437 35.7092 48.5077 36.2732 49.3717 37.4012C50.2357 38.5292 50.6677 40.1612 50.6677 42.2972V51.8012C50.6677 52.4492 50.6797 53.0732 50.7037 53.6732C50.7517 54.2732 50.7997 54.8372 50.8477 55.3652C50.9197 55.8692 50.9797 56.3492 51.0277 56.8052H47.4997C47.4277 56.4212 47.3317 55.9412 47.2117 55.3652C47.1157 54.7652 47.0437 54.2252 46.9957 53.7452C46.7557 54.5612 46.2877 55.3292 45.5917 56.0492C44.9197 56.7452 43.9837 57.0932 42.7837 57.0932ZM44.2957 53.7812C44.6797 53.7812 45.0397 53.6732 45.3757 53.4572C45.7117 53.2412 46.0117 53.0012 46.2757 52.7372C46.5397 52.4492 46.7197 52.2212 46.8157 52.0532V46.1492C46.2157 46.4852 45.6517 46.8212 45.1237 47.1572C44.5957 47.4932 44.1277 47.8532 43.7197 48.2372C43.3357 48.5972 43.0237 49.0172 42.7837 49.4972C42.5677 49.9532 42.4597 50.4812 42.4597 51.0812C42.4597 51.9212 42.6157 52.5812 42.9277 53.0612C43.2397 53.5412 43.6957 53.7812 44.2957 53.7812ZM54.3678 56.8052V35.9972H57.9318V37.9772C58.6278 37.1852 59.3958 36.5972 60.2358 36.2132C61.0758 35.8292 61.9398 35.6372 62.8278 35.6372C63.5958 35.6372 64.2798 35.8292 64.8798 36.2132C65.5038 36.5972 65.9478 37.2812 66.2118 38.2652C66.9558 37.3532 67.7598 36.6932 68.6238 36.2852C69.5118 35.8532 70.4358 35.6372 71.3958 35.6372C72.0678 35.6372 72.6798 35.8052 73.2318 36.1412C73.7838 36.4532 74.2278 36.9692 74.5638 37.6892C74.8998 38.3852 75.0678 39.3092 75.0678 40.4612V56.8052H71.5398V40.7132C71.5398 39.7052 71.3718 39.0332 71.0358 38.6972C70.7238 38.3372 70.2918 38.1572 69.7398 38.1572C69.2118 38.1572 68.6598 38.3132 68.0838 38.6252C67.5078 38.9132 66.9798 39.3212 66.4998 39.8492C66.4998 39.9452 66.4998 40.0412 66.4998 40.1372C66.4998 40.2332 66.4998 40.3412 66.4998 40.4612V56.8052H62.9718V40.7132C62.9718 39.7052 62.8038 39.0332 62.4678 38.6972C62.1558 38.3372 61.7238 38.1572 61.1718 38.1572C60.6438 38.1572 60.0918 38.3132 59.5158 38.6252C58.9638 38.9132 58.4358 39.3212 57.9318 39.8492V56.8052H54.3678ZM86.6846 57.1292C84.5726 57.1292 82.9526 56.7092 81.8246 55.8692C80.6966 55.0292 79.9286 53.8532 79.5206 52.3412C79.1126 50.8052 78.9086 49.0172 78.9086 46.9772V27.6452H82.7966V47.1572C82.7966 48.4052 82.8806 49.5452 83.0486 50.5772C83.2166 51.6092 83.5766 52.4252 84.1286 53.0252C84.7046 53.6252 85.5566 53.9252 86.6846 53.9252C87.8366 53.9252 88.6886 53.6252 89.2406 53.0252C89.7926 52.4252 90.1526 51.6092 90.3206 50.5772C90.4886 49.5452 90.5726 48.4052 90.5726 47.1572V27.6452H94.4246V46.9772C94.4246 49.0172 94.2206 50.8052 93.8126 52.3412C93.4046 53.8532 92.6366 55.0292 91.5086 55.8692C90.4046 56.7092 88.7966 57.1292 86.6846 57.1292ZM98.3835 63.6452V35.9972H102.235V37.6532C102.691 37.1252 103.243 36.6692 103.891 36.2852C104.539 35.9012 105.307 35.7092 106.195 35.7092C107.275 35.7092 108.127 35.9972 108.751 36.5732C109.399 37.1252 109.879 37.8332 110.191 38.6972C110.503 39.5372 110.707 40.4012 110.803 41.2892C110.899 42.1532 110.947 42.8972 110.947 43.5212V48.5612C110.947 50.0252 110.803 51.4172 110.515 52.7372C110.227 54.0332 109.699 55.0892 108.931 55.9052C108.187 56.6972 107.131 57.0932 105.763 57.0932C105.019 57.0932 104.359 56.9132 103.783 56.5532C103.207 56.1692 102.691 55.7372 102.235 55.2572V63.6452H98.3835ZM105.007 54.0692C105.679 54.0692 106.159 53.8292 106.447 53.3492C106.735 52.8452 106.915 52.1732 106.987 51.3332C107.059 50.4932 107.095 49.5692 107.095 48.5612V43.5212C107.095 42.6572 107.047 41.8652 106.951 41.1452C106.855 40.4012 106.651 39.8132 106.339 39.3812C106.027 38.9492 105.535 38.7332 104.863 38.7332C104.359 38.7332 103.879 38.8412 103.423 39.0572C102.967 39.2732 102.571 39.5252 102.235 39.8132V53.1332C102.595 53.3972 103.003 53.6252 103.459 53.8172C103.915 53.9852 104.431 54.0692 105.007 54.0692Z" fill="white" />
              <path d="M12.9661 56.8052V30.6692H8.03414V27.6452H21.8221V30.6692H17.0341V56.8052H12.9661ZM29.6474 57.0932C28.0154 57.0932 26.7554 56.7812 25.8674 56.1572C24.9794 55.5092 24.3554 54.5732 23.9954 53.3492C23.6594 52.1012 23.4914 50.5772 23.4914 48.7772V44.0252C23.4914 42.1772 23.6714 40.6412 24.0314 39.4172C24.3914 38.1932 25.0154 37.2692 25.9034 36.6452C26.8154 36.0212 28.0634 35.7092 29.6474 35.7092C31.3994 35.7092 32.6834 36.0692 33.4994 36.7892C34.3394 37.5092 34.8914 38.5532 35.1554 39.9212C35.4194 41.2652 35.5514 42.8852 35.5514 44.7812V46.4732H27.3434V50.6492C27.3434 51.4892 27.4154 52.1732 27.5594 52.7012C27.7274 53.2292 27.9794 53.6252 28.3154 53.8892C28.6754 54.1292 29.1314 54.2492 29.6834 54.2492C30.2594 54.2492 30.6914 54.1172 30.9794 53.8532C31.2914 53.5652 31.4954 53.1692 31.5914 52.6652C31.7114 52.1372 31.7714 51.5252 31.7714 50.8292V49.5692H35.5154V50.3612C35.5154 52.4492 35.0714 54.0932 34.1834 55.2932C33.2954 56.4932 31.7834 57.0932 29.6474 57.0932ZM27.3434 44.3852H31.7714V42.5132C31.7714 41.6492 31.7234 40.9292 31.6274 40.3532C31.5314 39.7532 31.3274 39.3092 31.0154 39.0212C30.7274 38.7092 30.2594 38.5532 29.6114 38.5532C28.9874 38.5532 28.5074 38.6972 28.1714 38.9852C27.8594 39.2732 27.6434 39.7652 27.5234 40.4612C27.4034 41.1332 27.3434 42.0692 27.3434 43.2692V44.3852ZM42.7837 57.0932C41.9677 57.0932 41.2477 56.8652 40.6237 56.4092C39.9997 55.9292 39.5077 55.3292 39.1477 54.6092C38.7877 53.8652 38.6077 53.0852 38.6077 52.2692C38.6077 50.9732 38.8237 49.8812 39.2557 48.9932C39.6877 48.1052 40.2757 47.3612 41.0197 46.7612C41.7877 46.1372 42.6637 45.5972 43.6477 45.1412C44.6557 44.6852 45.7117 44.2412 46.8157 43.8092V42.3332C46.8157 41.4932 46.7677 40.7972 46.6717 40.2452C46.5757 39.6932 46.3717 39.2852 46.0597 39.0212C45.7717 38.7332 45.3277 38.5892 44.7277 38.5892C44.1997 38.5892 43.7677 38.7092 43.4317 38.9492C43.1197 39.1892 42.8917 39.5372 42.7477 39.9932C42.6037 40.4252 42.5317 40.9412 42.5317 41.5412V42.5852L38.7157 42.4412C38.7637 40.1372 39.2917 38.4452 40.2997 37.3652C41.3077 36.2612 42.8677 35.7092 44.9797 35.7092C47.0437 35.7092 48.5077 36.2732 49.3717 37.4012C50.2357 38.5292 50.6677 40.1612 50.6677 42.2972V51.8012C50.6677 52.4492 50.6797 53.0732 50.7037 53.6732C50.7517 54.2732 50.7997 54.8372 50.8477 55.3652C50.9197 55.8692 50.9797 56.3492 51.0277 56.8052H47.4997C47.4277 56.4212 47.3317 55.9412 47.2117 55.3652C47.1157 54.7652 47.0437 54.2252 46.9957 53.7452C46.7557 54.5612 46.2877 55.3292 45.5917 56.0492C44.9197 56.7452 43.9837 57.0932 42.7837 57.0932ZM44.2957 53.7812C44.6797 53.7812 45.0397 53.6732 45.3757 53.4572C45.7117 53.2412 46.0117 53.0012 46.2757 52.7372C46.5397 52.4492 46.7197 52.2212 46.8157 52.0532V46.1492C46.2157 46.4852 45.6517 46.8212 45.1237 47.1572C44.5957 47.4932 44.1277 47.8532 43.7197 48.2372C43.3357 48.5972 43.0237 49.0172 42.7837 49.4972C42.5677 49.9532 42.4597 50.4812 42.4597 51.0812C42.4597 51.9212 42.6157 52.5812 42.9277 53.0612C43.2397 53.5412 43.6957 53.7812 44.2957 53.7812ZM54.3678 56.8052V35.9972H57.9318V37.9772C58.6278 37.1852 59.3958 36.5972 60.2358 36.2132C61.0758 35.8292 61.9398 35.6372 62.8278 35.6372C63.5958 35.6372 64.2798 35.8292 64.8798 36.2132C65.5038 36.5972 65.9478 37.2812 66.2118 38.2652C66.9558 37.3532 67.7598 36.6932 68.6238 36.2852C69.5118 35.8532 70.4358 35.6372 71.3958 35.6372C72.0678 35.6372 72.6798 35.8052 73.2318 36.1412C73.7838 36.4532 74.2278 36.9692 74.5638 37.6892C74.8998 38.3852 75.0678 39.3092 75.0678 40.4612V56.8052H71.5398V40.7132C71.5398 39.7052 71.3718 39.0332 71.0358 38.6972C70.7238 38.3372 70.2918 38.1572 69.7398 38.1572C69.2118 38.1572 68.6598 38.3132 68.0838 38.6252C67.5078 38.9132 66.9798 39.3212 66.4998 39.8492C66.4998 39.9452 66.4998 40.0412 66.4998 40.1372C66.4998 40.2332 66.4998 40.3412 66.4998 40.4612V56.8052H62.9718V40.7132C62.9718 39.7052 62.8038 39.0332 62.4678 38.6972C62.1558 38.3372 61.7238 38.1572 61.1718 38.1572C60.6438 38.1572 60.0918 38.3132 59.5158 38.6252C58.9638 38.9132 58.4358 39.3212 57.9318 39.8492V56.8052H54.3678ZM86.6846 57.1292C84.5726 57.1292 82.9526 56.7092 81.8246 55.8692C80.6966 55.0292 79.9286 53.8532 79.5206 52.3412C79.1126 50.8052 78.9086 49.0172 78.9086 46.9772V27.6452H82.7966V47.1572C82.7966 48.4052 82.8806 49.5452 83.0486 50.5772C83.2166 51.6092 83.5766 52.4252 84.1286 53.0252C84.7046 53.6252 85.5566 53.9252 86.6846 53.9252C87.8366 53.9252 88.6886 53.6252 89.2406 53.0252C89.7926 52.4252 90.1526 51.6092 90.3206 50.5772C90.4886 49.5452 90.5726 48.4052 90.5726 47.1572V27.6452H94.4246V46.9772C94.4246 49.0172 94.2206 50.8052 93.8126 52.3412C93.4046 53.8532 92.6366 55.0292 91.5086 55.8692C90.4046 56.7092 88.7966 57.1292 86.6846 57.1292ZM98.3835 63.6452V35.9972H102.235V37.6532C102.691 37.1252 103.243 36.6692 103.891 36.2852C104.539 35.9012 105.307 35.7092 106.195 35.7092C107.275 35.7092 108.127 35.9972 108.751 36.5732C109.399 37.1252 109.879 37.8332 110.191 38.6972C110.503 39.5372 110.707 40.4012 110.803 41.2892C110.899 42.1532 110.947 42.8972 110.947 43.5212V48.5612C110.947 50.0252 110.803 51.4172 110.515 52.7372C110.227 54.0332 109.699 55.0892 108.931 55.9052C108.187 56.6972 107.131 57.0932 105.763 57.0932C105.019 57.0932 104.359 56.9132 103.783 56.5532C103.207 56.1692 102.691 55.7372 102.235 55.2572V63.6452H98.3835ZM105.007 54.0692C105.679 54.0692 106.159 53.8292 106.447 53.3492C106.735 52.8452 106.915 52.1732 106.987 51.3332C107.059 50.4932 107.095 49.5692 107.095 48.5612V43.5212C107.095 42.6572 107.047 41.8652 106.951 41.1452C106.855 40.4012 106.651 39.8132 106.339 39.3812C106.027 38.9492 105.535 38.7332 104.863 38.7332C104.359 38.7332 103.879 38.8412 103.423 39.0572C102.967 39.2732 102.571 39.5252 102.235 39.8132V53.1332C102.595 53.3972 103.003 53.6252 103.459 53.8172C103.915 53.9852 104.431 54.0692 105.007 54.0692Z" fill="white" />
              <mask id="mask0_519_15798" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="91" y="0" width="53" height="53">
                <path d="M106.995 0L143.742 15.8002L127.942 52.5474L91.1949 36.7471L106.995 0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_519_15798)">
                <path d="M103.458 22.6315C100.014 24.9914 98.1196 27.2411 98.6933 28.6833C99.2047 29.9663 101.574 30.3681 104.99 29.9793M125.131 13.9918C129.254 13.3354 132.177 13.6649 132.753 15.1062C133.527 17.0446 129.832 20.4432 123.921 23.6053M104.292 24.2364C103.744 21.5549 104.157 18.7663 105.457 16.358C106.757 13.9497 108.862 12.0749 111.405 11.0615C113.947 10.0481 116.764 9.9604 119.365 10.8138C121.965 11.6672 124.183 13.4074 125.63 15.7303" stroke="#ED4068" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <path d="M115.49 39.6561L112.683 33.6073M115.49 39.6561L116.068 44.8625C117.578 44.1854 123.2 40.5183 121.505 36.8642M115.49 39.6561L121.505 36.8642M112.683 33.6073L118.762 30.7873M112.683 33.6073L109.052 29.7432C110.585 29.0567 117.091 27.1845 118.762 30.7873M121.505 36.8642L121.537 36.8494M121.505 36.8642L126.854 34.384C129.137 33.3242 131.074 31.6397 132.44 29.5253L133.741 27.5134L131.365 27.2075C128.868 26.8851 126.331 27.2761 124.048 28.3352L118.762 30.7873" stroke="#36D6E3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              <g clip-path="url(#clip0_519_15798)">
                <path d="M4.16663 54V60.6667M11.0001 62V66.3333M1.00012 57.5H7.33346M8.83346 64.1667H13.1668" stroke="#EBB237" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_519_15798">
                  <rect width="15" height="15" fill="white" transform="translate(0 53)" />
                </clipPath>
              </defs>
            </svg>

          </NavLink>
        </h1>
      </div>

      {!shouldHideButton && (
        <div className=" ml-auto mr-20" id="auth-link">
          <button onClick={navigateToSignIn} className="signup-button" style={{ backgroundColor: '#ed4168', width: '200px', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.8)' }}>
            Sign In / Sign Up
          </button>
        </div>
        )}

    </nav>
  );
};