document.addEventListener('DOMContentLoaded', () => {
    // Variables to store references to HTML elements
    const dressList = document.getElementById('dress-list');
    const dressDisplay = document.getElementById('dress-display');
    const purchaseButton = document.getElementById('purchase-button');
    const alterationsText = document.getElementById('alterations-text');
    const submitAlterationsButton = document.getElementById('submit-alterations');
    const cartMessage = document.getElementById('cart-message');
    const toggleModeButton = document.getElementById('toggle-mode');

    // Placeholder for selected dress
    let selectedDress = null;

    // Function to fetch dress data from the server
    const fetchDresses = async () => {
        try {
            const response = await fetch('http://localhost:3000/dresses');
            if (!response.ok) {
                throw new Error('Network Error');
            }
            const dresses = await response.json();
            return dresses;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    // Function to render dress list
    const renderDressList = (dresses) => {
        dressList.innerHTML = '';
        dresses.forEach(dress => {
            const dressItem = document.createElement('div');
            dressItem.classList.add('dress-item');
               
            const dressImage = document.createElement('img');
            dressImage.src = dress.image;
            dressImage.alt = dress.name;
            dressImage.classList.add('dress-image');

            const dressName = document.createElement('p');
            dressName.textContent = dress.name;
            dressName.classList.add('dress-name');

            dressItem.appendChild(dressImage);
            dressItem.appendChild(dressName);

            dressItem.addEventListener('click', () => {
                selectDress(dress);
            });

            dressList.appendChild(dressItem);
        });
    };

    // Function to handle dress selection
    const selectDress = (dress) => {
        selectedDress = dress;
        const detailsHTML = 
            `<h3>${dress.name}</h3>
            <img src="${dress.image}" alt="${dress.name}" class="dress-details-image">
            <p><strong>Price:</strong> ${dress.price}</p>
            <p><strong>Description:</strong> ${dress.description}</p>`;
        
        dressDisplay.innerHTML = detailsHTML;

        // Show purchase button and alterations 

        purchaseButton.style.display = 'block';
        document.getElementById('alterations-section').style.display = 'block';
    };

    // Event listener for purchase button

    purchaseButton.addEventListener('click', () => {
        if (selectedDress) {
            displayMessage(`Thank you for shopping with us. Have a happily ever after!`);
        } else {
            displayMessage('Please select a dress before purchasing.');
        }
    });

    // Event listener for submit alterations button

    submitAlterationsButton.addEventListener('click', () => {
        const alterations = alterationsText.value.trim();
        if (alterations !== '') {
            displayMessage(`You can now purchase the dress then come for it to be altered.`);
        } else {
            displayMessage('Please enter your alteration requests and dress size.');
        }
    });

    
    alterationsText.addEventListener('keydown', (event) => {
        const maxLength = 300;  // maximum length for alterations text
        const currentLength = alterationsText.value.length;

        console.log('Key pressed:', event.key);

        // Limiting the length of text input

        if (currentLength >= maxLength && event.key !== 'Backspace') {
            event.preventDefault(); 
        }
    
    });

    alterationsText.addEventListener('change', (event) => {
        console.log('Value changed:', event.target.value);
    

        const userInput = event.target.value;
        if (userInput.trim() === '') {
            alert('Please enter your alteration requests and dress size.');
        }
    });

    // display messages

    const displayMessage = (message) => {
        cartMessage.textContent = message;
        cartMessage.style.display = 'block';
        setTimeout(() => {
            cartMessage.style.display = 'none';
        }, 4000);
    };

    // Initial fetch and render t

    fetchDresses()
        .then(dresses => renderDressList(dresses))
        .catch(error => console.error('Error fetching and rendering dresses:', error));
});