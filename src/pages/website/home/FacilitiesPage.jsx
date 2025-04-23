import { motion } from 'framer-motion';
import { 
  Wifi, Clock, Monitor, BookOpen, Headphones, Coffee, 
  Users, Printer, Bookmark, Mic, Tablet, HardDrive 
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FacilitiesPage = () => {
  const facilities = [
    {
      title: "Digital Reading Lounge",
      description: "Comfortable seating with iPad and e-reader access to thousands of digital publications.",
      icon: <Tablet className="w-8 h-8 text-indigo-600" />,
      stats: "24 seats available",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&auto=format&fit=crop"
    },
    {
      title: "Silent Study Zones",
      description: "Soundproof areas for focused individual study with adjustable lighting.",
      icon: <Headphones className="w-8 h-8 text-indigo-600" />,
      stats: "6 private pods",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&auto=format&fit=crop"
    },
    {
      title: "Group Study Rooms",
      description: "Bookable rooms with smart boards and video conferencing equipment.",
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      stats: "12 rooms (2-8 people)",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop"
    },
    {
      title: "High-Tech Workstations",
      description: "Dual monitor setups with specialized software (Adobe Creative Cloud, MATLAB, etc.)",
      icon: <Monitor className="w-8 h-8 text-indigo-600" />,
      stats: "48 workstations",
      image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=600&auto=format&fit=crop"
    },
    {
      title: "Media Production Studio",
      description: "Recording booth with professional audio/video equipment for student projects.",
      icon: <Mic className="w-8 h-8 text-indigo-600" />,
      stats: "Reservation required",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&auto=format&fit=crop"
    },
    {
      title: "24/7 Access Area",
      description: "Secure after-hours study space with biometric entry for registered students.",
      icon: <Clock className="w-8 h-8 text-indigo-600" />,
      stats: "Open to all students",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&auto=format&fit=crop"
    }
  ];

  const amenities = [
    { name: "Free WiFi", icon: <Wifi className="w-6 h-6" />, speed: "1Gbps" },
    { name: "Print/Scan/Copy", icon: <Printer className="w-6 h-6" />, note: "500 free pages/semester" },
    { name: "Book Lockers", icon: <Bookmark className="w-6 h-6" />, note: "Overnight storage" },
    { name: "Data Visualization Wall", icon: <HardDrive className="w-6 h-6" />, note: "Interactive 8K display" },
    { name: "Café", icon: <Coffee className="w-6 h-6" />, note: "Open until 10pm" },
    { name: "Reference Collection", icon: <BookOpen className="w-6 h-6" />, note: "50,000+ volumes" }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* SVG Background Elements */}
      <svg 
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern 
            id="facility-pattern" 
            width="100" 
            height="100" 
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <rect width="50" height="50" fill="rgba(99, 102, 241, 0.1)" />
            <rect x="50" y="50" width="50" height="50" fill="rgba(99, 102, 241, 0.1)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#facility-pattern)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Library Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art learning spaces designed to support all your academic needs and collaborative projects.
          </p>
        </motion.div>

        {/* Main Facilities Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full overflow-hidden group border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/90 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    {facility.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{facility.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {facility.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-indigo-600 font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {facility.stats}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Additional Amenities
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                >
                  <div className="p-3 mb-3 bg-indigo-100 rounded-full text-indigo-600">
                    {amenity.icon}
                  </div>
                  <h4 className="font-medium text-gray-800 mb-1">{amenity.name}</h4>
                  <p className="text-xs text-gray-500">{amenity.speed || amenity.note}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need help finding the right space?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our staff can help you reserve facilities or recommend the perfect study environment for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full px-8">
              Book a Study Room
            </Button>
            <Button variant="outline" className="rounded-full px-8 border-indigo-600 text-indigo-600">
              Take Virtual Tour
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesPage;