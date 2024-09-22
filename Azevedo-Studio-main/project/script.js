const photos = document.querySelectorAll('.photo');

// Adiciona o evento de mouseover e mouseout para aplicar a classe 'dim'
photos.forEach(photo => {
    photo.addEventListener('mouseover', () => {
        photos.forEach(p => {
            if (p !== photo) {
                p.classList.add('dim');
            }
        });
    });

    photo.addEventListener('mouseout', () => {
        photos.forEach(p => p.classList.remove('dim'));
    });
});

// Função para abrir a imagem em fullscreen
function openFullscreen(img) {
    const fullscreenDiv = document.createElement('div');
    fullscreenDiv.classList.add('fullscreen');

    const fullscreenImg = document.createElement('img');
    fullscreenImg.src = img.src;

    fullscreenDiv.appendChild(fullscreenImg);
    document.body.appendChild(fullscreenDiv);

    // Remove o fullscreen quando clicar na imagem
    fullscreenDiv.addEventListener('click', function() {
        document.body.removeChild(fullscreenDiv);
    });
}

// Lógica do menu hambúrguer
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
});
