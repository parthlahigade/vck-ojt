// src/components/Footer/Footer.jsx
import './Footer.css'; // Import the CSS for the Footer
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Vivekanand College. All rights reserved.</p>
    </footer>
  );
}
export default Footer;