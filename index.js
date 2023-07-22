const userData = [
    {
        image: 'img/img2.png',
        userName: 'Kate B.',
        dButton: 'img/img1.png'
    }
];

const clientInfo = document.getElementById("clientinfo");

function postClient() {

    userData.map((postClientData) => {

        const postClientInfo = document.createElement('div');
        postClientInfo.innerHTML = `
        <img src="${postClientData.image}" class="img-003">
        <span class="text-001">${postClientData.userName}</span>
        <img src="${postClientData.dButton}">
        `
        clientInfo.appendChild(postClientInfo);
    });

}

postClient();



//CARDS

const cardData = [

    {
        headText: "",
        image: `<img src="img/img3.png" class="setting-002">`,
        greenText: "Headset",
        mainText: `<h2 class="text-002">Fidelity first. See more 
        than ever before</h2>`,
        secondText: `<p class="text-004">We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.</p>`,
        devider: `<hr>`,
        footerIcons: `<div style="display: flex; gap: 13px;">
        <a href="#" class="text-006"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.625C17.5 12.315 16.94 12.875 16.25 12.875H11.25C10.905 12.875 10.5925 13.015 10.3663 13.2413L7.5 16.1075V14.125C7.5 13.435 6.94 12.875 6.25 12.875H3.75C3.06 12.875 2.5 12.315 2.5 11.625V4.125C2.5 3.435 3.06 2.875 3.75 2.875H16.25C16.94 2.875 17.5 3.435 17.5 4.125V11.625ZM17.5 0.375H2.5C1.11875 0.375 0 1.495 0 2.875V12.875C0 14.2563 1.11875 15.375 2.5 15.375H5V19.125C5 19.815 5.56 20.375 6.25 20.375C6.595 20.375 6.9075 20.235 7.13375 20.0088L11.7675 15.375H17.5C18.8813 15.375 20 14.2563 20 12.875V2.875C20 1.495 18.8813 0.375 17.5 0.375Z" fill="#CBCBCB"/>
        </svg> 349
        </a>

        <a href="#" class="text-006"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.1751C7.23875 11.1751 5 9.02592 5 6.37512C5 3.72432 7.23875 1.57512 10 1.57512C12.7612 1.57512 15 3.72432 15 6.37512C15 9.02592 12.7612 11.1751 10 11.1751ZM10 0.375122C4.4775 0.375122 0 5.17512 0 6.37512C0 7.57512 4.4775 12.3751 10 12.3751C15.5225 12.3751 20 7.57512 20 6.37512C20 5.17512 15.5225 0.375122 10 0.375122ZM10 3.97512C8.61875 3.97512 7.5 5.04912 7.5 6.37512C7.5 7.70112 8.61875 8.77512 10 8.77512C11.38 8.77512 12.5 7.70112 12.5 6.37512C12.5 5.04912 11.38 3.97512 10 3.97512Z" fill="#CBCBCB"/>
        </svg>
        49500</a>
        </div>`,
        share: `<a href="#"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 4.01136V2.19318C10.9091 1.18773 11.7236 0.375 12.7273 0.375C12.9782 0.375 13.2182 0.425909 13.4345 0.518636C13.6527 0.609545 13.8491 0.742273 14.0127 0.907727L15.8309 2.72591L19.4673 6.36227C19.7964 6.69136 20 7.14591 20 7.64773C20 8.14955 19.7964 8.60409 19.4673 8.93318L15.8309 12.5695L14.0127 14.3877C13.6836 14.7168 13.2291 14.9205 12.7273 14.9205C11.7236 14.9205 10.9091 14.1059 10.9091 13.1023V11.2841C6.18909 12.7368 1.81818 15.5823 1.81818 20.375H0C0 13.6005 4.64 5.62591 10.9091 4.01136Z" fill="#CBCBCB"/>
        </svg>
        </a>`
    },

    {
        headText: `<p class="text-008">Controllers</p>`,
        image: `<img src="img/img4.png" class="setting-003">`,
        greenText: "",
        mainText: `<h2 class="text-003">Your hands,
        in Virtual Reality</h2>`,
        secondText: `<p class="text-005">Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.</p>`,
        devider: `<hr class="setting-006">`,
        footerIcons: `<div style="display: flex; gap: 13px;">
        <a href="#" class="text-007"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.625C17.5 12.315 16.94 12.875 16.25 12.875H11.25C10.905 12.875 10.5925 13.015 10.3663 13.2413L7.5 16.1075V14.125C7.5 13.435 6.94 12.875 6.25 12.875H3.75C3.06 12.875 2.5 12.315 2.5 11.625V4.125C2.5 3.435 3.06 2.875 3.75 2.875H16.25C16.94 2.875 17.5 3.435 17.5 4.125V11.625ZM17.5 0.375H2.5C1.11875 0.375 0 1.495 0 2.875V12.875C0 14.2563 1.11875 15.375 2.5 15.375H5V19.125C5 19.815 5.56 20.375 6.25 20.375C6.595 20.375 6.9075 20.235 7.13375 20.0088L11.7675 15.375H17.5C18.8813 15.375 20 14.2563 20 12.875V2.875C20 1.495 18.8813 0.375 17.5 0.375Z" fill="white"/>
        </svg>
         349
        </a>

        <a href="#" class="text-007"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 11.1751C7.23875 11.1751 5 9.02592 5 6.37512C5 3.72432 7.23875 1.57512 10 1.57512C12.7612 1.57512 15 3.72432 15 6.37512C15 9.02592 12.7612 11.1751 10 11.1751ZM10 0.375122C4.4775 0.375122 0 5.17512 0 6.37512C0 7.57512 4.4775 12.3751 10 12.3751C15.5225 12.3751 20 7.57512 20 6.37512C20 5.17512 15.5225 0.375122 10 0.375122ZM10 3.97512C8.61875 3.97512 7.5 5.04912 7.5 6.37512C7.5 7.70112 8.61875 8.77512 10 8.77512C11.38 8.77512 12.5 7.70112 12.5 6.37512C12.5 5.04912 11.38 3.97512 10 3.97512Z" fill="white"/>
        </svg>        
        49500</a>
        </div>`,
        share: `<a href="#"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 4.01136V2.19318C10.9091 1.18773 11.7236 0.375 12.7273 0.375C12.9782 0.375 13.2182 0.425909 13.4345 0.518636C13.6527 0.609545 13.8491 0.742273 14.0127 0.907727L15.8309 2.72591L19.4673 6.36227C19.7964 6.69136 20 7.14591 20 7.64773C20 8.14955 19.7964 8.60409 19.4673 8.93318L15.8309 12.5695L14.0127 14.3877C13.6836 14.7168 13.2291 14.9205 12.7273 14.9205C11.7236 14.9205 10.9091 14.1059 10.9091 13.1023V11.2841C6.18909 12.7368 1.81818 15.5823 1.81818 20.375H0C0 13.6005 4.64 5.62591 10.9091 4.01136Z" fill="white"/>
        </svg>
        </a>`

    },

    {
        headText: "",
        image: `<img src="img/img5.png" class="setting-002">`,
        greenText: "Base Stations",
        mainText: `<h2 class="text-002">Best-in-industry room-scale tracking</h2>`,
        secondText: `<p class="text-004">The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.</p>`,
        devider: `<hr>`,
        footerIcons: `<div style="display: flex; gap: 13px;">
        <a href="#" class="text-006"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.625C17.5 12.315 16.94 12.875 16.25 12.875H11.25C10.905 12.875 10.5925 13.015 10.3663 13.2413L7.5 16.1075V14.125C7.5 13.435 6.94 12.875 6.25 12.875H3.75C3.06 12.875 2.5 12.315 2.5 11.625V4.125C2.5 3.435 3.06 2.875 3.75 2.875H16.25C16.94 2.875 17.5 3.435 17.5 4.125V11.625ZM17.5 0.375H2.5C1.11875 0.375 0 1.495 0 2.875V12.875C0 14.2563 1.11875 15.375 2.5 15.375H5V19.125C5 19.815 5.56 20.375 6.25 20.375C6.595 20.375 6.9075 20.235 7.13375 20.0088L11.7675 15.375H17.5C18.8813 15.375 20 14.2563 20 12.875V2.875C20 1.495 18.8813 0.375 17.5 0.375Z" fill="#CBCBCB"/>
        </svg> 349
        </a>

        <a href="#" class="text-006"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.1751C7.23875 11.1751 5 9.02592 5 6.37512C5 3.72432 7.23875 1.57512 10 1.57512C12.7612 1.57512 15 3.72432 15 6.37512C15 9.02592 12.7612 11.1751 10 11.1751ZM10 0.375122C4.4775 0.375122 0 5.17512 0 6.37512C0 7.57512 4.4775 12.3751 10 12.3751C15.5225 12.3751 20 7.57512 20 6.37512C20 5.17512 15.5225 0.375122 10 0.375122ZM10 3.97512C8.61875 3.97512 7.5 5.04912 7.5 6.37512C7.5 7.70112 8.61875 8.77512 10 8.77512C11.38 8.77512 12.5 7.70112 12.5 6.37512C12.5 5.04912 11.38 3.97512 10 3.97512Z" fill="#CBCBCB"/>
        </svg>
        49500</a>
        </div>`,
        share: `<a href="#"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 4.01136V2.19318C10.9091 1.18773 11.7236 0.375 12.7273 0.375C12.9782 0.375 13.2182 0.425909 13.4345 0.518636C13.6527 0.609545 13.8491 0.742273 14.0127 0.907727L15.8309 2.72591L19.4673 6.36227C19.7964 6.69136 20 7.14591 20 7.64773C20 8.14955 19.7964 8.60409 19.4673 8.93318L15.8309 12.5695L14.0127 14.3877C13.6836 14.7168 13.2291 14.9205 12.7273 14.9205C11.7236 14.9205 10.9091 14.1059 10.9091 13.1023V11.2841C6.18909 12.7368 1.81818 15.5823 1.81818 20.375H0C0 13.6005 4.64 5.62591 10.9091 4.01136Z" fill="#CBCBCB"/>
        </svg>
        </a>`
    }
]

