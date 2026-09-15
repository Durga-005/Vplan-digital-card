import "./App.css";
import logo from "./assets/logo.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPlus,
} from "react-icons/fa";

function App() {
  // ================================
  // V PLAN DETAILS
  // ================================

  const phone = "+9186391-69498";

  const email = "connect@vplaninterior.com";

  const instagram =
    "https://www.instagram.com/vplan_interiors";

  const website =
    "https://vplan-web.netlify.app";

  const location =
    "https://www.google.com/maps/search/?api=1&query=CJPW+VJ9 Secunderabad, Telangana";


  // ================================
  // SAVE CONTACT
  // ================================

  const saveContact = () => {
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:V Plan
ORG:V Plan Interiors & Contracting
TEL:${phone}
EMAIL:${email}
URL:${website}
END:VCARD`;

    const blob = new Blob([vCard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "VPlan-Contact.vcf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };


  return (
    <div className="page">

      <div className="digital-card">

        {/* =========================
            LOGO
        ========================= */}

        <div className="logo-circle">

          <img
  src={logo}
  alt="V Plan Logo"
/>

        </div>


        {/* =========================
            BUSINESS NAME
        ========================= */}

        <div className="brand">

          <h1>V PLAN</h1>

          <p>Interiors &amp; Contracting</p>

        </div>


        {/* =========================
            SOCIAL ICONS
        ========================= */}

        <div className="social-icons">

          <a
            href={`https://wa.me/${phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>


          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>


          <a
            href={`mailto:${email}`}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>


        {/* =========================
            BUTTONS
        ========================= */}

        <div className="buttons">

          {/* WEBSITE */}

          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="info-button"
          >

            <FaGlobe className="left-icon" />

            <span className="divider"></span>

            <span className="button-text">
             Explore V PLAN
            </span>

          </a>


          {/* LOCATION */}

          <a
            href={location}
            target="_blank"
            rel="noopener noreferrer"
            className="info-button"
          >

            <FaMapMarkerAlt className="left-icon" />

            <span className="divider"></span>

            <span className="button-text">
              Our Location
            </span>

          </a>


          {/* PHONE */}

          <a
            href={`tel:${phone}`}
            className="info-button"
          >

            <FaPhoneAlt className="left-icon" />

            <span className="divider"></span>

            <span className="button-text">
              Get in Touch
            </span>

          </a>


          {/* SAVE CONTACT */}

          <button
            onClick={saveContact}
            className="save-button"
          >

            <FaPlus className="left-icon" />

            <span className="divider"></span>

            <span className="button-text">
              Save Contact
            </span>

          </button>

        </div>


        {/* =========================
            BOTTOM LINE
        ========================= */}

        <div className="bottom-line"></div>

      </div>

    </div>
  );
}

export default App;