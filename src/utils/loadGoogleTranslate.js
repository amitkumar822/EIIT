let scriptLoaded = false;

export const loadGoogleTranslate = () => {
  if (scriptLoaded) return;
  scriptLoaded = true;

  const script = document.createElement("script");
  script.src =
    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  document.body.appendChild(script);
};