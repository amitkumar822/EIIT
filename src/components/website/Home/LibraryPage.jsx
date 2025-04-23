import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, BookOpen, Bookmark, Clock, Star, ChevronRight, 
  Menu, X, Filter, ArrowRight, User, Home, BookText, 
  GraduationCap, Code, Database, Cpu, Paintbrush, FunctionSquare 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const LibraryPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Categories with icons
  const categories = [
    { name: 'All', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Computer Science', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Web Development', icon: <Code className="w-4 h-4" /> },
    { name: 'Data Science', icon: <Database className="w-4 h-4" /> },
    { name: 'AI', icon: <GraduationCap className="w-4 h-4" /> },
    { name: 'Programming', icon: <FunctionSquare className="w-4 h-4" /> },
    { name: 'Design', icon: <Paintbrush className="w-4 h-4" /> },
    { name: 'Mathematics', icon: <FunctionSquare className="w-4 h-4" /> }
  ];

  // Dummy books data for each category
  const booksData = {
    'Computer Science': [
      {
        id: 1,
        title: 'Computer Science Distilled',
        author: 'Wladston Ferreira Filho',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=500&auto=format&fit=crop',
        pages: 180,
        year: 2017,
        description: 'Learn the science of computers without the clutter'
      },
      {
        id: 2,
        title: 'The Algorithm Design Manual',
        author: 'Steven S. Skiena',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&auto=format&fit=crop',
        pages: 730,
        year: 2020,
        description: 'Practical guide to algorithm design'
      }
    ],
    'Web Development': [
      {
        id: 3,
        title: 'Eloquent JavaScript',
        author: 'Marijn Haverbeke',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop',
        pages: 450,
        year: 2018,
        description: 'Modern introduction to programming'
      },
      {
        id: 4,
        title: 'You Don\'t Know JS Yet',
        author: 'Kyle Simpson',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop',
        pages: 280,
        year: 2020,
        description: 'Deep dive into JavaScript core mechanisms'
      }
    ],
    'Data Science': [
      {
        id: 5,
        title: 'Python for Data Analysis',
        author: 'Wes McKinney',
        rating: 4.5,
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&auto=format&fit=crop',
        pages: 520,
        year: 2022,
        description: 'Data manipulation with pandas, NumPy, and Jupyter'
      },
      {
        id: 6,
        title: 'The Hundred-Page Machine Learning Book',
        author: 'Andriy Burkov',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop',
        pages: 160,
        year: 2019,
        description: 'Concise introduction to machine learning'
      }
    ],
    'AI': [
      {
        id: 7,
        title: 'Artificial Intelligence: A Modern Approach',
        author: 'Stuart Russell, Peter Norvig',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop',
        pages: 1136,
        year: 2020,
        description: 'The standard AI textbook used in universities'
      },
      {
        id: 8,
        title: 'Deep Learning',
        author: 'Ian Goodfellow, Yoshua Bengio',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1629909613654-28e377c0b8c0?w=500&auto=format&fit=crop',
        pages: 800,
        year: 2016,
        description: 'Comprehensive textbook on deep learning'
      }
    ],
    'Programming': [
      {
        id: 9,
        title: 'Clean Code',
        author: 'Robert C. Martin',
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop',
        pages: 464,
        year: 2008,
        description: 'Handbook of agile software craftsmanship'
      },
      {
        id: 10,
        title: 'The Pragmatic Programmer',
        author: 'Andrew Hunt, David Thomas',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop',
        pages: 352,
        year: 2019,
        description: 'Your journey to mastery'
      }
    ],
    'Design': [
      {
        id: 11,
        title: 'Don\'t Make Me Think',
        author: 'Steve Krug',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=500&auto=format&fit=crop',
        pages: 216,
        year: 2014,
        description: 'Common sense approach to web usability'
      },
      {
        id: 12,
        title: 'The Design of Everyday Things',
        author: 'Don Norman',
        rating: 4.6,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop',
        pages: 368,
        year: 2013,
        description: 'Revised and expanded edition'
      }
    ],
    'Mathematics': [
      {
        id: 13,
        title: 'Introduction to Linear Algebra',
        author: 'Gilbert Strang',
        rating: 4.7,
        image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=500&auto=format&fit=crop',
        pages: 584,
        year: 2016,
        description: 'Fundamental concepts for machine learning'
      },
      {
        id: 14,
        title: 'Concrete Mathematics',
        author: 'Ronald Graham, Donald Knuth',
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop',
        pages: 672,
        year: 1994,
        description: 'Foundation for computer science'
      }
    ]
  };

  // Get books based on active category
  const getFilteredBooks = () => {
    if (activeCategory === 'All') {
      return Object.values(booksData).flat();
    }
    return booksData[activeCategory] || [];
  };

  const filteredBooks = getFilteredBooks();

  const popularCategories = [
    { name: 'Web Development', count: 128, icon: <Code className="w-5 h-5" /> },
    { name: 'Data Science', count: 95, icon: <Database className="w-5 h-5" /> },
    { name: 'Artificial Intelligence', count: 87, icon: <Cpu className="w-5 h-5" /> },
    { name: 'Programming', count: 112, icon: <FunctionSquare className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Complex SVG Background */}
      <svg 
        className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="0.8" />
          </pattern>
          <radialGradient id="gradient1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(167, 139, 250, 0.1)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </radialGradient>
          <radialGradient id="gradient2" cx="30%" cy="70%" r="50%" fx="30%" fy="70%">
            <stop offset="0%" stopColor="rgba(236, 72, 153, 0.1)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
          </radialGradient>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)" />
        <circle cx="20%" cy="30%" r="300" fill="url(#gradient1)" />
        <circle cx="80%" cy="70%" r="400" fill="url(#gradient2)" />
        
        {/* Floating abstract shapes */}
        <motion.path
          d="M100,100 Q200,50 300,100 T500,100"
          fill="none"
          stroke="rgba(129, 140, 248, 0.1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.3 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>

      

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        {/* Hero Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              University Developer Library
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Access thousands of technical books, research papers, and resources for computer science students and developers.
            </p>
            
            <motion.div 
              className="relative max-w-xl mx-auto"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <Input
                placeholder="Search for books, authors, or topics..."
                className="pl-12 pr-4 py-6 rounded-full shadow-sm border-gray-300 focus-visible:ring-indigo-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 rounded-full px-6">
                Search
              </Button>
            </motion.div>
          </motion.div>
        </section>

        {/* Categories Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <motion.h2 
              className="text-2xl font-bold text-gray-800"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              Browse Categories
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="ghost" className="text-indigo-600">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex space-x-3">
              {categories.map((category) => (
                <motion.div
                  key={category.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={activeCategory === category.name ? 'default' : 'outline'}
                    className={`whitespace-nowrap rounded-full gap-2 ${activeCategory === category.name ? 'bg-indigo-600' : ''}`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.icon}
                    {category.name}
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Books Grid Section */}
        <section className="mb-16">
          <motion.h2 
            className="text-2xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {activeCategory === 'All' ? 'All Books' : activeCategory}
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <AnimatePresence>
              {filteredBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={book.image} 
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute bottom-2 right-2">
                          <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                            {book.year}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg line-clamp-2">{book.title}</CardTitle>
                      <CardDescription className="mt-1 line-clamp-1">{book.author}</CardDescription>
                      <div className="flex items-center mt-3">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-medium ml-1">{book.rating}</span>
                        <span className="text-sm text-gray-500 ml-2">{book.pages} pages</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">{book.description}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button variant="outline" className="w-full">
                        <BookOpen className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Popular Categories Section */}
        <section className="mb-16">
          <motion.h2 
            className="text-2xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Popular Categories
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {popularCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.8 }}
                whileHover={{ y: -5 }}
              >
                <Card className="hover:shadow-md transition-shadow border-0 bg-white/90 backdrop-blur-sm">
                  <CardHeader className="flex-row items-center space-x-3 space-y-0">
                    <motion.div 
                      className="p-3 rounded-full bg-indigo-100 text-indigo-600"
                      whileHover={{ rotate: 15 }}
                    >
                      {category.icon}
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.count} books</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="link" className="text-indigo-600 px-0">
                      Explore <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section 
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {/* Floating SVG elements */}
          <svg 
            className="absolute top-0 left-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z"
              fill="white"
              initial={{ pathOffset: 1 }}
              animate={{ pathOffset: 0 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              Ready to expand your knowledge?
            </motion.h2>
            <motion.p 
              className="text-indigo-100 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              Join thousands of students and developers who are advancing their skills with our library resources.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
                Browse Collection
              </Button>
              <Button variant="outline" className="text-black border-white hover:bg-white/10">
                Learn More
              </Button>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-white border-t relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="text-indigo-600 w-6 h-6" />
                <span className="font-bold text-xl">DevLibrary</span>
              </div>
              <p className="text-gray-600">
                The premier digital library for computer science students and developers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Books</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Categories</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">My Shelf</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Web Development</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Data Science</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">AI & ML</a></li>
                <li><a href="#" className="text-gray-600 hover:text-indigo-600">Programming</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-600">University Library</li>
                <li className="text-gray-600">123 Campus Drive</li>
                <li className="text-gray-600">library@university.edu</li>
                <li className="text-gray-600">(123) 456-7890</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} University DevLibrary. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default LibraryPage;


// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Search, BookOpen, Bookmark, Clock, Star, ChevronRight, 
//   Menu, X, Filter, ArrowRight, User, Home, BookText, GraduationCap 
// } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';

// const LibraryPage = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('All');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Sample data
//   const categories = [
//     'All', 'Computer Science', 'Web Development', 'Data Science', 
//     'Artificial Intelligence', 'Programming', 'Design', 'Mathematics'
//   ];

//   const featuredBooks = [
//     {
//       id: 1,
//       title: 'Clean Code',
//       author: 'Robert C. Martin',
//       category: 'Programming',
//       rating: 4.8,
//       image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop',
//       progress: 65,
//       pages: 320,
//       currentPage: 208
//     },
//     {
//       id: 2,
//       title: 'Designing Data-Intensive Applications',
//       author: 'Martin Kleppmann',
//       category: 'Data Science',
//       rating: 4.9,
//       image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop',
//       progress: 30,
//       pages: 600,
//       currentPage: 180
//     },
//     // Add more books...
//   ];

//   const recentBooks = [
//     {
//       id: 3,
//       title: 'React Explained',
//       author: 'Sophie Alpert',
//       category: 'Web Development',
//       rating: 4.7,
//       image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop'
//     },
//     // Add more books...
//   ];

//   const popularCategories = [
//     { name: 'Web Development', count: 128, icon: <BookText className="w-5 h-5" /> },
//     { name: 'Machine Learning', count: 95, icon: <GraduationCap className="w-5 h-5" /> },
//     // Add more categories...
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
//       {/* SVG Background Elements */}
//       <svg className="fixed top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
//         <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
//           <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(199, 210, 254, 0.3)" strokeWidth="0.5" />
//         </pattern>
//         <rect width="100%" height="100%" fill="url(#grid)" />
//       </svg>

//       {/* Header */}
//       <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
//         <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//           <div className="flex items-center space-x-2">
//             <BookOpen className="text-indigo-600 w-6 h-6" />
//             <span className="font-bold text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               DevLibrary
//             </span>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-6">
//             <a href="#" className="text-indigo-600 font-medium">Home</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Books</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Categories</a>
//             <a href="#" className="text-gray-600 hover:text-indigo-600 transition">My Shelf</a>
//           </nav>

//           <div className="hidden md:flex items-center space-x-4">
//             <Button variant="ghost" className="rounded-full">
//               <User className="w-5 h-5" />
//             </Button>
//             <Button className="bg-indigo-600 hover:bg-indigo-700 rounded-full">
//               Sign In
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden p-2 rounded-md text-gray-600"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="md:hidden bg-white shadow-lg rounded-b-lg"
//           >
//             <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
//               <a href="#" className="text-indigo-600 font-medium py-2">Home</a>
//               <a href="#" className="text-gray-600 py-2">Books</a>
//               <a href="#" className="text-gray-600 py-2">Categories</a>
//               <a href="#" className="text-gray-600 py-2">My Shelf</a>
//               <div className="flex space-x-3 pt-2">
//                 <Button variant="outline" className="flex-1">
//                   Sign Up
//                 </Button>
//                 <Button className="flex-1 bg-indigo-600 hover:bg-indigo-700">
//                   Sign In
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-4 pt-24 pb-12">
//         {/* Hero Section */}
//         <section className="mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center max-w-3xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//               University Developer Library
//             </h1>
//             <p className="text-lg text-gray-600 mb-8">
//               Access thousands of technical books, research papers, and resources for computer science students and developers.
//             </p>
            
//             <div className="relative max-w-xl mx-auto">
//               <Input
//                 placeholder="Search for books, authors, or topics..."
//                 className="pl-12 pr-4 py-6 rounded-full shadow-sm border-gray-300 focus-visible:ring-indigo-500"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//               <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 rounded-full px-6">
//                 Search
//               </Button>
//             </div>
//           </motion.div>
//         </section>

//         {/* Categories Section */}
//         <section className="mb-16">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Browse Categories</h2>
//             <Button variant="ghost" className="text-indigo-600">
//               View all <ChevronRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
          
//           <div className="flex overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
//             <div className="flex space-x-3">
//               {categories.map((category) => (
//                 <Button
//                   key={category}
//                   variant={activeCategory === category ? 'default' : 'outline'}
//                   className={`whitespace-nowrap rounded-full ${activeCategory === category ? 'bg-indigo-600' : ''}`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   {category}
//                 </Button>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Currently Reading Section */}
//         <section className="mb-16">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Currently Reading</h2>
//             <Button variant="ghost" className="text-indigo-600">
//               View all <ChevronRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {featuredBooks.map((book) => (
//               <motion.div
//                 key={book.id}
//                 whileHover={{ y: -5 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Card className="h-full flex flex-col overflow-hidden">
//                   <CardHeader className="flex-row items-start space-x-4 space-y-0">
//                     <img 
//                       src={book.image} 
//                       alt={book.title}
//                       className="w-24 h-32 object-cover rounded-md shadow-sm"
//                     />
//                     <div>
//                       <CardTitle className="text-lg">{book.title}</CardTitle>
//                       <CardDescription className="mt-1">{book.author}</CardDescription>
//                       <div className="flex items-center mt-2">
//                         <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
//                         <span className="text-sm font-medium ml-1">{book.rating}</span>
//                         <Badge variant="secondary" className="ml-3">{book.category}</Badge>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">Progress</span>
//                         <span className="font-medium">{book.progress}%</span>
//                       </div>
//                       <Progress value={book.progress} className="h-2" />
//                       <div className="flex justify-between text-sm text-gray-600">
//                         <span>Page {book.currentPage} of {book.pages}</span>
//                         <div className="flex items-center">
//                           <Clock className="w-4 h-4 mr-1" />
//                           <span>12h left</span>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                   <CardFooter className="mt-auto">
//                     <Button variant="outline" className="w-full">
//                       <BookOpen className="w-4 h-4 mr-2" />
//                       Continue Reading
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Popular Categories Section */}
//         <section className="mb-16">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Categories</h2>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {popularCategories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <Card className="hover:shadow-md transition-shadow">
//                   <CardHeader className="flex-row items-center space-x-3 space-y-0">
//                     <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
//                       {category.icon}
//                     </div>
//                     <div>
//                       <CardTitle className="text-lg">{category.name}</CardTitle>
//                       <CardDescription>{category.count} books</CardDescription>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <Button variant="link" className="text-indigo-600 px-0">
//                       Explore <ArrowRight className="w-4 h-4 ml-2" />
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Recently Added Section */}
//         <section className="mb-16">
//           <div className="flex items-center justify-between mb-6">
//             <h2 className="text-2xl font-bold text-gray-800">Recently Added</h2>
//             <Button variant="ghost" className="text-indigo-600">
//               View all <ChevronRight className="w-4 h-4 ml-1" />
//             </Button>
//           </div>
          
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//             {recentBooks.map((book) => (
//               <motion.div
//                 key={book.id}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//               >
//                 <Card className="overflow-hidden">
//                   <img 
//                     src={book.image} 
//                     alt={book.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <CardHeader className="p-4">
//                     <CardTitle className="text-sm line-clamp-2">{book.title}</CardTitle>
//                     <CardDescription className="text-xs line-clamp-1">{book.author}</CardDescription>
//                     <div className="flex items-center mt-2">
//                       <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
//                       <span className="text-xs font-medium ml-1">{book.rating}</span>
//                     </div>
//                   </CardHeader>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to expand your knowledge?</h2>
//             <p className="text-indigo-100 mb-6">
//               Join thousands of students and developers who are advancing their skills with our library resources.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Button variant="secondary" className="bg-white text-indigo-600 hover:bg-gray-100">
//                 Browse Collection
//               </Button>
//               <Button variant="outline" className="text-white border-white hover:bg-white/10">
//                 Learn More
//               </Button>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white border-t">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <BookOpen className="text-indigo-600 w-6 h-6" />
//                 <span className="font-bold text-xl">DevLibrary</span>
//               </div>
//               <p className="text-gray-600">
//                 The premier digital library for computer science students and developers.
//               </p>
//             </div>
            
//             <div>
//               <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">Home</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">Books</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">Categories</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">My Shelf</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="font-semibold text-lg mb-4">Categories</h3>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">Web Development</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">Data Science</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">AI & ML</a></li>
//                 <li><a href="#" className="text-gray-600 hover:text-indigo-600">Programming</a></li>
//               </ul>
//             </div>
            
//             <div>
//               <h3 className="font-semibold text-lg mb-4">Contact</h3>
//               <ul className="space-y-2">
//                 <li className="text-gray-600">University Library</li>
//                 <li className="text-gray-600">123 Campus Drive</li>
//                 <li className="text-gray-600">library@university.edu</li>
//                 <li className="text-gray-600">(123) 456-7890</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t mt-8 pt-8 text-center text-gray-500">
//             <p>© {new Date().getFullYear()} University DevLibrary. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default LibraryPage;