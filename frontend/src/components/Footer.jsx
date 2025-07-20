import WaveBackground from './WaveBackground';

const Footer = () => {
  return (
    <footer className="relative bg-Navbar text-white px-6 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Services Offered */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Services Offered</h2>
          <p className="text-sm text-gray-300">
            We offer a wide range of services tailored to meet our clients’ unique needs with a focus on reliability and professionalism.
          </p>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-300 mb-2">
            <strong>ADDRESS:</strong><br />
            No: 18, Thiruverkadu Main Road,<br />
            Opposite RMK Super Market,<br />
            M.G.R. Puram, Ayapakkam,<br />
            Chennai - 600077.
          </p>
          <p className="text-sm text-gray-300 mb-2">
            <strong>PHONE:</strong><br />
            +91 9176203070 / 7358342429
          </p>
          <p className="text-sm text-gray-300">
            <strong>MAIL:</strong><br />
            venienter@gmail.com
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter Signup</h2>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter to get important news, amazing offers & inside scoops:
          </p>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4 relative z-10">
        &copy; {new Date().getFullYear()} Veni Enterprises. All rights reserved.
      </div>


    </footer>
  );
};

export default Footer;
