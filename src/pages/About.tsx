import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto", fontFamily: "Segoe UI, sans-serif" }}>
      <h1 style={{ color: "#fbbf24" }}>About JobLynk.live</h1>
      <p>Your Partner in Executive Career Growth & Talent Acquisition</p>

      <h2 style={{ color: "#fbbf24", marginTop: "30px" }}>?? Our Mission</h2>
      <p>JobLynk.live bridges the gap between executive talent and career opportunities in hospitality, maritime, and professional services across India, the Middle East, and global markets.</p>

      <h2 style={{ color: "#fbbf24", marginTop: "30px" }}>????? For Job Seekers & Candidates</h2>
      <ul>
        <li>14 Executive Sector Guides</li>
        <li>Professional Resume & Cover Letter</li>
        <li>Daily HR / Employer Leads</li>
        <li>Free Industry Resources</li>
      </ul>

      <h2 style={{ color: "#fbbf24", marginTop: "30px" }}>?? For HR Professionals & Employers</h2>
      <ul>
        <li>Direct Access to Active Candidates</li>
        <li>Verified HR Data</li>
        <li>Partnership Opportunities</li>
      </ul>

      <h2 style={{ color: "#fbbf24", marginTop: "30px" }}>?? Contact</h2>
      <p>Email: <a href="mailto:joblynklive@gmail.com" style={{ color: "#fbbf24" }}>joblynklive@gmail.com</a></p>
      <p>WhatsApp: +91 9769351231</p>

      <h2 style={{ color: "#fbbf24", marginTop: "30px" }}>Our Team</h2>
      <p><strong>Nigel A Thomas</strong> – Web Design & Owner</p>
      <p><strong>Das Suburaj</strong> – Data Analyst & Support</p>

      <Link to="/" style={{ display: "inline-block", marginTop: "40px", color: "#fbbf24", textDecoration: "none" }}>? Back to Home</Link>
    </div>
  );
};

export default About;
