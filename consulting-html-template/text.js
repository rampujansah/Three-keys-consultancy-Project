(() => {
    const wordArray = [
        'Global HR Consultancy', 
        'Management Consultancy', 
        'Services Broking', 
        'Special Services For NRIs'
    ];
    const element = document.querySelector('p');
    let wordIndex = 1;

    const resetAnimation = () => element.classList.remove('flip');

    setInterval(() => {
        element.classList.add('flip');
        element.textContent = wordArray[wordIndex];
        wordIndex = (wordIndex + 1) % wordArray.length;
        setTimeout(resetAnimation, 1000);
    }, 3000);
})();