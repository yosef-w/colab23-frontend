export default function ProjectRole({ showProjectRoleIcons, selectedRole, toggleProjectRoleIcons, handleRoleClick }) {

  
    return (
        <li>
        <button type="button" className="flex items-center w-2/3 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 ml-10" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleProjectRoleIcons}>
          <span className="flex-1 text-left whitespace-nowrap">Project Role</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
          </svg>
        </button>
        {showProjectRoleIcons && (
          <div className="flex space-x-2 mt-4 ml-12">
            <button onClick={() => handleRoleClick("Project Manager")}>
              <svg width="70" height="70" viewBox="0 0 102 104" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="51" cy="30" r="30" fill="#ED4068"/>
              <path d="M37.6666 43.3333C36.7499 43.3333 35.9649 43.0066 35.3116 42.3533C34.6583 41.7 34.3321 40.9155 34.3333 40V20C34.3333 19.0833 34.6599 18.2983 35.3133 17.645C35.9666 16.9916 36.751 16.6655 37.6666 16.6666H47.6666L50.9999 20H64.3333C65.2499 20 66.0349 20.3266 66.6883 20.98C67.3416 21.6333 67.6677 22.4177 67.6666 23.3333V28.8333C67.1388 28.6111 66.5899 28.465 66.0199 28.395C65.4499 28.325 64.8877 28.3322 64.3333 28.4166V23.3333H49.6249L46.2916 20H37.6666V40H51.1666L50.9999 40.1666V43.3333H37.6666ZM54.3333 46.6666V41.5416L63.5416 32.375C63.7916 32.125 64.0694 31.9444 64.3749 31.8333C64.6805 31.7222 64.986 31.6666 65.2916 31.6666C65.6249 31.6666 65.9444 31.7294 66.2499 31.855C66.5555 31.9805 66.8333 32.1677 67.0833 32.4166L68.6249 33.9583C68.8471 34.2083 69.021 34.4861 69.1466 34.7916C69.2721 35.0972 69.3344 35.4027 69.3333 35.7083C69.3333 36.0139 69.2777 36.3266 69.1666 36.6466C69.0555 36.9666 68.8749 37.2511 68.6249 37.5L59.4583 46.6666H54.3333ZM56.8333 44.1666H58.4166L63.4583 39.0833L62.7083 38.2916L61.9166 37.5416L56.8333 42.5833V44.1666ZM62.7083 38.2916L61.9166 37.5416L63.4583 39.0833L62.7083 38.2916Z" fill="#F8E1E6"/>
              <path d="M27.6817 75.824V74.048H30.2897C30.631 74.048 30.9404 73.9787 31.2177 73.84C31.495 73.7013 31.7137 73.504 31.8737 73.248C32.0337 72.9813 32.1137 72.6613 32.1137 72.288C32.1137 71.9253 32.0337 71.6107 31.8737 71.344C31.7137 71.0773 31.495 70.8747 31.2177 70.736C30.9404 70.5973 30.631 70.528 30.2897 70.528H27.6817V68.752H30.5137C31.2284 68.752 31.8684 68.896 32.4337 69.184C33.0097 69.472 33.463 69.8827 33.7937 70.416C34.1244 70.9387 34.2897 71.5627 34.2897 72.288C34.2897 73.0133 34.1244 73.6427 33.7937 74.176C33.463 74.6987 33.0097 75.104 32.4337 75.392C31.8684 75.68 31.2284 75.824 30.5137 75.824H27.6817ZM26.0817 80V68.752H28.2577V80H26.0817ZM35.7171 80V72.272H37.8131V80H35.7171ZM37.8131 75.728L36.9971 75.184C37.0931 74.2347 37.3704 73.488 37.8291 72.944C38.2877 72.3893 38.9491 72.112 39.8131 72.112C40.1864 72.112 40.5224 72.176 40.8211 72.304C41.1197 72.4213 41.3917 72.6187 41.6371 72.896L40.3251 74.4C40.2077 74.272 40.0637 74.176 39.8931 74.112C39.7331 74.048 39.5464 74.016 39.3331 74.016C38.8851 74.016 38.5171 74.16 38.2291 74.448C37.9517 74.7253 37.8131 75.152 37.8131 75.728ZM45.7866 80.16C45.0079 80.16 44.3039 79.984 43.6746 79.632C43.0559 79.2693 42.5599 78.784 42.1866 78.176C41.8239 77.5573 41.6426 76.8693 41.6426 76.112C41.6426 75.3547 41.8239 74.6773 42.1866 74.08C42.5492 73.472 43.0452 72.992 43.6746 72.64C44.3039 72.2773 45.0026 72.096 45.7706 72.096C46.5599 72.096 47.2639 72.2773 47.8826 72.64C48.5119 72.992 49.0079 73.472 49.3706 74.08C49.7332 74.6773 49.9146 75.3547 49.9146 76.112C49.9146 76.8693 49.7332 77.5573 49.3706 78.176C49.0079 78.784 48.5119 79.2693 47.8826 79.632C47.2639 79.984 46.5652 80.16 45.7866 80.16ZM45.7706 78.208C46.1652 78.208 46.5119 78.1227 46.8106 77.952C47.1199 77.7707 47.3546 77.5253 47.5146 77.216C47.6852 76.896 47.7706 76.5333 47.7706 76.128C47.7706 75.7227 47.6852 75.3653 47.5146 75.056C47.3439 74.7467 47.1092 74.5067 46.8106 74.336C46.5119 74.1547 46.1652 74.064 45.7706 74.064C45.3866 74.064 45.0452 74.1547 44.7466 74.336C44.4479 74.5067 44.2132 74.7467 44.0426 75.056C43.8719 75.3653 43.7866 75.7227 43.7866 76.128C43.7866 76.5333 43.8719 76.896 44.0426 77.216C44.2132 77.5253 44.4479 77.7707 44.7466 77.952C45.0452 78.1227 45.3866 78.208 45.7706 78.208ZM50.6399 83.424C50.0853 83.424 49.6266 83.3333 49.2639 83.152C48.8906 82.9707 48.5546 82.7147 48.2559 82.384L49.5839 81.056C49.7119 81.216 49.8506 81.328 49.9999 81.392C50.1386 81.4667 50.3039 81.504 50.4959 81.504C50.7626 81.504 50.9866 81.424 51.1679 81.264C51.3493 81.104 51.4399 80.8693 51.4399 80.56V72.272H53.5359V80.528C53.5359 81.136 53.4026 81.6533 53.1359 82.08C52.8799 82.5173 52.5333 82.848 52.0959 83.072C51.6693 83.3067 51.1839 83.424 50.6399 83.424ZM52.5119 71.024C52.1706 71.024 51.8879 70.912 51.6639 70.688C51.4399 70.4533 51.3279 70.1653 51.3279 69.824C51.3279 69.4933 51.4399 69.2107 51.6639 68.976C51.8879 68.7413 52.1706 68.624 52.5119 68.624C52.8639 68.624 53.1466 68.7413 53.3599 68.976C53.5839 69.2107 53.6959 69.4933 53.6959 69.824C53.6959 70.1653 53.5839 70.4533 53.3599 70.688C53.1466 70.912 52.8639 71.024 52.5119 71.024ZM59.0693 80.16C58.2586 80.16 57.5386 79.9893 56.9093 79.648C56.28 79.296 55.7786 78.816 55.4053 78.208C55.0426 77.6 54.8613 76.9067 54.8613 76.128C54.8613 75.36 55.0373 74.6773 55.3893 74.08C55.752 73.472 56.2426 72.992 56.8613 72.64C57.48 72.2773 58.168 72.096 58.9253 72.096C59.672 72.096 60.328 72.2667 60.8933 72.608C61.4693 72.9387 61.9173 73.3973 62.2373 73.984C62.568 74.56 62.7333 75.216 62.7333 75.952C62.7333 76.0907 62.7226 76.2347 62.7013 76.384C62.6906 76.5227 62.664 76.6827 62.6213 76.864L56.1253 76.88V75.312L61.6453 75.296L60.7973 75.952C60.776 75.4933 60.6906 75.1093 60.5413 74.8C60.4026 74.4907 60.1946 74.256 59.9173 74.096C59.6506 73.9253 59.32 73.84 58.9253 73.84C58.5093 73.84 58.1466 73.936 57.8373 74.128C57.528 74.3093 57.288 74.5707 57.1173 74.912C56.9573 75.2427 56.8773 75.6373 56.8773 76.096C56.8773 76.5653 56.9626 76.976 57.1333 77.328C57.3146 77.6693 57.5706 77.936 57.9013 78.128C58.232 78.3093 58.616 78.4 59.0533 78.4C59.448 78.4 59.8053 78.336 60.1253 78.208C60.4453 78.0693 60.7226 77.8667 60.9573 77.6L62.1893 78.832C61.816 79.2693 61.3573 79.6 60.8133 79.824C60.28 80.048 59.6986 80.16 59.0693 80.16ZM67.6776 80.16C66.8882 80.16 66.1789 79.984 65.5496 79.632C64.9202 79.28 64.4242 78.8 64.0616 78.192C63.6989 77.584 63.5176 76.9013 63.5176 76.144C63.5176 75.376 63.6989 74.688 64.0616 74.08C64.4242 73.472 64.9202 72.992 65.5496 72.64C66.1896 72.2773 66.8989 72.096 67.6776 72.096C68.2856 72.096 68.8456 72.208 69.3576 72.432C69.8696 72.656 70.3122 72.976 70.6856 73.392L69.3416 74.752C69.1389 74.528 68.8936 74.3573 68.6056 74.24C68.3282 74.1227 68.0189 74.064 67.6776 74.064C67.2936 74.064 66.9469 74.1547 66.6376 74.336C66.3389 74.5067 66.0989 74.7467 65.9176 75.056C65.7469 75.3547 65.6616 75.712 65.6616 76.128C65.6616 76.5333 65.7469 76.896 65.9176 77.216C66.0989 77.5253 66.3389 77.7707 66.6376 77.952C66.9469 78.1227 67.2936 78.208 67.6776 78.208C68.0296 78.208 68.3442 78.1493 68.6216 78.032C68.9096 77.904 69.1549 77.7227 69.3576 77.488L70.7176 78.848C70.3229 79.2747 69.8696 79.6 69.3576 79.824C68.8456 80.048 68.2856 80.16 67.6776 80.16ZM72.9156 80V69.056H75.0116V80H72.9156ZM71.1076 74.112V72.272H76.8196V74.112H71.1076ZM15.6989 100V88.752H17.2349L21.7949 96.048H20.9149L25.4589 88.752H26.9949V100H24.8349V92.48L25.2509 92.608L22.0829 97.696H20.6109L17.4429 92.608L17.8749 92.48V100H15.6989ZM32.3006 100.16C31.5966 100.16 30.962 99.984 30.3966 99.632C29.8313 99.28 29.3886 98.8 29.0686 98.192C28.7486 97.584 28.5886 96.9013 28.5886 96.144C28.5886 95.376 28.7486 94.688 29.0686 94.08C29.3886 93.472 29.8313 92.992 30.3966 92.64C30.962 92.288 31.5966 92.112 32.3006 92.112C32.8553 92.112 33.3513 92.224 33.7886 92.448C34.226 92.672 34.5726 92.9867 34.8286 93.392C35.0953 93.7867 35.2393 94.2347 35.2606 94.736V97.52C35.2393 98.032 35.0953 98.4853 34.8286 98.88C34.5726 99.2747 34.226 99.5893 33.7886 99.824C33.3513 100.048 32.8553 100.16 32.3006 100.16ZM32.6846 98.224C33.2713 98.224 33.746 98.032 34.1086 97.648C34.4713 97.2533 34.6526 96.7467 34.6526 96.128C34.6526 95.7227 34.5673 95.3653 34.3966 95.056C34.2366 94.736 34.0073 94.4907 33.7086 94.32C33.4206 94.1387 33.0793 94.048 32.6846 94.048C32.3006 94.048 31.9593 94.1387 31.6606 94.32C31.3726 94.4907 31.1433 94.736 30.9726 95.056C30.8126 95.3653 30.7326 95.7227 30.7326 96.128C30.7326 96.544 30.8126 96.912 30.9726 97.232C31.1433 97.5413 31.3726 97.7867 31.6606 97.968C31.9593 98.1387 32.3006 98.224 32.6846 98.224ZM34.5406 100V97.92L34.8766 96.032L34.5406 94.176V92.272H36.6206V100H34.5406ZM43.6749 100V95.568C43.6749 95.1093 43.5309 94.736 43.2429 94.448C42.9549 94.16 42.5815 94.016 42.1229 94.016C41.8242 94.016 41.5575 94.08 41.3229 94.208C41.0882 94.336 40.9015 94.5173 40.7629 94.752C40.6349 94.9867 40.5709 95.2587 40.5709 95.568L39.7549 95.152C39.7549 94.544 39.8829 94.016 40.1389 93.568C40.4055 93.1093 40.7682 92.752 41.2269 92.496C41.6962 92.24 42.2242 92.112 42.8109 92.112C43.3762 92.112 43.8829 92.256 44.3309 92.544C44.7789 92.8213 45.1309 93.1893 45.3869 93.648C45.6429 94.096 45.7709 94.5813 45.7709 95.104V100H43.6749ZM38.4749 100V92.272H40.5709V100H38.4749ZM50.6913 100.16C49.9873 100.16 49.3526 99.984 48.7873 99.632C48.2219 99.28 47.7793 98.8 47.4593 98.192C47.1393 97.584 46.9793 96.9013 46.9793 96.144C46.9793 95.376 47.1393 94.688 47.4593 94.08C47.7793 93.472 48.2219 92.992 48.7873 92.64C49.3526 92.288 49.9873 92.112 50.6913 92.112C51.2459 92.112 51.7419 92.224 52.1793 92.448C52.6166 92.672 52.9633 92.9867 53.2193 93.392C53.4859 93.7867 53.6299 94.2347 53.6513 94.736V97.52C53.6299 98.032 53.4859 98.4853 53.2193 98.88C52.9633 99.2747 52.6166 99.5893 52.1793 99.824C51.7419 100.048 51.2459 100.16 50.6913 100.16ZM51.0753 98.224C51.6619 98.224 52.1366 98.032 52.4993 97.648C52.8619 97.2533 53.0433 96.7467 53.0433 96.128C53.0433 95.7227 52.9579 95.3653 52.7873 95.056C52.6273 94.736 52.3979 94.4907 52.0993 94.32C51.8113 94.1387 51.4699 94.048 51.0753 94.048C50.6913 94.048 50.3499 94.1387 50.0513 94.32C49.7633 94.4907 49.5339 94.736 49.3633 95.056C49.2033 95.3653 49.1233 95.7227 49.1233 96.128C49.1233 96.544 49.2033 96.912 49.3633 97.232C49.5339 97.5413 49.7633 97.7867 50.0513 97.968C50.3499 98.1387 50.6913 98.224 51.0753 98.224ZM52.9313 100V97.92L53.2673 96.032L52.9313 94.176V92.272H55.0113V100H52.9313ZM60.0975 103.424C59.2762 103.424 58.5508 103.275 57.9215 102.976C57.2922 102.688 56.7908 102.277 56.4175 101.744L57.7455 100.416C58.0442 100.768 58.3748 101.035 58.7375 101.216C59.1108 101.408 59.5588 101.504 60.0815 101.504C60.7322 101.504 61.2442 101.339 61.6175 101.008C62.0015 100.677 62.1935 100.219 62.1935 99.632V97.696L62.5455 96L62.2095 94.304V92.272H64.2895V99.6C64.2895 100.368 64.1082 101.035 63.7455 101.6C63.3935 102.176 62.9028 102.624 62.2735 102.944C61.6442 103.264 60.9188 103.424 60.0975 103.424ZM60.0015 99.792C59.3082 99.792 58.6842 99.6267 58.1295 99.296C57.5748 98.9547 57.1375 98.4907 56.8175 97.904C56.5082 97.3173 56.3535 96.6613 56.3535 95.936C56.3535 95.2107 56.5082 94.56 56.8175 93.984C57.1375 93.408 57.5748 92.9547 58.1295 92.624C58.6842 92.2827 59.3082 92.112 60.0015 92.112C60.5775 92.112 61.0842 92.224 61.5215 92.448C61.9695 92.672 62.3215 92.9813 62.5775 93.376C62.8335 93.76 62.9722 94.2133 62.9935 94.736V97.168C62.9722 97.68 62.8282 98.1387 62.5615 98.544C62.3055 98.9387 61.9535 99.248 61.5055 99.472C61.0682 99.6853 60.5668 99.792 60.0015 99.792ZM60.4175 97.888C60.8015 97.888 61.1322 97.808 61.4095 97.648C61.6975 97.4773 61.9215 97.248 62.0815 96.96C62.2415 96.6613 62.3215 96.3253 62.3215 95.952C62.3215 95.568 62.2415 95.232 62.0815 94.944C61.9215 94.656 61.6975 94.432 61.4095 94.272C61.1322 94.1013 60.8015 94.016 60.4175 94.016C60.0335 94.016 59.6975 94.1013 59.4095 94.272C59.1215 94.432 58.8975 94.6613 58.7375 94.96C58.5775 95.248 58.4975 95.5787 58.4975 95.952C58.4975 96.3147 58.5775 96.6453 58.7375 96.944C58.8975 97.232 59.1215 97.4613 59.4095 97.632C59.6975 97.8027 60.0335 97.888 60.4175 97.888ZM69.8271 100.16C69.0165 100.16 68.2965 99.9893 67.6671 99.648C67.0378 99.296 66.5365 98.816 66.1631 98.208C65.8005 97.6 65.6191 96.9067 65.6191 96.128C65.6191 95.36 65.7951 94.6773 66.1471 94.08C66.5098 93.472 67.0005 92.992 67.6191 92.64C68.2378 92.2773 68.9258 92.096 69.6831 92.096C70.4298 92.096 71.0858 92.2667 71.6511 92.608C72.2271 92.9387 72.6751 93.3973 72.9951 93.984C73.3258 94.56 73.4911 95.216 73.4911 95.952C73.4911 96.0907 73.4805 96.2347 73.4591 96.384C73.4485 96.5227 73.4218 96.6827 73.3791 96.864L66.8831 96.88V95.312L72.4031 95.296L71.5551 95.952C71.5338 95.4933 71.4485 95.1093 71.2991 94.8C71.1605 94.4907 70.9525 94.256 70.6751 94.096C70.4085 93.9253 70.0778 93.84 69.6831 93.84C69.2671 93.84 68.9045 93.936 68.5951 94.128C68.2858 94.3093 68.0458 94.5707 67.8751 94.912C67.7151 95.2427 67.6351 95.6373 67.6351 96.096C67.6351 96.5653 67.7205 96.976 67.8911 97.328C68.0725 97.6693 68.3285 97.936 68.6591 98.128C68.9898 98.3093 69.3738 98.4 69.8111 98.4C70.2058 98.4 70.5631 98.336 70.8831 98.208C71.2031 98.0693 71.4805 97.8667 71.7151 97.6L72.9471 98.832C72.5738 99.2693 72.1151 99.6 71.5711 99.824C71.0378 100.048 70.4565 100.16 69.8271 100.16ZM74.7874 100V92.272H76.8834V100H74.7874ZM76.8834 95.728L76.0674 95.184C76.1634 94.2347 76.4407 93.488 76.8994 92.944C77.358 92.3893 78.0194 92.112 78.8834 92.112C79.2567 92.112 79.5927 92.176 79.8914 92.304C80.19 92.4213 80.462 92.6187 80.7074 92.896L79.3954 94.4C79.278 94.272 79.134 94.176 78.9634 94.112C78.8034 94.048 78.6167 94.016 78.4034 94.016C77.9554 94.016 77.5874 94.16 77.2994 94.448C77.022 94.7253 76.8834 95.152 76.8834 95.728ZM83.9278 100.176C83.4904 100.176 83.0584 100.117 82.6318 100C82.2158 99.8827 81.8318 99.7227 81.4798 99.52C81.1278 99.3067 80.8238 99.0507 80.5678 98.752L81.8158 97.488C82.0824 97.7867 82.3918 98.0107 82.7438 98.16C83.0958 98.3093 83.4851 98.384 83.9118 98.384C84.2531 98.384 84.5091 98.336 84.6798 98.24C84.8611 98.144 84.9518 98 84.9518 97.808C84.9518 97.5947 84.8558 97.4293 84.6638 97.312C84.4824 97.1947 84.2424 97.0987 83.9438 97.024C83.6451 96.9387 83.3304 96.848 82.9998 96.752C82.6798 96.6453 82.3704 96.512 82.0718 96.352C81.7731 96.1813 81.5278 95.952 81.3358 95.664C81.1544 95.3653 81.0638 94.9813 81.0638 94.512C81.0638 94.0213 81.1811 93.5947 81.4158 93.232C81.6611 92.8693 82.0078 92.5867 82.4557 92.384C82.9038 92.1813 83.4318 92.08 84.0398 92.08C84.6798 92.08 85.2558 92.192 85.7678 92.416C86.2904 92.64 86.7224 92.976 87.0638 93.424L85.7998 94.688C85.5651 94.4 85.2984 94.192 84.9998 94.064C84.7118 93.936 84.3971 93.872 84.0558 93.872C83.7464 93.872 83.5064 93.92 83.3358 94.016C83.1758 94.112 83.0958 94.2453 83.0958 94.416C83.0958 94.608 83.1864 94.7573 83.3678 94.864C83.5598 94.9707 83.8051 95.0667 84.1038 95.152C84.4024 95.2267 84.7118 95.3173 85.0318 95.424C85.3624 95.52 85.6718 95.6587 85.9598 95.84C86.2584 96.0213 86.4984 96.2613 86.6798 96.56C86.8718 96.8587 86.9678 97.2427 86.9678 97.712C86.9678 98.4693 86.6958 99.072 86.1518 99.52C85.6078 99.9573 84.8664 100.176 83.9278 100.176Z" fill="black"/>
              </svg>
            </button>

            <button onClick={() => handleRoleClick("Developer")}>
              <svg width="70" height="70" viewBox="0 0 102 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="51" cy="30" r="29" stroke="#135279" strokeWidth="2"/>
              <path d="M34.3333 21.6667V15H67.6666V21.6667H64.3333V18.3333H37.6666V21.6667H34.3333ZM44.3333 45V41.6667H34.3333V35H37.6666V38.3333H64.3333V35H67.6666V41.6667H57.6666V45H44.3333ZM38.9999 28.3333L43.3333 24L40.9999 21.6667L34.3333 28.3333L40.9999 35L43.3333 32.6667L38.9999 28.3333ZM62.9999 28.3333L58.6666 32.6667L60.9999 35L67.6666 28.3333L60.9999 21.6667L58.6666 24L62.9999 28.3333Z" fill="#135279"/>
              <path d="M12.804 82V80.624H15.892C16.7133 80.624 17.4333 80.448 18.052 80.096C18.6707 79.7333 19.1507 79.2373 19.492 78.608C19.844 77.9787 20.02 77.2533 20.02 76.432C20.02 75.6213 19.844 74.9013 19.492 74.272C19.14 73.6427 18.6547 73.152 18.036 72.8C17.4173 72.448 16.7027 72.272 15.892 72.272H12.82V70.896H15.924C16.7347 70.896 17.4813 71.0347 18.164 71.312C18.8573 71.5893 19.4547 71.9787 19.956 72.48C20.468 72.9813 20.8627 73.568 21.14 74.24C21.428 74.912 21.572 75.648 21.572 76.448C21.572 77.2373 21.428 77.9733 21.14 78.656C20.8627 79.328 20.4733 79.9147 19.972 80.416C19.4707 80.9173 18.8733 81.3067 18.18 81.584C17.4973 81.8613 16.756 82 15.956 82H12.804ZM11.812 82V70.896H13.316V82H11.812ZM26.9198 82.16C26.1624 82.16 25.4798 81.9893 24.8718 81.648C24.2638 81.296 23.7838 80.8213 23.4318 80.224C23.0798 79.6267 22.9038 78.9493 22.9038 78.192C22.9038 77.4453 23.0744 76.7733 23.4158 76.176C23.7678 75.5787 24.2371 75.1093 24.8238 74.768C25.4211 74.416 26.0878 74.24 26.8238 74.24C27.5278 74.24 28.1464 74.4 28.6798 74.72C29.2238 75.04 29.6451 75.4827 29.9438 76.048C30.2531 76.6133 30.4078 77.2533 30.4078 77.968C30.4078 78.0747 30.4024 78.192 30.3918 78.32C30.3811 78.4373 30.3598 78.576 30.3278 78.736H23.9118V77.536H29.5598L29.0318 78C29.0318 77.488 28.9411 77.056 28.7598 76.704C28.5784 76.3413 28.3224 76.064 27.9918 75.872C27.6611 75.6693 27.2611 75.568 26.7918 75.568C26.3011 75.568 25.8691 75.6747 25.4958 75.888C25.1224 76.1013 24.8344 76.4 24.6318 76.784C24.4291 77.168 24.3278 77.6213 24.3278 78.144C24.3278 78.6773 24.4344 79.1467 24.6478 79.552C24.8611 79.9467 25.1651 80.256 25.5598 80.48C25.9544 80.6933 26.4078 80.8 26.9198 80.8C27.3464 80.8 27.7358 80.7253 28.0878 80.576C28.4504 80.4267 28.7598 80.2027 29.0158 79.904L29.9438 80.848C29.5811 81.2747 29.1331 81.6 28.5998 81.824C28.0771 82.048 27.5171 82.16 26.9198 82.16ZM34.4609 82L30.9729 74.4H32.5729L35.3729 80.816H34.4449L37.2609 74.4H38.7969L35.3089 82H34.4609ZM43.2479 82.16C42.4905 82.16 41.8079 81.9893 41.1999 81.648C40.5919 81.296 40.1119 80.8213 39.7599 80.224C39.4079 79.6267 39.2319 78.9493 39.2319 78.192C39.2319 77.4453 39.4025 76.7733 39.7439 76.176C40.0959 75.5787 40.5652 75.1093 41.1519 74.768C41.7492 74.416 42.4159 74.24 43.1519 74.24C43.8559 74.24 44.4745 74.4 45.0079 74.72C45.5519 75.04 45.9732 75.4827 46.2719 76.048C46.5812 76.6133 46.7359 77.2533 46.7359 77.968C46.7359 78.0747 46.7305 78.192 46.7199 78.32C46.7092 78.4373 46.6879 78.576 46.6559 78.736H40.2399V77.536H45.8879L45.3599 78C45.3599 77.488 45.2692 77.056 45.0879 76.704C44.9065 76.3413 44.6505 76.064 44.3199 75.872C43.9892 75.6693 43.5892 75.568 43.1199 75.568C42.6292 75.568 42.1972 75.6747 41.8239 75.888C41.4505 76.1013 41.1625 76.4 40.9599 76.784C40.7572 77.168 40.6559 77.6213 40.6559 78.144C40.6559 78.6773 40.7625 79.1467 40.9759 79.552C41.1892 79.9467 41.4932 80.256 41.8879 80.48C42.2825 80.6933 42.7359 80.8 43.2479 80.8C43.6745 80.8 44.0639 80.7253 44.4159 80.576C44.7785 80.4267 45.0879 80.2027 45.3439 79.904L46.2719 80.848C45.9092 81.2747 45.4612 81.6 44.9279 81.824C44.4052 82.048 43.8452 82.16 43.2479 82.16ZM48.306 82V70.576H49.746V82H48.306ZM55.3249 82.16C54.5782 82.16 53.9062 81.984 53.3089 81.632C52.7115 81.28 52.2369 80.8053 51.8849 80.208C51.5329 79.6 51.3569 78.9227 51.3569 78.176C51.3569 77.44 51.5329 76.7787 51.8849 76.192C52.2369 75.5947 52.7115 75.12 53.3089 74.768C53.9062 74.416 54.5782 74.24 55.3249 74.24C56.0609 74.24 56.7275 74.416 57.3249 74.768C57.9329 75.1093 58.4129 75.5787 58.7649 76.176C59.1169 76.7733 59.2929 77.44 59.2929 78.176C59.2929 78.9227 59.1169 79.6 58.7649 80.208C58.4129 80.8053 57.9329 81.28 57.3249 81.632C56.7275 81.984 56.0609 82.16 55.3249 82.16ZM55.3249 80.768C55.8049 80.768 56.2315 80.656 56.6049 80.432C56.9782 80.208 57.2715 79.904 57.4849 79.52C57.6982 79.1253 57.8049 78.6773 57.8049 78.176C57.8049 77.6853 57.6929 77.248 57.4689 76.864C57.2555 76.48 56.9622 76.1813 56.5889 75.968C56.2262 75.744 55.8049 75.632 55.3249 75.632C54.8449 75.632 54.4182 75.744 54.0449 75.968C53.6715 76.1813 53.3782 76.48 53.1649 76.864C52.9515 77.248 52.8449 77.6853 52.8449 78.176C52.8449 78.6773 52.9515 79.1253 53.1649 79.52C53.3782 79.904 53.6715 80.208 54.0449 80.432C54.4182 80.656 54.8449 80.768 55.3249 80.768ZM64.9154 82.16C64.3394 82.16 63.8167 82.0427 63.3474 81.808C62.8887 81.5627 62.5207 81.2267 62.2434 80.8C61.966 80.3733 61.8114 79.888 61.7794 79.344V77.056C61.8114 76.5013 61.966 76.016 62.2434 75.6C62.5314 75.1733 62.9047 74.8427 63.3634 74.608C63.8327 74.3627 64.35 74.24 64.9154 74.24C65.6087 74.24 66.2327 74.416 66.7874 74.768C67.3527 75.12 67.7954 75.5947 68.1154 76.192C68.4354 76.7893 68.5954 77.4613 68.5954 78.208C68.5954 78.9547 68.4354 79.6267 68.1154 80.224C67.7954 80.8213 67.3527 81.296 66.7874 81.648C66.2327 81.9893 65.6087 82.16 64.9154 82.16ZM64.6754 80.8C65.1554 80.8 65.5767 80.688 65.9394 80.464C66.302 80.24 66.59 79.936 66.8034 79.552C67.0167 79.1573 67.1234 78.704 67.1234 78.192C67.1234 77.6907 67.0167 77.2427 66.8034 76.848C66.59 76.4533 66.302 76.1493 65.9394 75.936C65.5767 75.712 65.1607 75.6 64.6914 75.6C64.2114 75.6 63.79 75.712 63.4274 75.936C63.0647 76.1493 62.782 76.4533 62.5794 76.848C62.3767 77.2427 62.2754 77.696 62.2754 78.208C62.2754 78.7093 62.3714 79.1573 62.5634 79.552C62.766 79.936 63.0487 80.24 63.4114 80.464C63.7847 80.688 64.206 80.8 64.6754 80.8ZM60.9154 85.184V74.4H62.3554V76.4L62.0834 78.24L62.3554 80.096V85.184H60.9154ZM73.7479 82.16C72.9905 82.16 72.3079 81.9893 71.6999 81.648C71.0919 81.296 70.6119 80.8213 70.2599 80.224C69.9079 79.6267 69.7319 78.9493 69.7319 78.192C69.7319 77.4453 69.9025 76.7733 70.2439 76.176C70.5959 75.5787 71.0652 75.1093 71.6519 74.768C72.2492 74.416 72.9159 74.24 73.6519 74.24C74.3559 74.24 74.9745 74.4 75.5079 74.72C76.0519 75.04 76.4732 75.4827 76.7719 76.048C77.0812 76.6133 77.2359 77.2533 77.2359 77.968C77.2359 78.0747 77.2305 78.192 77.2199 78.32C77.2092 78.4373 77.1879 78.576 77.1559 78.736H70.7399V77.536H76.3879L75.8599 78C75.8599 77.488 75.7692 77.056 75.5879 76.704C75.4065 76.3413 75.1505 76.064 74.8199 75.872C74.4892 75.6693 74.0892 75.568 73.6199 75.568C73.1292 75.568 72.6972 75.6747 72.3239 75.888C71.9505 76.1013 71.6625 76.4 71.4599 76.784C71.2572 77.168 71.1559 77.6213 71.1559 78.144C71.1559 78.6773 71.2625 79.1467 71.4759 79.552C71.6892 79.9467 71.9932 80.256 72.3879 80.48C72.7825 80.6933 73.2359 80.8 73.7479 80.8C74.1745 80.8 74.5639 80.7253 74.9159 80.576C75.2785 80.4267 75.5879 80.2027 75.8439 79.904L76.7719 80.848C76.4092 81.2747 75.9612 81.6 75.4279 81.824C74.9052 82.048 74.3452 82.16 73.7479 82.16ZM78.806 82V74.4H80.246V82H78.806ZM80.246 77.664L79.702 77.424C79.702 76.4533 79.926 75.68 80.374 75.104C80.822 74.528 81.4673 74.24 82.31 74.24C82.694 74.24 83.0407 74.3093 83.35 74.448C83.6593 74.576 83.9473 74.7947 84.214 75.104L83.27 76.08C83.11 75.9093 82.934 75.7867 82.742 75.712C82.55 75.6373 82.326 75.6 82.07 75.6C81.5367 75.6 81.0993 75.7707 80.758 76.112C80.4167 76.4533 80.246 76.9707 80.246 77.664ZM87.472 82.16C87.0453 82.16 86.64 82.1067 86.256 82C85.8827 81.8827 85.536 81.7227 85.216 81.52C84.896 81.3067 84.6187 81.056 84.384 80.768L85.312 79.84C85.5893 80.1813 85.9093 80.4373 86.272 80.608C86.6347 80.768 87.04 80.848 87.488 80.848C87.936 80.848 88.2827 80.7733 88.528 80.624C88.7733 80.464 88.896 80.2453 88.896 79.968C88.896 79.6907 88.7947 79.4773 88.592 79.328C88.4 79.168 88.1493 79.04 87.84 78.944C87.5307 78.8373 87.2 78.736 86.848 78.64C86.5067 78.5333 86.1813 78.4 85.872 78.24C85.5627 78.08 85.3067 77.8613 85.104 77.584C84.912 77.3067 84.816 76.9387 84.816 76.48C84.816 76.0213 84.928 75.6267 85.152 75.296C85.376 74.9547 85.6853 74.6933 86.08 74.512C86.4853 74.3307 86.9707 74.24 87.536 74.24C88.1333 74.24 88.6613 74.3467 89.12 74.56C89.5893 74.7627 89.9733 75.072 90.272 75.488L89.344 76.416C89.1307 76.1387 88.864 75.9253 88.544 75.776C88.2347 75.6267 87.8827 75.552 87.488 75.552C87.072 75.552 86.752 75.6267 86.528 75.776C86.3147 75.9147 86.208 76.112 86.208 76.368C86.208 76.624 86.304 76.8213 86.496 76.96C86.688 77.0987 86.9387 77.216 87.248 77.312C87.568 77.408 87.8987 77.5093 88.24 77.616C88.5813 77.712 88.9067 77.8453 89.216 78.016C89.5253 78.1867 89.776 78.416 89.968 78.704C90.1707 78.992 90.272 79.3707 90.272 79.84C90.272 80.5547 90.016 81.12 89.504 81.536C89.0027 81.952 88.3253 82.16 87.472 82.16Z" fill="black"/>
              </svg>
            </button>

            <button onClick={() => handleRoleClick("Designer")}>
              <svg width="70" height="70" viewBox="0 0 102 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="51" cy="30" r="29" stroke="#F9E8C3" strokeWidth="2"/>
              <path d="M42.6666 36.6667C43.5833 36.6667 44.3333 37.4167 44.3333 38.3333C44.3333 40.1667 42.8333 41.6667 40.9999 41.6667C40.7166 41.6667 40.4499 41.6667 40.1666 41.5833C40.6833 40.6667 40.9999 39.5667 40.9999 38.3333C40.9999 37.4167 41.7499 36.6667 42.6666 36.6667ZM62.1166 15C61.6833 15 61.2666 15.1667 60.9333 15.4833L45.9999 30.4167L50.5833 35L65.5166 20.0667C66.1666 19.4167 66.1666 18.3333 65.5166 17.7167L63.2833 15.4833C62.9499 15.15 62.5333 15 62.1166 15ZM42.6666 33.3333C39.8999 33.3333 37.6666 35.5667 37.6666 38.3333C37.6666 40.5167 35.7333 41.6667 34.3333 41.6667C35.8666 43.7 38.4999 45 40.9999 45C44.6833 45 47.6666 42.0167 47.6666 38.3333C47.6666 35.5667 45.4333 33.3333 42.6666 33.3333Z" fill="#F9E8C3"/>
              <path d="M17.804 82V80.624H20.892C21.7133 80.624 22.4333 80.448 23.052 80.096C23.6707 79.7333 24.1507 79.2373 24.492 78.608C24.844 77.9787 25.02 77.2533 25.02 76.432C25.02 75.6213 24.844 74.9013 24.492 74.272C24.14 73.6427 23.6547 73.152 23.036 72.8C22.4173 72.448 21.7027 72.272 20.892 72.272H17.82V70.896H20.924C21.7347 70.896 22.4813 71.0347 23.164 71.312C23.8573 71.5893 24.4547 71.9787 24.956 72.48C25.468 72.9813 25.8627 73.568 26.14 74.24C26.428 74.912 26.572 75.648 26.572 76.448C26.572 77.2373 26.428 77.9733 26.14 78.656C25.8627 79.328 25.4733 79.9147 24.972 80.416C24.4707 80.9173 23.8733 81.3067 23.18 81.584C22.4973 81.8613 21.756 82 20.956 82H17.804ZM16.812 82V70.896H18.316V82H16.812ZM31.9198 82.16C31.1624 82.16 30.4798 81.9893 29.8718 81.648C29.2638 81.296 28.7838 80.8213 28.4318 80.224C28.0798 79.6267 27.9038 78.9493 27.9038 78.192C27.9038 77.4453 28.0744 76.7733 28.4158 76.176C28.7678 75.5787 29.2371 75.1093 29.8238 74.768C30.4211 74.416 31.0878 74.24 31.8238 74.24C32.5278 74.24 33.1464 74.4 33.6798 74.72C34.2238 75.04 34.6451 75.4827 34.9438 76.048C35.2531 76.6133 35.4078 77.2533 35.4078 77.968C35.4078 78.0747 35.4024 78.192 35.3918 78.32C35.3811 78.4373 35.3598 78.576 35.3278 78.736H28.9118V77.536H34.5598L34.0318 78C34.0318 77.488 33.9411 77.056 33.7598 76.704C33.5784 76.3413 33.3224 76.064 32.9918 75.872C32.6611 75.6693 32.2611 75.568 31.7918 75.568C31.3011 75.568 30.8691 75.6747 30.4958 75.888C30.1224 76.1013 29.8344 76.4 29.6318 76.784C29.4291 77.168 29.3278 77.6213 29.3278 78.144C29.3278 78.6773 29.4344 79.1467 29.6478 79.552C29.8611 79.9467 30.1651 80.256 30.5598 80.48C30.9544 80.6933 31.4078 80.8 31.9198 80.8C32.3464 80.8 32.7358 80.7253 33.0878 80.576C33.4504 80.4267 33.7598 80.2027 34.0158 79.904L34.9438 80.848C34.5811 81.2747 34.1331 81.6 33.5998 81.824C33.0771 82.048 32.5171 82.16 31.9198 82.16ZM39.3939 82.16C38.9672 82.16 38.5619 82.1067 38.1779 82C37.8045 81.8827 37.4579 81.7227 37.1379 81.52C36.8179 81.3067 36.5405 81.056 36.3059 80.768L37.2339 79.84C37.5112 80.1813 37.8312 80.4373 38.1939 80.608C38.5565 80.768 38.9619 80.848 39.4099 80.848C39.8579 80.848 40.2045 80.7733 40.4499 80.624C40.6952 80.464 40.8179 80.2453 40.8179 79.968C40.8179 79.6907 40.7165 79.4773 40.5139 79.328C40.3219 79.168 40.0712 79.04 39.7619 78.944C39.4525 78.8373 39.1219 78.736 38.7699 78.64C38.4285 78.5333 38.1032 78.4 37.7939 78.24C37.4845 78.08 37.2285 77.8613 37.0259 77.584C36.8339 77.3067 36.7379 76.9387 36.7379 76.48C36.7379 76.0213 36.8499 75.6267 37.0739 75.296C37.2979 74.9547 37.6072 74.6933 38.0019 74.512C38.4072 74.3307 38.8925 74.24 39.4579 74.24C40.0552 74.24 40.5832 74.3467 41.0419 74.56C41.5112 74.7627 41.8952 75.072 42.1939 75.488L41.2659 76.416C41.0525 76.1387 40.7859 75.9253 40.4659 75.776C40.1565 75.6267 39.8045 75.552 39.4099 75.552C38.9939 75.552 38.6739 75.6267 38.4499 75.776C38.2365 75.9147 38.1299 76.112 38.1299 76.368C38.1299 76.624 38.2259 76.8213 38.4179 76.96C38.6099 77.0987 38.8605 77.216 39.1699 77.312C39.4899 77.408 39.8205 77.5093 40.1619 77.616C40.5032 77.712 40.8285 77.8453 41.1379 78.016C41.4472 78.1867 41.6979 78.416 41.8899 78.704C42.0925 78.992 42.1939 79.3707 42.1939 79.84C42.1939 80.5547 41.9379 81.12 41.4259 81.536C40.9245 81.952 40.2472 82.16 39.3939 82.16ZM43.822 82V74.4H45.262V82H43.822ZM44.542 72.88C44.2753 72.88 44.0567 72.7947 43.886 72.624C43.7153 72.4427 43.63 72.2187 43.63 71.952C43.63 71.696 43.7153 71.4827 43.886 71.312C44.0567 71.1307 44.2753 71.04 44.542 71.04C44.8087 71.04 45.0273 71.1307 45.198 71.312C45.3687 71.4827 45.454 71.696 45.454 71.952C45.454 72.2187 45.3687 72.4427 45.198 72.624C45.0273 72.7947 44.8087 72.88 44.542 72.88ZM50.5361 85.344C49.7575 85.344 49.0641 85.2 48.4561 84.912C47.8588 84.624 47.3788 84.2187 47.0161 83.696L47.9441 82.752C48.2535 83.1467 48.6215 83.4453 49.0481 83.648C49.4748 83.8613 49.9815 83.968 50.5681 83.968C51.3468 83.968 51.9601 83.76 52.4081 83.344C52.8668 82.9387 53.0961 82.3893 53.0961 81.696V79.808L53.3521 78.096L53.0961 76.4V74.4H54.5361V81.696C54.5361 82.4213 54.3655 83.056 54.0241 83.6C53.6935 84.144 53.2241 84.5707 52.6161 84.88C52.0188 85.1893 51.3255 85.344 50.5361 85.344ZM50.5361 81.872C49.8428 81.872 49.2188 81.7067 48.6641 81.376C48.1201 81.0453 47.6881 80.592 47.3681 80.016C47.0481 79.4293 46.8881 78.7733 46.8881 78.048C46.8881 77.3227 47.0481 76.6773 47.3681 76.112C47.6881 75.536 48.1201 75.0827 48.6641 74.752C49.2188 74.4107 49.8428 74.24 50.5361 74.24C51.1335 74.24 51.6615 74.3573 52.1201 74.592C52.5788 74.8267 52.9415 75.1573 53.2081 75.584C53.4855 76 53.6348 76.4907 53.6561 77.056V79.072C53.6241 79.6267 53.4695 80.1173 53.1921 80.544C52.9255 80.96 52.5628 81.2853 52.1041 81.52C51.6455 81.7547 51.1228 81.872 50.5361 81.872ZM50.8241 80.512C51.2935 80.512 51.7041 80.4107 52.0561 80.208C52.4188 80.0053 52.6961 79.7227 52.8881 79.36C53.0801 78.9867 53.1761 78.5547 53.1761 78.064C53.1761 77.5733 53.0748 77.1467 52.8721 76.784C52.6801 76.4107 52.4081 76.1227 52.0561 75.92C51.7041 75.7067 51.2881 75.6 50.8081 75.6C50.3281 75.6 49.9068 75.7067 49.5441 75.92C49.1815 76.1227 48.8935 76.4107 48.6801 76.784C48.4775 77.1467 48.3761 77.568 48.3761 78.048C48.3761 78.528 48.4775 78.9547 48.6801 79.328C48.8935 79.7013 49.1815 79.9947 49.5441 80.208C49.9175 80.4107 50.3441 80.512 50.8241 80.512ZM62.0258 82V77.568C62.0258 76.992 61.8444 76.5173 61.4818 76.144C61.1191 75.7707 60.6498 75.584 60.0738 75.584C59.6898 75.584 59.3484 75.6693 59.0498 75.84C58.7511 76.0107 58.5164 76.2453 58.3458 76.544C58.1751 76.8427 58.0898 77.184 58.0898 77.568L57.4978 77.232C57.4978 76.656 57.6258 76.144 57.8818 75.696C58.1378 75.248 58.4951 74.896 58.9538 74.64C59.4124 74.3733 59.9298 74.24 60.5058 74.24C61.0818 74.24 61.5884 74.384 62.0258 74.672C62.4738 74.96 62.8258 75.3387 63.0818 75.808C63.3378 76.2667 63.4658 76.7573 63.4658 77.28V82H62.0258ZM56.6497 82V74.4H58.0898V82H56.6497ZM68.9354 82.16C68.178 82.16 67.4954 81.9893 66.8874 81.648C66.2794 81.296 65.7994 80.8213 65.4474 80.224C65.0954 79.6267 64.9194 78.9493 64.9194 78.192C64.9194 77.4453 65.09 76.7733 65.4314 76.176C65.7834 75.5787 66.2527 75.1093 66.8394 74.768C67.4367 74.416 68.1034 74.24 68.8394 74.24C69.5434 74.24 70.162 74.4 70.6954 74.72C71.2394 75.04 71.6607 75.4827 71.9594 76.048C72.2687 76.6133 72.4234 77.2533 72.4234 77.968C72.4234 78.0747 72.418 78.192 72.4074 78.32C72.3967 78.4373 72.3754 78.576 72.3434 78.736H65.9274V77.536H71.5754L71.0474 78C71.0474 77.488 70.9567 77.056 70.7754 76.704C70.594 76.3413 70.338 76.064 70.0074 75.872C69.6767 75.6693 69.2767 75.568 68.8074 75.568C68.3167 75.568 67.8847 75.6747 67.5114 75.888C67.138 76.1013 66.85 76.4 66.6474 76.784C66.4447 77.168 66.3434 77.6213 66.3434 78.144C66.3434 78.6773 66.45 79.1467 66.6634 79.552C66.8767 79.9467 67.1807 80.256 67.5754 80.48C67.97 80.6933 68.4234 80.8 68.9354 80.8C69.362 80.8 69.7514 80.7253 70.1034 80.576C70.466 80.4267 70.7754 80.2027 71.0314 79.904L71.9594 80.848C71.5967 81.2747 71.1487 81.6 70.6154 81.824C70.0927 82.048 69.5327 82.16 68.9354 82.16ZM73.9935 82V74.4H75.4335V82H73.9935ZM75.4335 77.664L74.8895 77.424C74.8895 76.4533 75.1135 75.68 75.5615 75.104C76.0095 74.528 76.6548 74.24 77.4975 74.24C77.8815 74.24 78.2282 74.3093 78.5375 74.448C78.8468 74.576 79.1348 74.7947 79.4015 75.104L78.4575 76.08C78.2975 75.9093 78.1215 75.7867 77.9295 75.712C77.7375 75.6373 77.5135 75.6 77.2575 75.6C76.7242 75.6 76.2868 75.7707 75.9455 76.112C75.6042 76.4533 75.4335 76.9707 75.4335 77.664ZM82.6595 82.16C82.2328 82.16 81.8275 82.1067 81.4435 82C81.0702 81.8827 80.7235 81.7227 80.4035 81.52C80.0835 81.3067 79.8062 81.056 79.5715 80.768L80.4995 79.84C80.7768 80.1813 81.0968 80.4373 81.4595 80.608C81.8222 80.768 82.2275 80.848 82.6755 80.848C83.1235 80.848 83.4702 80.7733 83.7155 80.624C83.9608 80.464 84.0835 80.2453 84.0835 79.968C84.0835 79.6907 83.9822 79.4773 83.7795 79.328C83.5875 79.168 83.3368 79.04 83.0275 78.944C82.7182 78.8373 82.3875 78.736 82.0355 78.64C81.6942 78.5333 81.3688 78.4 81.0595 78.24C80.7502 78.08 80.4942 77.8613 80.2915 77.584C80.0995 77.3067 80.0035 76.9387 80.0035 76.48C80.0035 76.0213 80.1155 75.6267 80.3395 75.296C80.5635 74.9547 80.8728 74.6933 81.2675 74.512C81.6728 74.3307 82.1582 74.24 82.7235 74.24C83.3208 74.24 83.8488 74.3467 84.3075 74.56C84.7768 74.7627 85.1608 75.072 85.4595 75.488L84.5315 76.416C84.3182 76.1387 84.0515 75.9253 83.7315 75.776C83.4222 75.6267 83.0702 75.552 82.6755 75.552C82.2595 75.552 81.9395 75.6267 81.7155 75.776C81.5022 75.9147 81.3955 76.112 81.3955 76.368C81.3955 76.624 81.4915 76.8213 81.6835 76.96C81.8755 77.0987 82.1262 77.216 82.4355 77.312C82.7555 77.408 83.0862 77.5093 83.4275 77.616C83.7688 77.712 84.0942 77.8453 84.4035 78.016C84.7128 78.1867 84.9635 78.416 85.1555 78.704C85.3582 78.992 85.4595 79.3707 85.4595 79.84C85.4595 80.5547 85.2035 81.12 84.6915 81.536C84.1902 81.952 83.5128 82.16 82.6595 82.16Z" fill="black"/>
              </svg>
            </button>

          </div>
        )}
      </li>
    );
  }