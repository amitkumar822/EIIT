import React from 'react';
import { 
  Scissors,
  Ruler,
  Volleyball,
  Award,
  User,
  Clock,
  Syringe
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const SilaiCertificatePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Unique Hero Section with SVG Background */}
      <section className="relative bg-gradient-to-br from-pink-500 to-red-600 text-white py-24 overflow-hidden">
        {/* Decorative SVG Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1200 600" className="w-full h-full">
            <path 
              d="M0,300 C150,400 350,200 600,300 C850,400 1050,200 1200,300 L1200,600 L0,600 Z" 
              fill="white"
            />
            <path 
              d="M0,400 C150,350 350,450 600,350 C850,250 1050,350 1200,250 L1200,600 L0,600 Z" 
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>
        
        {/* Sewing Needle SVG Decoration */}
        <div className="absolute top-1/4 right-10 opacity-20 rotate-45">
          <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22l-3-3m0 0l3-3m-3 3l3 3m-3-3l3-3m0 0l3 3m-3-3l-3 3m3-3l-3-3" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Professional <span className="text-yellow-300">SILAI</span> Certificate Course
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Master the art of sewing and tailoring with our comprehensive certification program
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-400 hover:bg-yellow-300 text-red-800 px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg transform hover:scale-105">
                  Enroll Today
                </button>
                <button className="border-2 border-white hover:bg-white hover:bg-opacity-20 px-8 py-4 rounded-lg font-semibold text-lg transition">
                  Course Details
                </button>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
                <div className="relative bg-transparent text-black/70 p-8 rounded-xl border border-white border-opacity-30">
                  <Volleyball className="w-24 h-24 mx-auto mb-6 text-yellow-300" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2">Next Batch Starts</h3>
                    <p className="text-xl mb-4">June 15, 2024</p>
                    <div className="flex justify-center gap-4">
                      <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                        <Clock className="inline mr-1" /> 3 Months
                      </div>
                      <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                        <User className="inline mr-1" /> Limited Seats
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scissor SVG Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <svg 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none" 
            className="w-full h-full"
          >
            <path 
              d="M0,0 C150,60 350,0 600,60 C850,120 1050,60 1200,120 L1200,0 Z" 
              fill="white"
            />
            <path 
              d="M0,60 C150,30 350,90 600,30 C850,-30 1050,30 1200,0 L1200,120 L0,120 Z" 
              fill="white"
              opacity="0.3"
            />
          </svg>
        </div>
      </section>

      {/* What is SILAI Certificate Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-100 rounded-full z-0"></div>
                <div className="relative bg-white p-8 rounded-xl border border-gray-200 shadow-lg z-10">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                    <Scissors className="mr-3 text-red-500" size={28} />
                    What is SILAI Certificate?
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">
                    The SILAI Certificate is a professional qualification in sewing and tailoring that equips students with comprehensive skills in garment construction, pattern making, alterations, and textile knowledge.
                  </p>
                  <p className="text-lg text-gray-600">
                    This certification is recognized by the textile and fashion industry, providing graduates with the credentials needed to work professionally or start their own tailoring business.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition border-t-4 border-red-500">
                  <CardHeader>
                    <div className="bg-red-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Ruler className="text-red-600" size={24} />
                    </div>
                    <CardTitle>Practical Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Hands-on training in all aspects of sewing and tailoring</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition border-t-4 border-pink-500">
                  <CardHeader>
                    <div className="bg-pink-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Syringe className="text-pink-600" size={24} />
                    </div>
                    <CardTitle>Industry Recognition</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Certification valued by employers and clients</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition border-t-4 border-yellow-500">
                  <CardHeader>
                    <div className="bg-yellow-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Volleyball className="text-yellow-600" size={24} />
                    </div>
                    <CardTitle>Modern Techniques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Learn both traditional and contemporary methods</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition border-t-4 border-purple-500">
                  <CardHeader>
                    <div className="bg-purple-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Award className="text-purple-600" size={24} />
                    </div>
                    <CardTitle>Career Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pathway to employment or entrepreneurship</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            <Volleyball className="inline mr-3 text-red-500" size={28} />
            Course Highlights
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative bg-white rounded-lg p-8 h-full border border-gray-200">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Scissors className="text-red-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Basic to Advanced Stitching</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>All hand stitches</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Machine stitching techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Seam finishes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span>Zippers and fasteners</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative bg-white rounded-lg p-8 h-full border border-gray-200">
                <div className="bg-pink-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Ruler className="text-pink-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Pattern Making & Drafting</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Body measurements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Basic block creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Pattern adaptation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">•</span>
                    <span>Grading techniques</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-red-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition"></div>
              <div className="relative bg-white rounded-lg p-8 h-full border border-gray-200">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                  <Syringe className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Garment Construction</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Western wear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Traditional outfits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Children's clothing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Home textiles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections (Curriculum, Testimonials, FAQ) would follow similar patterns as the ECCE page */}
      
    </div>
  );
};

export default SilaiCertificatePage;