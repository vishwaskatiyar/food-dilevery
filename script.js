function getRandomTime() {
    return Math.floor(Math.random() * 5000) + 2000;
}

function getRandomOrderId() {
    return Math.floor(Math.random() * 10000) + 100;
}

document.getElementById('orderButton').addEventListener('click', function () {
    const selectedItems = [];
    const checkBoxes = document.getElementsByName('foodItem');

    checkBoxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            selectedItems.push(checkbox.value);
        }
    });

    if (selectedItems.length === 0) {
        alert("Please select at least one item");
        return;
    }

    const orderButton = document.getElementById('orderButton');
    orderButton.disabled = true;

    const orderIdElement = document.getElementById('orderId');
    const orderIdValueElement = document.getElementById('orderIdValue');

    orderIdElement.style.display = 'none';

    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, getRandomTime())
    });

    promise.then(function () {
        const orderId = getRandomOrderId();
        orderIdValueElement.textContent = orderId;
        orderIdElement.style.display = 'block';

        const foodImageContainer = document.getElementById("foodImageContainer");
        foodImageContainer.innerHTML = "";

        selectedItems.forEach(function (selectedItem) {
            const foodImage = document.createElement('img');
            foodImage.src = getImageSrc(selectedItem);
            foodImageContainer.appendChild(foodImage);
        });

        orderButton.disabled = false;
    });
});

function getImageSrc(item) {
    switch (item) {
        case 'Burger':
            return 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww';
        case 'Fries':
            return 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJpZXN8ZW58MHx8MHx8fDA%3D';
        case 'Drink':
            return 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHJpbmtzfGVufDB8fDB8fHww';
        default:
            return 'https://via.placeholder.com/300';
    }
}
