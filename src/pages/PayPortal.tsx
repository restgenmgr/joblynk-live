import { Link } from 'react-router-dom';

const PayPortal = () => {
  return (
    <div style={{ padding: "60px 20px", maxWidth: "1200px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#fbbf24", marginBottom: "40px" }}>?? Career Packages – Pay Portal</h1>
      
      <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>
        
        {/* White Package */}
        <div style={{ 
          background: "#1e293b", 
          padding: "30px", 
          borderRadius: "16px", 
          width: "300px",
          textAlign: "center"
        }}>
          <h2 style={{ color: "#fbbf24" }}>? White Package</h2>
          <div style={{ fontSize: "2rem", fontWeight: "bold", margin: "20px 0" }}>?49</div>
          <ul style={{ textAlign: "left", margin: "20px 0" }}>
            <li>? 1 Tailored CV</li>
            <li>? 1 Cover Letter</li>
            <li>? 20+ HR & Employer contacts</li>
            <li>? Career guidance & tips</li>
          </ul>
          <a 
            href="https://wa.me/919769351231?text=I%20want%20White%20Package%20?49" 
            style={{ 
              display: "inline-block", 
              background: "#fbbf24", 
              color: "#000", 
              padding: "10px 20px", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Order on WhatsApp ?
          </a>
        </div>
        
        {/* Gold Package */}
        <div style={{ 
          background: "#1e293b", 
          padding: "30px", 
          borderRadius: "16px", 
          width: "300px",
          textAlign: "center",
          border: "2px solid #fbbf24"
        }}>
          <h2 style={{ color: "#fbbf24" }}>? Gold Package</h2>
          <div style={{ fontSize: "2rem", fontWeight: "bold", margin: "20px 0" }}>?99</div>
          <ul style={{ textAlign: "left", margin: "20px 0" }}>
            <li>? Everything in White Package</li>
            <li>? 5 days of fresh employer & HR data</li>
            <li>? Daily verified leads via WhatsApp/Email</li>
            <li>? Priority support</li>
          </ul>
          <a 
            href="https://wa.me/919769351231?text=I%20want%20Gold%20Package%20?99" 
            style={{ 
              display: "inline-block", 
              background: "#fbbf24", 
              color: "#000", 
              padding: "10px 20px", 
              borderRadius: "8px", 
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Order on WhatsApp ?
          </a>
        </div>
      </div>
      
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <Link to="/" style={{ color: "#fbbf24", textDecoration: "none" }}>? Back to Home</Link>
      </div>
    </div>
  );
};

export default PayPortal;
