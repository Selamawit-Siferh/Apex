import React from "react";
import { mockAPI } from "../data/mockData";
import * as Icons from "lucide-react";

const Footer = () => {
  const footerData = mockAPI.footer;

  const getSocialIcon = (platform) => {
    switch (platform) {
      case "LinkedIn":
        return <Icons.Linkedin className="w-5 h-5" />;
      case "Twitter":
        return <Icons.Twitter className="w-5 h-5" />;
      case "Facebook":
        return <Icons.Facebook className="w-5 h-5" />;
      case "Instagram":
        return <Icons.Instagram className="w-5 h-5" />;
      default:
        return <Icons.ExternalLink className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              {footerData.company.name}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Your trusted partner for cutting-edge digital solutions. We transform businesses with innovative web and mobile applications.
            </p>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Icons.MapPin className="w-4 h-4 mr-2 text-apex-blue" />
                {footerData.company.address}
              </p>
              <p className="flex items-center">
                <Icons.Phone className="w-4 h-4 mr-2 text-apex-blue" />
                {footerData.company.phone}
              </p>
              <p className="flex items-center">
                <Icons.Mail className="w-4 h-4 mr-2 text-apex-blue" />
                {footerData.company.email}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-apex-blue transition-colors"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-apex-blue transition-colors"
                  aria-label={social.name}
                >
                  {getSocialIcon(social.name)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
