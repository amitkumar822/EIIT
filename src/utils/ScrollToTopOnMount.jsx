import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: "auto" for instant scroll
    });
  }, [pathname]);

  return null;
}




// import { useEffect } from "react";

// export default function ScrollToTopOnMount() {
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth" // Optional: use "auto" if you don't want smooth scroll
//     });
//   }, []);

//   return null; // This component doesn’t render anything
// }