const cardData2 = [

    {
        headText: "",
        image: `<img src="img/img3.png" class="setting-002">`,
        greenText: "Headset",
        mainText: `<h2 class="text-002">Fidelity first. See more 
        than ever before</h2>`,
        secondText: `<p class="text-004">We've pushed visual, audio, and ergonomic technologies to create the best-in-class VR experience.</p>`,
        devider: `<hr>`,
        footerIcons: `<div style="display: flex; gap: 13px;">
        <a href="#" class="text-006"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.625C17.5 12.315 16.94 12.875 16.25 12.875H11.25C10.905 12.875 10.5925 13.015 10.3663 13.2413L7.5 16.1075V14.125C7.5 13.435 6.94 12.875 6.25 12.875H3.75C3.06 12.875 2.5 12.315 2.5 11.625V4.125C2.5 3.435 3.06 2.875 3.75 2.875H16.25C16.94 2.875 17.5 3.435 17.5 4.125V11.625ZM17.5 0.375H2.5C1.11875 0.375 0 1.495 0 2.875V12.875C0 14.2563 1.11875 15.375 2.5 15.375H5V19.125C5 19.815 5.56 20.375 6.25 20.375C6.595 20.375 6.9075 20.235 7.13375 20.0088L11.7675 15.375H17.5C18.8813 15.375 20 14.2563 20 12.875V2.875C20 1.495 18.8813 0.375 17.5 0.375Z" fill="#CBCBCB"/>
        </svg> 349
        </a>

        <a href="#" class="text-006"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.1751C7.23875 11.1751 5 9.02592 5 6.37512C5 3.72432 7.23875 1.57512 10 1.57512C12.7612 1.57512 15 3.72432 15 6.37512C15 9.02592 12.7612 11.1751 10 11.1751ZM10 0.375122C4.4775 0.375122 0 5.17512 0 6.37512C0 7.57512 4.4775 12.3751 10 12.3751C15.5225 12.3751 20 7.57512 20 6.37512C20 5.17512 15.5225 0.375122 10 0.375122ZM10 3.97512C8.61875 3.97512 7.5 5.04912 7.5 6.37512C7.5 7.70112 8.61875 8.77512 10 8.77512C11.38 8.77512 12.5 7.70112 12.5 6.37512C12.5 5.04912 11.38 3.97512 10 3.97512Z" fill="#CBCBCB"/>
        </svg>
        49500</a>
        </div>`,
        share: `<a href="#"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 4.01136V2.19318C10.9091 1.18773 11.7236 0.375 12.7273 0.375C12.9782 0.375 13.2182 0.425909 13.4345 0.518636C13.6527 0.609545 13.8491 0.742273 14.0127 0.907727L15.8309 2.72591L19.4673 6.36227C19.7964 6.69136 20 7.14591 20 7.64773C20 8.14955 19.7964 8.60409 19.4673 8.93318L15.8309 12.5695L14.0127 14.3877C13.6836 14.7168 13.2291 14.9205 12.7273 14.9205C11.7236 14.9205 10.9091 14.1059 10.9091 13.1023V11.2841C6.18909 12.7368 1.81818 15.5823 1.81818 20.375H0C0 13.6005 4.64 5.62591 10.9091 4.01136Z" fill="#CBCBCB"/>
        </svg>
        </a>`
    },

]

const cardData3 = [

    {
        headText: `<p class="text-008">Controllers</p>`,
        image: `<img src="img/img4.png" class="setting-003">`,
        greenText: "",
        mainText: `<h2 class="text-003">Your hands,
        in Virtual Reality</h2>`,
        secondText: `<p class="text-005">Designed from the ground up to enable natural interactions, high-fidelity hand presence, and long-term comfort.</p>`,
        devider: `<hr class="setting-006">`,
        footerIcons: `<div style="display: flex; gap: 13px;">
        <a href="#" class="text-007"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.625C17.5 12.315 16.94 12.875 16.25 12.875H11.25C10.905 12.875 10.5925 13.015 10.3663 13.2413L7.5 16.1075V14.125C7.5 13.435 6.94 12.875 6.25 12.875H3.75C3.06 12.875 2.5 12.315 2.5 11.625V4.125C2.5 3.435 3.06 2.875 3.75 2.875H16.25C16.94 2.875 17.5 3.435 17.5 4.125V11.625ZM17.5 0.375H2.5C1.11875 0.375 0 1.495 0 2.875V12.875C0 14.2563 1.11875 15.375 2.5 15.375H5V19.125C5 19.815 5.56 20.375 6.25 20.375C6.595 20.375 6.9075 20.235 7.13375 20.0088L11.7675 15.375H17.5C18.8813 15.375 20 14.2563 20 12.875V2.875C20 1.495 18.8813 0.375 17.5 0.375Z" fill="white"/>
        </svg>
         349
        </a>

        <a href="#" class="text-007"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10 11.1751C7.23875 11.1751 5 9.02592 5 6.37512C5 3.72432 7.23875 1.57512 10 1.57512C12.7612 1.57512 15 3.72432 15 6.37512C15 9.02592 12.7612 11.1751 10 11.1751ZM10 0.375122C4.4775 0.375122 0 5.17512 0 6.37512C0 7.57512 4.4775 12.3751 10 12.3751C15.5225 12.3751 20 7.57512 20 6.37512C20 5.17512 15.5225 0.375122 10 0.375122ZM10 3.97512C8.61875 3.97512 7.5 5.04912 7.5 6.37512C7.5 7.70112 8.61875 8.77512 10 8.77512C11.38 8.77512 12.5 7.70112 12.5 6.37512C12.5 5.04912 11.38 3.97512 10 3.97512Z" fill="white"/>
        </svg>        
        49500</a>
        </div>`,
        share: `<a href="#"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 4.01136V2.19318C10.9091 1.18773 11.7236 0.375 12.7273 0.375C12.9782 0.375 13.2182 0.425909 13.4345 0.518636C13.6527 0.609545 13.8491 0.742273 14.0127 0.907727L15.8309 2.72591L19.4673 6.36227C19.7964 6.69136 20 7.14591 20 7.64773C20 8.14955 19.7964 8.60409 19.4673 8.93318L15.8309 12.5695L14.0127 14.3877C13.6836 14.7168 13.2291 14.9205 12.7273 14.9205C11.7236 14.9205 10.9091 14.1059 10.9091 13.1023V11.2841C6.18909 12.7368 1.81818 15.5823 1.81818 20.375H0C0 13.6005 4.64 5.62591 10.9091 4.01136Z" fill="white"/>
        </svg>
        </a>`

    },

]

