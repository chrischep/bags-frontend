import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#521C0D] text-[#F4E7E1] px-20 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-10">
        
        {/* Left Column - Brand Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">CHRISTINE'S BAGS</h2>
          <div className="space-y-4">
            <p className="font-semibold">MADE BY KENYA</p>
            <p className="text-sm">
              Discover beautifully crafted bags made for the modern Kenyan lifestyle, bold, functional, and full of personality. Whether you're commuting, traveling, or making a statement, we’ve got the perfect bag to match your vibe.
            </p>
          </div>
        </div>

        {/* Middle Column - Legal Links */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold">LEGAL</h3>
          <ul className="space-y-2 text-sm">
            {['Privacy', 'Refunds', 'Terms of Service', 'Contact', 'Corporate Sales', 'Shipping'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#FF9B45] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Newsletter & Social */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">NEWSLETTER</h3>
            <p className="text-sm">Sign up to our monthly newsletter & get 10% off your first order.</p>
            <div className="w-full h-px bg-[#FF9B45]"></div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">FOLLOW US</h3>
            <p className="text-sm">Find us on social media</p>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-[#FF9B45] transition-colors"><FaInstagram /></a>
              <a href="#" className="hover:text-[#FF9B45] transition-colors"><FaTwitter /></a>
              <a href="#" className="hover:text-[#FF9B45] transition-colors"><FaFacebook /></a>
            </div>
            <div className="w-full h-px bg-[#FF9B45]"></div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 text-center text-sm">
        <p>Christine Kenya (KE) • Made By Kenya</p>
      </div>
    </footer>
  );
};

export default Footer;