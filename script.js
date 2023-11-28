

async function showOptions(category) {
    const response = await fetch('gigs.json');
    const data = await response.json();

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = ''; 

    const uniqueOptions = new Set();
    data.gigs.forEach(gig => uniqueOptions.add(gig[category]));

    const optionsList = document.createElement('div');
    uniqueOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('options-list-item');

        button.addEventListener('click', () => {
            hideOptions();
            showGigsPage();  
            
        });

        optionsList.appendChild(button);
    });

    const closeButton = document.createElement('button');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', hideOptions);

    optionsContainer.appendChild(optionsList);
    optionsContainer.appendChild(closeButton);
    optionsContainer.style.display = 'block';

    
}

function hideOptions() {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.style.display = 'none';
}
function showGigsPage() {
    const homePage = document.getElementById('homePage');
    const gigsPage = document.getElementById('gigsPage');
    
    homePage.style.display = 'none';
    gigsPage.style.display = 'block';
}




function expLeft(element) {
    element.style.marginLeft = '-5em';
}

function restorePos(element) {
    element.style.marginLeft = '';
}




