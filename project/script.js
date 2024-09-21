const photos = document.querySelectorAll('.photo');

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

        function openFullscreen(img) {
            const fullscreenDiv = document.createElement('div');
            fullscreenDiv.classList.add('fullscreen');

            const fullscreenImg = document.createElement('img');
            fullscreenImg.src = img.src;

            fullscreenDiv.appendChild(fullscreenImg);
            document.body.appendChild(fullscreenDiv);

            fullscreenDiv.addEventListener('click', function() {
                document.body.removeChild(fullscreenDiv);
            });
        }