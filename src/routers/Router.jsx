
import App from "@/App";
import ContactUs from "@/pages/home/ContactUs";
import FacilitiesPage from "@/pages/home/FacilitiesPage";
import HomePage from "@/pages/home/homePage";
import LibraryPage from "@/components/Home/LibraryPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AboutUs from "@/components/Home/AboutUs";
import LoginPage from "@/components/Home/Login";
import AmritMahotsavPage from "@/components/Home/Article/AmritMahotsavPage";
import NationalEducationPolicy from "@/components/Home/Article/NationalEducationPolicy";
import EkBharatShreshthaBharatPage from "@/components/Home/Article/EkBharatShreshthaBharatPage";
import FitIndiaMovementPage from "@/components/Home/Article/FitIndiaMovementPage";
import G20India2023Page from "@/components/Home/Article/G20India2023Page";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/facilites" element={<FacilitiesPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/about-us" element={<AboutUs />} />



        <Route path="/amrit-mahotsav-article" element={<AmritMahotsavPage />} />
        <Route path="/national-education-policy" element={<NationalEducationPolicy />} />
        <Route path="/ek-bharat" element={<EkBharatShreshthaBharatPage />} />
        <Route path="/fit-india" element={<FitIndiaMovementPage />} />
        <Route path="/g-20-india" element={<G20India2023Page />} />
      </Route>
    </>
  )
);

export { router };