const cardData4 = [

    {
        headText: "",
        image: `<img src="img/img5.png" class="setting-002">`,
        greenText: "Base Stations",
        mainText: `<h2 class="text-002">Best-in-industry room-scale tracking</h2>`,
        secondText: `<p class="text-004">The highest quality tracking has gotten even better with Base Station 2.0, now with improved range, field of view, and scalability.</p>`,
        devider: `<hr>`,
        footerIcons: `<div style="display: flex; gap: 13px;">
        <a href="#" class="text-006"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 11.625C17.5 12.315 16.94 12.875 16.25 12.875H11.25C10.905 12.875 10.5925 13.015 10.3663 13.2413L7.5 16.1075V14.125C7.5 13.435 6.94 12.875 6.25 12.875H3.75C3.06 12.875 2.5 12.315 2.5 11.625V4.125C2.5 3.435 3.06 2.875 3.75 2.875H16.25C16.94 2.875 17.5 3.435 17.5 4.125V11.625ZM17.5 0.375H2.5C1.11875 0.375 0 1.495 0 2.875V12.875C0 14.2563 1.11875 15.375 2.5 15.375H5V19.125C5 19.815 5.56 20.375 6.25 20.375C6.595 20.375 6.9075 20.235 7.13375 20.0088L11.7675 15.375H17.5C18.8813 15.375 20 14.2563 20 12.875V2.875C20 1.495 18.8813 0.375 17.5 0.375Z" fill="#CBCBCB"/>
        </svg> 349
        </a>

        <a href="#" class="text-006"><svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.1751C7.23875 11.1751 5 9.02592 5 6.37512C5 3.72432 7.23875 1.57512 10 1.57512C12.7612 1.57512 15 3.72432 15 6.37512C15 9.02592 12.7612 11.1751 10 11.1751ZM10 0.375122C4.4775 0.375122 0 5.17512 0 6.37512C0 7.57512 4.4775 12.3751 10 12.3751C15.5225 12.3751 20 7.57512 20 6.37512C20 5.17512 15.5225 0.375122 10 0.375122ZM10 3.97512C8.61875 3.97512 7.5 5.04912 7.5 6.37512C7.5 7.70112 8.61875 8.77512 10 8.77512C11.38 8.77512 12.5 7.70112 12.5 6.37512C12.5 5.04912 11.38 3.97512 10 3.97512Z" fill="#CBCBCB"/>
        </svg>
        49500</a>
        </div>`,
        share: `<a href="#"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 4.01136V2.19318C10.9091 1.18773 11.7236 0.375 12.7273 0.375C12.9782 0.375 13.2182 0.425909 13.4345 0.518636C13.6527 0.609545 13.8491 0.742273 14.0127 0.907727L15.8309 2.72591L19.4673 6.36227C19.7964 6.69136 20 7.14591 20 7.64773C20 8.14955 19.7964 8.60409 19.4673 8.93318L15.8309 12.5695L14.0127 14.3877C13.6836 14.7168 13.2291 14.9205 12.7273 14.9205C11.7236 14.9205 10.9091 14.1059 10.9091 13.1023V11.2841C6.18909 12.7368 1.81818 15.5823 1.81818 20.375H0C0 13.6005 4.64 5.62591 10.9091 4.01136Z" fill="#CBCBCB"/>
        </svg>
        </a>`
    }
]

