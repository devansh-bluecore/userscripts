const emailConsentCheckbox  =   document.querySelector('[jsname="MPu53c"]');
const ticketIDInput         =   document.querySelector('input[jsname="YPqjbf"]');
const qaSpecialistRadio     =   document.querySelector('.SG0AAe');
const campaignNumberInput   =   document.querySelector('div[data-params*="Number of Campaigns"] input');

emailConsentCheckbox.click();

ticketIDInput.nextElementSibling.style.display = 'none';
ticketIDInput.value = 'CAM-';

qaSpecialistRadio.classList.add('cam-radio-row');
campaignNumberInput.setAttribute('type', 'number');

const emailElements = document.querySelectorAll('.EbMsme');

const firstNames = Array.from(emailElements).map(element => {
    const email = element.innerText.trim();

    if (!email) return null;

    const localPart = email.split('@')[0];
    const rawName = localPart.split('.')[0];
	console.log(rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase());
    return rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
}).filter(Boolean);
console.log('testing 1234...')
