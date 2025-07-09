import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaGithub, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaJava, FaBootstrap, FaLaravel, FaReact } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './index.css';
import ticketImage from './assets/images/website-ticket.png';
import perpustakaanImage from './assets/images/website-perpustakaan.png';


const App = () => {
  const [aboutRef, aboutInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="font-sans overflow-x-hidden bg-[#1F1F1F] scrollbar-thin scrollbar-thumb-[#31363F] scrollbar-track-[#222831]">
      {/* Navbar */}
      <motion.header 
        className="bg-[#222831] text-[#EEEEEE] p-4 shadow-md fixed w-full z-50 top-0" 
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Lintang Mukti Nugroho</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-[#EEEEEE] hover:text-[#76ABAE] transition">About</a>
            <a href="#projects" className="text-[#EEEEEE] hover:text-[#76ABAE] transition">Projects</a>
            <a href="#contact" className="text-[#EEEEEE] hover:text-[#76ABAE] transition">Contact</a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
            <span className="material-icons">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#222831] text-[#EEEEEE] py-4 px-6">
            <a href="#about" className="block py-2 text-[#EEEEEE] hover:text-[#76ABAE] transition">About</a>
            <a href="#projects" className="block py-2 text-[#EEEEEE] hover:text-[#76ABAE] transition">Projects</a>
            <a href="#contact" className="block py-2 text-[#EEEEEE] hover:text-[#76ABAE] transition">Contact</a>
          </div>
        )}
      </motion.header>

      <div className="h-8 md:h-10"></div> {/* Spacer for fixed navbar */}

      {/* Hero Section */}
      <motion.section 
        className="h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/circles.png), linear-gradient(to right, #222831, #31363F)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center text-[#EEEEEE] backdrop-blur-md p-6 rounded-md">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to My Portfolio</h2>
          <p className="text-lg">Explore my projects and skills</p>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="py-10 bg-[#31363F] text-[#EEEEEE] px-6 md:px-20"
        ref={aboutRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={aboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          I am a passionate student of Pendidikan Teknik Informatika dan Komputer, specializing in web development and multimedia design. My expertise includes HTML, CSS, JavaScript, Java, and frameworks such as Bootstrap. I also have some experience with Laravel and React, making me adaptable to different project requirements.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="flex flex-col items-center">
            <FaHtml5 className="text-4xl text-[#E34F26]" />
            <span className="text-sm mt-2">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt className="text-4xl text-[#1572B6]" />
            <span className="text-sm mt-2">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJs className="text-4xl text-[#F7DF1E]" />
            <span className="text-sm mt-2">JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaJava className="text-4xl text-[#007396]" />
            <span className="text-sm mt-2">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <FaBootstrap className="text-4xl text-[#7952B3]" />
            <span className="text-sm mt-2">Bootstrap</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLaravel className="text-4xl text-[#FF2D20]" />
            <span className="text-sm mt-2">Laravel</span>
          </div>
          <div className="flex flex-col items-center">
            <FaReact className="text-4xl text-[#61DAFB]" />
            <span className="text-sm mt-2">React</span>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-10 bg-[#222831] text-[#EEEEEE] px-6 md:px-20"
        ref={projectsRef}
        initial={{ opacity: 0 }}
        animate={projectsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-center">My Projects</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Website Ticketing",
              description: "Membangun website ticketing manual untuk konser menggunakan Bootstrap, PHP, HTML, dan JavaScript, dilengkapi sistem manajemen tiket.",
              image: ticketImage,
              link: "https://github.com/LimunBF/pemweb_uas.git",
            },
            {
              title: "Website Kos",
              description: "Website sederhana untuk meminjam dan melihat buku apa saja yang ada di perpustakaan secara online.",
              image: perpustakaanImage,
              link: "https://github.com/LimunBF/perpustakaan_tailwind.git",
            },
            {
              title: "Animasi Voli 3D Blender",
              description: "Website sederhana untuk meminjam dan melihat buku apa saja yang ada di perpustakaan secara online.",
              image: perpustakaanImage,
              link: "https://github.com/LimunBF/perpustakaan_tailwind.git",
            },
            {
              title: "Aplikasi Jadwal Bola",
              description: "Membangun website ticketing manual untuk konser menggunakan Bootstrap, PHP, HTML, dan JavaScript, dilengkapi sistem manajemen tiket.",
              image: ticketImage,
              link: "https://github.com/LimunBF/pemweb_uas.git",
            },
            {
              title: "Game Multimedia Interaktif",
              description: "Website sederhana untuk meminjam dan melihat buku apa saja yang ada di perpustakaan secara online.",
              image: perpustakaanImage,
              link: "https://github.com/LimunBF/perpustakaan_tailwind.git",
            },
            {
              title: "Website Perpustakaan",
              description: "Website sederhana untuk meminjam dan melihat buku apa saja yang ada di perpustakaan secara online.",
              image: perpustakaanImage,
              link: "https://github.com/LimunBF/perpustakaan_tailwind.git",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#31363F] text-[#EEEEEE] p-4 rounded shadow-lg hover:shadow-2xl transition"
              whileHover={{ scale: 1.05, rotate: 1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={project.image}
                alt={`Gambar proyek ${project.title}`}
                className="rounded w-full mb-4"
                loading="lazy"
              />
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-sm text-[#76ABAE] mb-2">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-[#76ABAE] underline">
                  View Project
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Contact Section */}
      <motion.footer 
        id="contact" 
        className="bg-[#31363F] text-[#EEEEEE] text-center py-10 px-6 md:px-20"
        ref={contactRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={contactInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold">Contact Me</h2>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://instagram.com/lintangmuktin/" target="_blank" rel="noopener noreferrer" className="text-[#76ABAE] text-3xl hover:text-[#EEEEEE]"><FaInstagram /></a>
          <a href="https://wa.me/6282233809069" target="_blank" rel="noopener noreferrer" className="text-[#76ABAE] text-3xl hover:text-[#EEEEEE]"><FaWhatsapp /></a>
          <a href="mailto:lintangmukti638@gmail.com" className="text-[#76ABAE] text-3xl hover:text-[#EEEEEE]"><FaEnvelope /></a>
          <a href="https://github.com/LimunBF" target="_blank" rel="noopener noreferrer" className="text-[#76ABAE] text-3xl hover:text-[#EEEEEE]"><FaGithub /></a>
        </div>
        <p className="mt-6">&copy; 2024 Lintang Mukti Nugroho</p>
      </motion.footer>
    </div>
  );
};

export default App;
