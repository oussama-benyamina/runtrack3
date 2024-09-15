function updateFooterColor() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
    
    const footer = document.getElementById('footer');
    footer.style.backgroundColor = `rgb(${255 * scrollPercentage / 100}, 0, 0)`;
}

window.addEventListener('scroll', updateFooterColor);