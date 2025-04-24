
import App from "@/App";
import NotFoundPage from "@/components/NotFoundPage";
import AboutUs from "@/components/website/Home/AboutUs";
import AmritMahotsavPage from "@/components/website/Home/Article/AmritMahotsavPage";
import EkBharatShreshthaBharatPage from "@/components/website/Home/Article/EkBharatShreshthaBharatPage";
import FitIndiaMovementPage from "@/components/website/Home/Article/FitIndiaMovementPage";
import G20India2023Page from "@/components/website/Home/Article/G20India2023Page";
import NationalEducationPolicy from "@/components/website/Home/Article/NationalEducationPolicy";
import LibraryPage from "@/components/website/Home/LibraryPage";
import LoginPage from "@/components/website/Home/Login";
import { ADCAPage } from "@/pages/website/courses/AdcaPage";
import TallyCoursePage from "@/pages/website/courses/TallyCoursePage";
import ContactUs from "@/pages/website/home/ContactUs";
import FacilitiesPage from "@/pages/website/home/FacilitiesPage";
import HomePage from "@/pages/website/home/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

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

        {/* All Courses routes */}
        <Route path="/computer-courses/adca" element={<ADCAPage />} />
        <Route path="/computer-courses/tally" element={<TallyCoursePage />} />



        {/* Top Badge Banner routers */}
        <Route path="/amrit-mahotsav-article" element={<AmritMahotsavPage />} />
        <Route path="/national-education-policy" element={<NationalEducationPolicy />} />
        <Route path="/ek-bharat" element={<EkBharatShreshthaBharatPage />} />
        <Route path="/fit-india" element={<FitIndiaMovementPage />} />
        <Route path="/g-20-india" element={<G20India2023Page />} />

        <Route path="/*" element={<NotFoundPage />} />
      </Route>
    </>
  )
);

export { router };