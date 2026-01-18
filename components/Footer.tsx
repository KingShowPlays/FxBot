import React from 'react';

function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Design', href: '#web-design' },
    { name: 'UI/UX Design', href: '#uiux-design' },
    { name: 'Branding', href: '#branding' },
    { name: 'Development', href: '#development' },
    { name: 'Strategy', href: '#strategy' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com' },
    { name: 'X', href: 'https://x.com' },
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
    { name: 'Youtube', href: 'https://youtube.com' }
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="mb-16">
          {/* Tagline */}
          <div className="mb-12">
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Crafting exceptional digital experiences that inspire and drive results.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-base">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-base">Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a
                      href={service.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-base">Connect</h3>
              <ul className="space-y-3">
                {socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center mb-16">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 tracking-tight">
            Avulex Technology
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2026 Avulex Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;