const cardBox1 = document.getElementById("cardbox1");
const cardBox2 = document.getElementById("cardbox2");
const cardBox3 = document.getElementById("cardbox3");
const cardBox4 = document.getElementById("cardbox4");
const cardBox5 = document.getElementById("cardbox5");
const cardBox6 = document.getElementById("cardbox6");
const cardBox7 = document.getElementById("cardbox7");

function createCards1() {

    cardData.map((postCards) => {
        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards.image}</div>

        
        <div>${postCards.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards.greenText}</p>
                ${postCards.mainText}
                ${postCards.secondText}
            </div>

            <div>
                ${postCards.devider}
                <div class="setting-007">
                    <div>
                        ${postCards.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox1.appendChild(postACard);
    });
}

function createCards2() {

    cardData.map((postCards) => {
        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards.image}</div>

        <div>${postCards.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards.greenText}</p>
                ${postCards.mainText}
                ${postCards.secondText}
            </div>

            <div>
                ${postCards.devider}
                <div class="setting-007">
                    <div>
                        ${postCards.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox2.appendChild(postACard);
    });
}

function createCards3() {

    cardData.map((postCards) => {
        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards.image}</div>

        <div>${postCards.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards.greenText}</p>
                ${postCards.mainText}
                ${postCards.secondText}
            </div>

            <div>
                ${postCards.devider}
                <div class="setting-007">
                    <div>
                        ${postCards.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox3.appendChild(postACard);
    });
}

