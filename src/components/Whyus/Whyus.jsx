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
import Star from "../../assets/images/Star.png"
import Arrow from "../../assets/images/Arrow.png"
const Whyus = () => {
  return (
    <div>
      <div className="whyus container-fluid py-5 bg-white">
        <div className="row align-items-center hero-container text-start">
          <div className="col-md-6 text-content about_cont">
            <div className="elipse mb-4">
              <h3>WHY US</h3>
              <img className="about_icon" src={elipse} alt="" />
            </div>
            <h1 className="tagline2 text-black">THE CREDSETTLE DIFFERENCE</h1>
            <p className="mt-4 txt1">
              Quisque accumsan placerat malesuada gravida non. Malesuada cursus
              ac et amet.
            </p>
            <div className="d-flex flex-column rating text-center align-items-center">
              <div className="d-flex flex-row rate_txt  ">
                <h1>4.5</h1> <p className="rate_text_sec">/5</p>
              </div>
              <img src={Star} alt="" className="icon"/>
                  <h3 className="text-white">Joshua Smith</h3>
                  <h3 className="text-white">CTO</h3>
                  <img src={Arrow} alt="" className="icon mb-4"/>
            </div>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-primary get-started-btn mb-3">
              Learn More
            </button>

            <div className="d-flex flex-column mt-5">
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>Is team pricing available?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    Yes! You can purchase a license that you can share with your
                    entire team.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>Is team pricing available?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    Yes! You can purchase a license that you can share with your
                    entire team.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>Is team pricing available?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    Yes! You can purchase a license that you can share with your
                    entire team.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>Is team pricing available?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    Yes! You can purchase a license that you can share with your
                    entire team.
                  </DisclosurePanel>
                </Disclosure>
              </div>
              <div className="py-2">
                <Disclosure>
                  <DisclosureButton className="p-2 col-md-12 disc_btn d-flex justify-content-between align-items-center">
                    <span>Is team pricing available?</span>
                    <ChevronDownIcon className="dropdown-icon px-3" />
                  </DisclosureButton>
                  <DisclosurePanel className="text-gray-500 text-center">
                    Yes! You can purchase a license that you can share with your
                    entire team.
                  </DisclosurePanel>
                </Disclosure>
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
