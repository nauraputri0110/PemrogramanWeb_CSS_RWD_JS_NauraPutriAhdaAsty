document.querySelectorAll('.issue .title').forEach(title => {
    title.addEventListener('click', () => {
        const p = title.nextElementSibling;
        if(!p) return;
        if(getComputedStyle(p).display !== 'none'){
        if(confirm('Apakah Anda ingin menyembunyikan penjelasan ini?')){
            p.style.display = 'none';
            }
        }else {
            if(confirm('Apakah Anda ingin menampilkan penjelasan ini?')){
                p.style.display = '';
            }
        }

    });
});


const toggleModeBtn = document.getElementById('toggleModeBtn');
if(toggleModeBtn){
  toggleModeBtn.addEventListener('click', () => {
    const body = document.body;
    if(body.classList.contains('mode-rapi')){
        body.classList.remove('mode-rapi');
        body.classList.add('mode-berantakan');
    } else {
        body.classList.remove('mode-berantakan');
        body.classList.add('mode-rapi');
    }

  });
}

const showImagesBtn = document.getElementById('showImagesBtn');
if(showImagesBtn){
  showImagesBtn.addEventListener('click', () => {
    window.location.href = 'galeri.html';
  });
}

const backBtn = document.getElementById('backBtn');
if(backBtn){
  backBtn.addEventListener('click', () => {
    window.history.back();
  });
}
