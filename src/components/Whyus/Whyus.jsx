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
        "Loan settlement is a process where you negotiate to repay less than the total outstanding. CredSettle offers expert loan settlement services, personal loan settlement, credit card debt settlement, and EMI default solutions. Settle your loan fast, reduce debt legally, avoid harassment, and improve your CIBIL score today.",
    },
    {
      question: "What type of debt can be settled through CredSettle?",
      answer:
        "We assist in settling unsecured loans such as credit cards, personal loans, and business loans. However, we do not handle the settlement of secured loans, including collateral-based loans, home loans.",
    },
    {
      question: "How much time does it take to settle the debt?",
      answer:
        "The loan settlement process may vary based on individual cases, but on average, it takes around 1 to 2 years to complete. Factors like personal loan settlement, credit card debt settlement, and business loan settlement can impact the timeline in the loan negotiation process.",
    },
    {
      question:
        "Will I be charged interest and late fees on my loans? How do I handle the calls from bank recovery agents?",
      answer:
        "⁠You may still receive calls from the bank or recovery agents. However, they must adhere to the RBI guidelines and Supreme Court of India regulations. You can redirect these calls to our team, and our legal experts will manage the communication in line with the country's laws and debt settlement guidelines.",
    },
    {
      question: "How much can I save when I settle my loan?",
      answer:
        "The savings may vary by case, but on average, you could save up to 50% of the outstanding loan value through loan settlement services, including personal loan settlement, credit card debt settlement, and business loan settlement.",
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
                Have questions about the loan settlement process? Here, we
                address common queries regarding personal loan settlement,
                credit card debt settlement, business loan settlement, and
                unsecured loan settlement. Learn how to negotiate a loan
                settlement, the impact on your CIBIL score, and how CredSettle
                can assist in reducing your debt legally. Find all the answers
                you need to make an informed decision on settling your loans
                effectively.
              </p>
            </div>
            <a href="/faq">
              <button className="btn btn-primary get-started-btn mt-3">
                Learn More
              </button>
            </a>

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
            <div
              className="faq-section py-5"
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
