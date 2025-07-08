import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer = () => {
  const footerSections = [
    {
      title: "Training",
      links: [
        { name: "Online Courses", href: "#training" },
        { name: "Continuing Education", href: "#continuing-education" },
        { name: "Practice Exams", href: "#practice-exams" },
        { name: "Certification Programs", href: "/certification" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Articles", href: "#articles" },
        { name: "Business Solutions", href: "#business" },
        { name: "JPS Standards Guide", href: "/jps-guide" },
        { name: "Support Center", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About JMEA", href: "/about" },
        { name: "Our Instructors", href: "/instructors" },
        { name: "Careers", href: "/careers" },
        { name: "Contact Us", href: "#contact" }
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
    { icon: <Youtube size={20} />, href: "#", name: "YouTube" }
  ];

  return (
    <footer className="bg-jmea-blue text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">JMEA</h3>
                <p className="text-jmea-blue-light text-sm">Jamaica Electrical Association</p>
              </div>
            </div>
            
            <p className="text-jmea-blue-light mb-6 leading-relaxed">
              Jamaica's premier online electrical training platform. We provide comprehensive education 
              for electricians across the island, from Kingston to Montego Bay.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-jmea-blue-light">
                <MapPin size={16} />
                <span>Kingston, Jamaica</span>
              </div>
              <div className="flex items-center space-x-3 text-jmea-blue-light">
                <Phone size={16} />
                <span>+1-876-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-jmea-blue-light">
                <Mail size={16} />
                <span>info@jmea.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-jmea-blue-light hover:bg-white/20 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-jmea-blue-light hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-jmea-blue-light/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-jmea-blue-light text-sm">
              <p>&copy; 2024 JMEA - Jamaica Electrical Association. All rights reserved.</p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-jmea-blue-light hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-jmea-blue-light hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="/accessibility" className="text-jmea-blue-light hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* JPS Compliance Notice */}
      <div className="bg-jmea-blue-dark">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center text-xs text-jmea-blue-light">
            <p>
              JMEA is an approved continuing education provider for Jamaica Public Service (JPS) and 
              the Jamaica Bureau of Standards. All courses meet local electrical code requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};