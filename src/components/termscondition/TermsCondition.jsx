import React from 'react'

const TermsCondition = () => {
  return (
    <div>
          <div className="max-w-3xl p-6 mx-5 mt-5">
      <h1 className="text-2xl font-bold mb-4 text-center">Terms and Conditions</h1>
      <p>
        These Terms and Conditions govern your use of the website {" "}
        <a href="https://www.credsettle.com" className="text-blue-500">www.credsettle.com</a>. By accessing or using this Website and its 
        products or services, you agree that you have read, understood, and are bound by these Terms. If you do not 
        accept these Terms, you are not authorized to use the Website.
      </p>
      <p>
        By using this Website, you also agree to our {" "}
        <a href="/privacy-policy" className="text-blue-500">Privacy Policy</a>.
      </p>

      <h2 className="text-xl font-semibold mt-4">Acceptable Use</h2>
      <ul className="list-disc pl-6">
        <li>Comply with these Terms and the Privacy Policy.</li>
        <li>Avoid insulting, abusing, harassing, or infringing the rights of others.</li>
        <li>Do not post or share unlawful, offensive, or infringing content.</li>
        <li>Do not attempt to hack, reverse-engineer, or disrupt the Website.</li>
        <li>Do not send spam, phishing links, or unsolicited communications.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Limitation of Liability</h2>
      <p>
        CredSettle shall not be liable for any direct, indirect, incidental, or 
        consequential damages resulting from:
      </p>
      <ul className="list-disc pl-6">
        <li>Your use or inability to use our services.</li>
        <li>Unauthorized access to your data.</li>
        <li>Actions of third parties on the Website.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-4">Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless CredSettle and its affiliates from any 
        claims, damages, or legal fees arising from your breach of these Terms or 
        violation of laws.
      </p>

      <h2 className="text-xl font-semibold mt-4">Fees</h2>
      <p>
        CredSettle’s services are chargeable. Fees will be disclosed before transactions, 
        and services proceed only after your consent and payment.
      </p>

      <h2 className="text-xl font-semibold mt-4">Refunds</h2>
      <p>
        Refunds are governed by the service agreement signed during enrollment. Paid fees 
        are non-refundable, and services can be canceled anytime without future charges.
      </p>

      <h2 className="text-xl font-semibold mt-4">Contact Us</h2>
      <p>
        For any inquiries, please reach out to us at {" "}
        <a href="mailto:info@credsettle.com" className="text-blue-500">info@credsettle.com</a>.
      </p>
    </div>
    </div>
  )
}

export default TermsCondition
