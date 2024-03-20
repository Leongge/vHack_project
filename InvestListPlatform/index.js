const childContainers = document.querySelectorAll('.child-container');

childContainers.forEach(container => {
    container.addEventListener('mouseover', () => {
        const description = container.dataset.title;
        const descriptionText = document.querySelector('.description-title');
        descriptionText.textContent = description;
    });

    container.addEventListener('mouseout', () => {
        const defaultDescription = container.dataset.description;
        const descriptiontext = document.querySelector('.description-text');
        descriptiontext.textContent = defaultDescription;
    });
});

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get('value');

    if (value == 'RIP') {
        document.getElementById('pageTitle').textContent = "Retail Investment Platform";
        document.getElementById('tiger').style.display = "flex";
        document.getElementById('rakuten').style.display = "flex";
    } else if (value == 'MIP') {
        document.getElementById('pageTitle').textContent = "Managed Investment Platform";
        document.getElementById('stash').style.display = "flex";
    } else if (value == "BIP") {
        document.getElementById('pageTitle').textContent = "Bank Investment Platform";
        document.getElementById('bank').style.display = "flex";
    }
};