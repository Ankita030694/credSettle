import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import elipse from "../../assets/images/Elipse.png";
import "./Whyus.css";
import Star from "../../assets/images/Star.png";
import Arrow from "../../assets/images/Arrow.png";
import aff from "../../assets/images/2x.png";
import { Link } from "react-router-dom";
const Whyus = () => {
  const faqs = [
    {
      question: "What is loan settlement?",
      answer:
        "Loan settlement is a process by which you negotiate and settle the loan repayment at a value lower than the total outstanding.",
    },
    {
      question: "What type of debt can be settled through CredSettle?",
      answer:
        "We help you in settling unsecured loans like credit cards, personal loans, business loans. We do not help you settle secured loans, collateral-based, home, and car loans.",
    },
    {
      question: "How much time does it take to settle the debt?",
      answer:
        "It may vary from case to case, but the average settlement takes usually between 1 to 2 years.",
    },
    {
      question:
        "Will I be charged interest and late fees on my loans? How do I handle the calls from bank recovery agents?",
      answer:
        "You may continue to get calls from the bank or recovery agents. However, they are bound to follow certain codes of conduct as laid down by RBI and the Supreme Court of India. You can redirect the calls to our team, and our legal team will handle the communication as per the laid down guidelines and laws of the country.",
    },
    {
      question: "How much can I save when I settle my loan?",
      answer:
        "It may vary from case to case, but average savings could be 50% of the value of the loan outstanding.",
    },
  ];
  return (
    <div>
      <div className="whyus container-fluid py-5 bg-white">
        <div className="row align-items-center hero-container text-start">
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
              <h3>FAQ'S</h3>
              <img className="about_icon" src={elipse} alt="" />
            </div>
            <div className="txt2">
              <h1 className="tagline2 text-black">THE CREDSETTLE DIFFERENCE</h1>
              <p className="mt-4 txt1">
                Choose us for our experienced team, personalized debt solutions,
                and commitment to helping you regain financial stability. We
                negotiate the best possible settlements, ensuring a stress-free
                path to debt relief with transparent process
              </p>
            </div>

            <div className="d-flex flex-column text-center align-items-center">
              {/* <div className="d-flex flex-row rate_txt  ">
                <h1>4.5</h1> <p className="rate_text_sec">/5</p>
              </div>
              <img src={Star} alt="" className="icon" />
              <h3 className="text-white">Joshua Smith</h3>
              <h3 className="text-white">CTO</h3>
              <img src={Arrow} alt="" className="icon mb-4" /> */}
              {/* <img src={aff} alt="" /> */}
            </div>
          </div>
          <div className="col-md-6 text-end why_btn">
            <Link to="/faq">
              <button className="btn btn-primary get-started-btn mb-3">
                Learn More
              </button>
            </Link>

            {/* <div className="d-flex flex-column mt-5 faq">
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>What is loan settlement?</span> <span> </span>{" "}
                    <span></span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    Loan settlement is a process by which you negotiate and
                    settle the loan repayment at a value lower than the total
                    outstanding.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>
                      What type of debt can be settled through “CredSettle”?
                    </span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    We help you in settling unsecured loans like credit cards,
                    personal loans, business loans. We do not help you settle
                    secured loans, collateral based, home and car loans.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>How much time does it take to settle the debt?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    It may vary from case to case but average settlement takes
                    usually between 1 to 2 years.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>
                      Will I be charged interest and late fee on my loans? How
                      do I handle the calls from bank recovery agents?
                    </span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    You may continue to get calls from the bank or recovery
                    agents. However, do note that they are bound to follow
                    certain code of conduct as laid down by RBI and Supreme
                    Court of India. You can redirect the calls to our team and
                    our legal team will handle the communication as per the laid
                    down guidelines and laws of the country.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>How much can I save when I settle my loan?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    It may vary from case to case but average savings could be
                    50% of the value of loan outstanding.
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div> */}
            <div className="faq-section py-5" 
            // style={{ minWidth: "700px" }}
            >
              <div className="faq-container mx-auto col-12 col-md-8 bg-light p-4 rounded shadow-sm">
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item border-bottom py-3">
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <DisclosureButton
                            className="d-flex justify-content-between align-items-center w-100 bg-white p-3 border rounded"
                            style={{ textAlign: "left" }}
                          >
                            <span className="fw-bold text-dark">
                              {faq.question}
                            </span>
                            <ChevronDownIcon
                              className={`dropdown-icon ${
                                open ? "rotate-180" : ""
                              } transition-transform duration-300`}
                              style={{ width: "24px", height: "24px" }}
                            />
                          </DisclosureButton>
                          <DisclosurePanel
                            className="text-secondary mt-2 px-3 small"
                            style={{ textAlign: "center" }}
                          >
                            {faq.answer}
                          </DisclosurePanel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
    </div>
  );
};

export default Whyus;
