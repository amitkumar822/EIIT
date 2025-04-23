import { useEffect } from "react";
import { loadGoogleTranslate } from "@/utils/loadGoogleTranslate";

export const GoogleTranslate = () => {
  useEffect(() => {
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (!document.getElementById("google_translate_element")?.innerHTML) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,hi,bn,gu,kn,ml,mr,or,pa,ta,te,ur,ne,sd,as,ks,sa,mai,brx,mlt", // Extended Indian + Work Languages
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      loadGoogleTranslate();
    }
  }, []);

  return (
    <div
      id="google_translate_element"
      className="translate-widget scale-90 h-8 overflow-hidden"
    />
  );
};
