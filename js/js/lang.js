const translations = {
  hi: {
    welcome: "ग्रीनटैग में आपका स्वागत है",
    services: "हमारी सेवाएं"
  },
  fr: {
    welcome: "Bienvenue chez Greentag",
    services: "Nos Services"
  },
  de: {
    welcome: "Willkommen bei Greentag",
    services: "Unsere Dienstleistungen"
  }
};

function changeLang(lang){
  if(!translations[lang]) return;

  document.querySelectorAll("[data-key]").forEach(el=>{
    const key = el.getAttribute("data-key");
    el.innerText = translations[lang][key];
  });
}
