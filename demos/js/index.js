function track(e) {
    if (!LA) return;
    const target = e.srcElement || e.target;
    const data = {
      name: target.innerHTML
    }
    LA && LA.track('home_nav_click', data);
  }
  
  document.querySelector('.main').addEventListener('click', track, false)