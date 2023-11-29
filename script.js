

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
            showGigsPage(category, option, data);  
            
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

function showGigsPage(category, selectedOption, data) {
    const homePage = document.getElementById('homePage');
    const gigsPage = document.getElementById('gigsPage');
    const gigsPageContainer = document.getElementById('gigsPageContainer');

    homePage.style.display = 'none';
    gigsPage.style.display = 'block';
    gigsPageContainer.innerHTML = '';

    const filteredGigs = data.gigs.filter(gig => gig[category] === selectedOption); // Filter gigs by selected category and option

    filteredGigs.forEach(gig => {
        const gigElement = document.createElement('div');
        gigElement.classList.add('gig-element');

        const imageDiv = document.createElement('div');
        const image = document.createElement('img');
        image.src = `Images/${gig.imageFileName}`; // Assuming each gig object has an "imageFileName" property
        image.alt = gig.artist; // Set alt text for accessibility
        imageDiv.appendChild(image);
        gigElement.appendChild(imageDiv);
        
        const artistDiv = document.createElement('div');
        artistDiv.textContent = gig.artist;
        artistDiv.classList.add('gig-detail');
        gigElement.appendChild(artistDiv);

        const dateDiv = document.createElement('div');
        dateDiv.textContent = gig.date;
        dateDiv.classList.add('gig-detail');
        gigElement.appendChild(dateDiv);

        const venueDiv = document.createElement('div');
        venueDiv.textContent = gig.venue;
        venueDiv.classList.add('gig-detail');
        gigElement.appendChild(venueDiv);

        const priceDiv = document.createElement('div');
        priceDiv.textContent = gig.price;
        priceDiv.classList.add('gig-detail');
        gigElement.appendChild(priceDiv);
        
        gigsPageContainer.appendChild(gigElement);
    });


}

function hideOptions() {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.style.display = 'none';
}


function expLeft(element) {
    element.style.marginLeft = '-5em';
}

function restorePos(element) {
    element.style.marginLeft = '';
}