function createCards4() {

    cardData.map((postCards) => {
        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards.image}</div>

        <div>${postCards.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards.greenText}</p>
                ${postCards.mainText}
                ${postCards.secondText}
            </div>

            <div>
                ${postCards.devider}
                <div class="setting-007">
                    <div>
                        ${postCards.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox4.appendChild(postACard);
    });
}

function createCards5() {

    cardData2.map((postCards2) => {

        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards2.image}</div>

        
        <div>${postCards2.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards2.greenText}</p>
                ${postCards2.mainText}
                ${postCards2.secondText}
            </div>

            <div>
                ${postCards2.devider}
                <div class="setting-007">
                    <div>
                        ${postCards2.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards2.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox5.appendChild(postACard);
    });
}

function createCards6() {

    cardData3.map((postCards3) => {

        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards3.image}</div>

        
        <div>${postCards3.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards3.greenText}</p>
                ${postCards3.mainText}
                ${postCards3.secondText}
            </div>

            <div>
                ${postCards3.devider}
                <div class="setting-007">
                    <div>
                        ${postCards3.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards3.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox6.appendChild(postACard);
    });
}

function createCards7() {

    cardData4.map((postCards4) => {

        const postACard = document.createElement('div');
        postACard.classList.add('setting-001');

        postACard.innerHTML = `

        <div>${postCards4.image}</div>

        
        <div>${postCards4.headText}</div>

        <div>

            <div class="setting-004">
                <p class="greenText">${postCards4.greenText}</p>
                ${postCards4.mainText}
                ${postCards4.secondText}
            </div>

            <div>
                ${postCards4.devider}
                <div class="setting-007">
                    <div>
                        ${postCards4.footerIcons}
                    </div>

                    <a href="#">
                        ${postCards4.share}
                    </a>
                    
                </div>
            </div>

        <div>

        `;


        cardBox7.appendChild(postACard);
    });
}

createCards1();
createCards2();
createCards3();
createCards4();
createCards5();
createCards6();
createCards7();


//FOOTER

