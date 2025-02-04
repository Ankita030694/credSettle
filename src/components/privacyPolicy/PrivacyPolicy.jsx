import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="text-start mx-5 mt-5">
      <h1 className="text-center">PRIVACY POLICY</h1>
      <div className="max-w-3xl mx-auto p-6 bg-white">
        
        <p>
          At <strong>Credsettle.com</strong> ("Credsettle," "we," or "us"), we
          take your privacy seriously and are committed to safeguarding your
          personal data. This Privacy Policy explains how we collect, use,
          share, and protect your personal information when using our website
          and mobile apps.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          Collection of Personally Identifiable Information
        </h2>
        <p>We collect personally identifiable information such as:</p>
        <ul className="list-disc pl-6">
          <li>Name, email address, mailing address, phone number</li>
          <li>Company name, company size, business type</li>
          <li>
            Billing details (we do not store full credit card information)
          </li>
        </ul>
        <p>
          By providing your contact details, you agree to receive
          service-related communications from us, even if your number is on the
          Do Not Disturb (DND) list.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          Use of Non-Personal Identifiable Data
        </h2>
        <p>We may collect non-personal information such as:</p>
        <ul className="list-disc pl-6">
          <li>Device type, browser type, language preference</li>
          <li>Time zone, screen size, referring/exit pages</li>
        </ul>
        <p>
          We use this data to enhance our services and provide a better user
          experience.
        </p>

        <h2 className="text-xl font-semibold mt-4">Cookies</h2>
        <p>
          We use cookies and tracking technologies for functionality and
          analytics. You can manage cookie preferences through your browser
          settings. To opt out, email us at{" "}
          <a href="mailto:info@credsettle.com" className="text-blue-500">
            info@credsettle.com
          </a>
          .
        </p>

        <h2 className="text-xl font-semibold mt-4">
          Sharing of Personal Information
        </h2>
        <p>
          We may share your personal information with affiliates and corporate
          entities for:
        </p>
        <ul className="list-disc pl-6">
          <li>Fraud prevention and security</li>
          <li>Service enhancements</li>
        </ul>
        <p>
          Personal data may also be shared if required by law or during mergers
          and acquisitions.
        </p>

        <h2 className="text-xl font-semibold mt-4">Information Security</h2>
        <p>
          We employ industry-standard security measures including SSL encryption
          to protect your data. However, no internet transmission is 100%
          secure.
        </p>

        <h2 className="text-xl font-semibold mt-4">Testimonials</h2>
        <p>
          Customer testimonials may be posted on our site with consent. If you
          wish to remove a testimonial, please contact us.
        </p>

        <h2 className="text-xl font-semibold mt-4">Contacting Credsettle</h2>
        <p>
          For any privacy concerns, contact us at:
          <br />
          <a href="mailto:info@credsettle.com" className="text-blue-500">
            info@credsettle.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
