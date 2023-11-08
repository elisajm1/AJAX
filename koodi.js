function getRandomDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dogImage');
            dogImage.src = data.message;
        })
        .catch(error => {
            console.error('Error fetching dog image: ', error);
        });
}
const getRandomDogButton = document.getElementById('getRandomDog');
getRandomDogButton.addEventListener('click', getRandomDogImage);
getRandomDogImage();