const footerInfo = [
    {
        textOne: "© 2019 crowdfund. All Rights Reserved",
        textTwo: "CONTACT",
        textThree: "HELP",
        textFour: "TERMS OF USE",
        textFive: "PRIVACY POLICY",
        twitter: `
        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4008 4.36183C15.407 4.51359 15.4105 4.66624 15.4105 4.81978C15.4105 9.49032 11.9027 14.875 5.48781 14.875C3.51807 14.875 1.68488 14.2903 0.140625 13.2878C0.41371 13.3199 0.6912 13.3369 0.973095 13.3369C2.6072 13.3369 4.11093 12.7718 5.30458 11.8238C3.77794 11.7952 2.49004 10.7731 2.04694 9.36891C2.25924 9.41087 2.47771 9.43318 2.70234 9.43318C3.02035 9.43318 3.32868 9.38944 3.62114 9.3091C2.02579 8.98416 0.824219 7.55586 0.824219 5.84369C0.824219 5.82852 0.824219 5.81334 0.824219 5.79906C1.29463 6.06329 1.83199 6.22219 2.40371 6.24094C1.46817 5.60713 0.852409 4.52519 0.852409 3.29954C0.852409 2.65145 1.02419 2.04442 1.32458 1.5222C3.04502 3.66018 5.61466 5.06795 8.51289 5.21524C8.45387 4.95636 8.42304 4.68677 8.42304 4.40915C8.42304 2.45773 9.98403 0.875 11.9106 0.875C12.914 0.875 13.8204 1.30438 14.4565 1.99175C15.2511 1.83285 15.9972 1.53916 16.6711 1.13388C16.4112 1.95872 15.858 2.65145 15.1374 3.08886C15.843 3.00406 16.5152 2.81391 17.1406 2.53272C16.6729 3.24151 16.0818 3.86371 15.4008 4.36183Z" fill="black"/>
</svg>
`,

        facebook: `<svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.45966 17.875H1.91299V9.375H0.140625V6.445H1.91299V4.68661C1.91299 2.29795 2.91421 0.875 5.75603 0.875H8.12308V3.805H6.64416C5.53765 3.805 5.46356 4.21487 5.46356 4.97855L5.45966 6.445H8.14062L7.82671 9.375H5.45966V17.875Z" fill="black"/>
</svg>
`,

        youtube: `<svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.07562 10.4567L8.075 4.86407L13.4788 7.67004L8.07562 10.4567ZM19.9406 3.89495C19.9406 3.89495 19.745 2.52338 19.1456 1.91939C18.385 1.1263 17.5325 1.12257 17.1419 1.07654C14.3431 0.875 10.145 0.875 10.145 0.875H10.1362C10.1362 0.875 5.93812 0.875 3.13937 1.07654C2.74813 1.12257 1.89625 1.1263 1.135 1.91939C0.535625 2.52338 0.340625 3.89495 0.340625 3.89495C0.340625 3.89495 0.140625 5.506 0.140625 7.11644V8.62672C0.140625 10.2378 0.340625 11.8482 0.340625 11.8482C0.340625 11.8482 0.535625 13.2198 1.135 13.8238C1.89625 14.6169 2.89563 14.592 3.34063 14.6747C4.94063 14.8277 10.1406 14.875 10.1406 14.875C10.1406 14.875 14.3431 14.8688 17.1419 14.6672C17.5325 14.6206 18.385 14.6169 19.1456 13.8238C19.745 13.2198 19.9406 11.8482 19.9406 11.8482C19.9406 11.8482 20.1406 10.2378 20.1406 8.62672V7.11644C20.1406 5.506 19.9406 3.89495 19.9406 3.89495Z" fill="black"/>
        </svg>
        `
    }
]

const footerBox = document.getElementById("footerbox");

function getFooterInfo() {

    footerInfo.map((footerText) => {
        const footer = document.createElement('div');
        footer.classList.add("setting-010");
        footer.innerHTML = `
        <div>
            <p class="text-010">${footerText.textOne}</p>
        </div>

        <div class="setting-011">
            <a href="#" class="text-011">${footerText.textTwo}</a>
            <a href="#" class="text-011">${footerText.textThree}</a>
            <a href="#" class="text-011">${footerText.textFour}</a>
            <a href="#" class="text-011">${footerText.textFive}</a>
        </div>

        <div class="setting-012">
            <a href="#">${footerText.twitter}</a>
            <a href="#">${footerText.facebook}</a>
            <a href="#">${footerText.youtube}</a>
        </div>
        `;
        footerBox.appendChild(footer);
    });

}

getFooterInfo();