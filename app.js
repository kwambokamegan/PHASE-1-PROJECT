document.addEventListener('DOMContentLoaded', () => {
    const dressList = document.getElementById('dress-list');
    const dressDisplay = document.getElementById('dress-display');
    const purchaseButton = document.getElementById('purchase-button');
    const alterationsSection = document.getElementById('alterations-section');
    const alterationsText = document.getElementById('alterations-text');
    const submitAlterationsButton = document.getElementById('submit-alterations');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartMessage = document.getElementById('cart-message');

    let selectedDress = null;
    let cartItems = [];

    // Function to fetch dress data from the server
    const fetchDresses = async () => {
        try {
            const response = await fetch('http://localhost:3000/dresses');
            if (!response.ok) {
                throw new Error('Network response was not ok');
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
        dressList.innerHTML = ''; // Clear existing list items
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
                // Display dress details on the right side
                const detailsHTML = `
                    <h3>${dress.name}</h3>
                    <img src="${dress.image}" alt="${dress.name}" class="dress-details-image">
                    <p><strong>Price:</strong> ${dress.price}</p>
                    <p><strong>Description:</strong> ${dress.description}</p>
                    <button id="purchase-button">Purchase Dress</button>
                    <div id="alterations-section">
                        <h3>Alterations Request</h3>
                        <textarea id="alterations-text" rows="4" placeholder="Enter your alteration requests..."></textarea>
                        <button id="submit-alterations">Submit Alterations</button>
                    </div>
                `;
                dressDisplay.innerHTML = detailsHTML;

                // Show purchase button and alterations section
                purchaseButton.style.display = 'block';
                alterationsSection.style.display = 'block';

                // Set selected dress
                selectedDress = dress;
            });

            dressList.appendChild(dressItem);
        });
    };

    // Event listener for purchase button
    purchaseButton.addEventListener('click', () => {
        if (selectedDress) {
            cartItems.push(selectedDress);
            updateCart();
            resetSelectedDress();
            displayCartMessage(`You have successfully purchased ${selectedDress.name}. Have a happily ever after!`);
        } else {
            displayCartMessage('Please select a dress before adding to cart.');
        }
    });

    // Event listener for submit alterations button
    submitAlterationsButton.addEventListener('click', () => {
        const alterations = alterationsText.value.trim();
        if (alterations !== '') {
            displayCartMessage(`Thank you for your alterations request for ${selectedDress.name}.`);
            // Here you could send the alterations data to your server if needed
            // Example: sendAlterations(selectedDress.id, alterations);
        } else {
            displayCartMessage('Please enter your alteration requests.');
        }
    });

    // Function to update the cart display
    const updateCart = () => {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.textContent = item.name;
            cartItem.addEventListener('click', () => {
                purchaseCartItem(item);
            });
            cartItemsContainer.appendChild(cartItem);
        });
    };

    // Function to handle purchasing a cart item
    const purchaseCartItem = (item) => {
        const index = cartItems.indexOf(item);
        if (index !== -1) {
            cartItems.splice(index, 1);
            updateCart();
            displayCartMessage(`You have successfully purchased ${item.name}. Have a happily ever after!`);
        }
    };

    // Function to reset selected dress and hide purchase/alterations section
    const resetSelectedDress = () => {
        selectedDress = null;
        dressDisplay.innerHTML = '<p>Select a dress from the list...</p>';
        purchaseButton.style.display = 'none';
        alterationsSection.style.display = 'none';
    };

    // Function to display messages in the cart message area
    const displayCartMessage = (message) => {
        cartMessage.textContent = message;
        cartMessage.style.display = 'block';
        setTimeout(() => {
            cartMessage.style.display = 'none';
        }, 3000); // Clear message after 3 seconds
    };

    // Fetch dresses from the server and render the list
    fetchDresses()
        .then(dresses => renderDressList(dresses))
        .catch(error => console.error('Error:', error));
});