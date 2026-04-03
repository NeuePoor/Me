export function initHeader(CONFIG) {
  const gif = document.getElementById('ui-logo-gif');
  const text = document.getElementById('ui-logo-text');
  const nav = document.getElementById('ui-nav');
  
  text.innerText = CONFIG.header.logo.text;
  gif.src = CONFIG.header.logo.gif;
  
  gif.onload = () => { 
    gif.style.opacity = "1"; 
    text.style.opacity = "0"; 
  };
  
  gif.onerror = () => { 
    gif.style.display = "none"; 
    text.style.setProperty('opacity', '1', 'important'); 
  };
  
  gif.onclick = () => { 
    window.location.href = CONFIG.header.logo.link; 
  };
  
  nav.innerHTML = CONFIG.header.nav.map(n => 
    `<a href="${n.link}" class="fl-nav__link">${n.name}</a>`
  ).join('');
}
