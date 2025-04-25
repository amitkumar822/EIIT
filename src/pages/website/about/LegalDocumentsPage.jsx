import React from "react";
import { motion } from "framer-motion";
import { FileText, Building2, GraduationCap } from "lucide-react";
import udyam_reg from "./document/UdyamRegistrationCertificate.pdf";
import rs_cit_reg from "./document/rs-cit.png";

export function LegalDocumentsPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-500 text-white">
        {/* Decorative Top Glow */}
        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-purple-400 opacity-30 rounded-full blur-[120px] pointer-events-none z-0" />

        {/* Main Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Official Legal Documents
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-xl text-white/90"
          >
            Authentic Certifications and Legal Registrations of <br />
            <span className="font-semibold text-white">
              EduSphere Institute of Information Technology (EIIT)
            </span>
          </motion.p>
        </div>

        {/* Animated SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path
              fill="white"
              fillOpacity="0.2"
              d="M0,224L60,197.3C120,171,240,117,360,117.3C480,117,600,171,720,181.3C840,192,960,160,1080,133.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Official Certifications
            </h2>
            <p className="text-lg text-gray-600">
              EduSphere Institute of Information Technology holds the following
              government-recognized certifications and authorizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* MSME Registration Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-md overflow-hidden border border-indigo-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                    <Building2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    MSME Registration
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Registration Number:</span>{" "}
                      UDYAM-RJ-11-0021750
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Date of Registration:</span>{" "}
                      04/10/2022
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Enterprise Type:</span>{" "}
                      Micro
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-indigo-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Major Activity:</span>{" "}
                      Services (Education & IT)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-100 px-6 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-indigo-800">
                  Ministry of MSME, Govt. of India
                </span>
              </div>
            </motion.div>

            {/* RKCL Authorization Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-md overflow-hidden border border-green-100"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-green-100 p-3 rounded-lg text-green-600">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    RKCL Authorization
                  </h3>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Center Code:</span> 24290164
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Valid Until:</span>{" "}
                      31/12/2025
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Program:</span> RS CIT
                      (Rajasthan State Certificate in IT)
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <svg
                        className="w-4 h-4 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                    <p>
                      <span className="font-medium">Status:</span> Authorized
                      I.T. Gyan Kendra (ITGK)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-100 px-6 py-3 flex items-center justify-between">
                <span className="text-sm font-medium text-green-800">
                  Rajasthan Knowledge Corporation Ltd.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Institution Details
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive information about our registered entity and
              operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">
                    Official Address
                  </h4>
                  <p className="text-gray-600">
                    Pushpa Sarawagi Ki Haveli, Ward No - 06, Old Market Main
                    Road, Sidhmukh, Churu, Rajasthan - 331701
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Phone</h4>
                  <p className="text-gray-600">+91 9521477879</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Email</h4>
                  <p className="text-gray-600">eduspheresidhmukh@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">
                    Bank Details
                  </h4>
                  <p className="text-gray-600">
                    PNB Bank
                    <br />
                    A/C: 1413102100000247
                    <br />
                    IFSC: PUNB0141310
                  </p>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg text-indigo-600">
                  <FileText size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Business Information
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">
                    Date of Incorporation
                  </h4>
                  <p className="text-gray-600">18th July, 2019</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">Proprietor</h4>
                  <p className="text-gray-600">Shri Sanjay Datt Singh</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">PAN Number</h4>
                  <p className="text-gray-600">FDYPS6245F</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">
                    Social Category
                  </h4>
                  <p className="text-gray-600">SC (Scheduled Caste)</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-1">NIC Codes</h4>
                  <p className="text-gray-600">
                    62099 - IT Services
                    <br />
                    85221 - Technical Education
                    <br />
                    85222 - Vocational Education
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Document display */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={rs_cit_reg}
          width="100%"
          height="680px"
          className="rounded-xl shadow-md"
        />

        <iframe
          src={`${udyam_reg}#toolbar=0&navpanes=0&scrollbar=0`}
          width="100%"
          height="680px"
          className="rounded-xl shadow-md md:flex hidden"
        />
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  About EduSphere Institute
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    EduSphere Institute of Information Technology (EIIT) is a
                    premier technical education provider in Rajasthan, offering
                    vocational training and IT education programs. Registered as
                    a Micro Enterprise with the Ministry of MSME, Government of
                    India, and authorized by Rajasthan Knowledge Corporation
                    Ltd. as an I.T. Gyan Kendra.
                  </p>
                  <p>
                    Our institution is committed to providing quality education
                    in computer programming and technical vocational education,
                    with a special focus on making IT education accessible to
                    all sections of society.
                  </p>
                  <p>
                    Located in Sidhmukh, Churu district of Rajasthan, we serve
                    as a hub for digital literacy and skill development in the
                    region.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <svg
                  viewBox="0 0 500 500"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-auto"
                >
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#gradient)"
                    d="M50,100 Q125,200 200,150 Q275,100 350,200 Q425,300 500,200 L500,500 L0,500 Z"
                  />
                  <path
                    fill="white"
                    d="M100,150 Q175,50 250,100 Q325,150 400,100 L400,300 L100,300 Z"
                  />
                  <text
                    x="250"
                    y="200"
                    fontFamily="Arial"
                    fontSize="24"
                    fontWeight="bold"
                    fill="#4F46E5"
                    textAnchor="middle"
                  >
                    EIIT
                  </text>
                  <text
                    x="250"
                    y="230"
                    fontFamily="Arial"
                    fontSize="14"
                    fill="#6B7280"
                    textAnchor="middle"
                  >
                    Since 2019
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
