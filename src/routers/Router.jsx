
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
import { ADCAPage } from "@/pages/website/courses/Computer_Center/AdcaPage";
import ADFACoursePage from "@/pages/website/courses/Computer_Center/ADFACoursePage";
import { CCBCoursePage } from "@/pages/website/courses/Computer_Center/CCBCoursePage";
import { CCCCoursePage } from "@/pages/website/courses/Computer_Center/CCCCoursePage";
import CFACoursePage from "@/pages/website/courses/Computer_Center/CFACoursePage";
import DFACoursePage from "@/pages/website/courses/Computer_Center/DFACoursePage";
import MSOfficeCoursePage from "@/pages/website/courses/Computer_Center/MSOfficeCoursePage";
import { RS_CITPage } from "@/pages/website/courses/Computer_Center/RS_CITPage";
import TallyCoursePage from "@/pages/website/courses/Computer_Center/TallyCoursePage";
import ECCECoursePage from "@/pages/website/courses/vocational_Courses/ECCECoursePage";
import FireSafetyCoursePage from "@/pages/website/courses/vocational_Courses/FireSafetyCoursePage";
import NTTCoursePage from "@/pages/website/courses/vocational_Courses/NTTCoursePage";
import SilaiCertificatePage from "@/pages/website/courses/vocational_Courses/SilaiCertificatePage";
import YTTCoursePage from "@/pages/website/courses/vocational_Courses/YTTCoursePage";
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

        {/* Computer Ceneter or courses routes */}
        <Route path="/computer-courses/rs-cit" element={<RS_CITPage />} />
        <Route path="/computer-courses/ccc" element={<CCCCoursePage />} />
        <Route path="/computer-courses/dfa" element={<DFACoursePage />} />
        <Route path="/computer-courses/tally" element={<TallyCoursePage />} />
        <Route path="/computer-courses/adca" element={<ADCAPage />} />
        <Route path="/computer-courses/ccb" element={<CCBCoursePage />} />
        <Route path="/computer-courses/adfa" element={<ADFACoursePage />} />
        <Route path="/computer-courses/cfa" element={<CFACoursePage />} />
        <Route path="/computer-courses/ms-office" element={<MSOfficeCoursePage />} />
        
        {/* vocational courses */}
        <Route path="/vocational-courses/ntt" element={<NTTCoursePage />} />
        <Route path="/vocational-courses/fire-safty" element={<FireSafetyCoursePage />} />
        <Route path="/vocational-courses/ytt" element={<YTTCoursePage />} />
        <Route path="/vocational-courses/ecce" element={<ECCECoursePage />} />
        <Route path="/vocational-courses/silai-certificate" element={<SilaiCertificatePage />} />



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