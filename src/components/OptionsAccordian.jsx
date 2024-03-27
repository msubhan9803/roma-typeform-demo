import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { CgChevronUp } from "react-icons/cg";

export default function OptionsAccordion() {
  const [options, setOptions] = useState([
    {
      label: "Get useful tips, inspiration, and offers via e-communication.",
      value: null,
    },
    {
      label: "Tailor Typeform to my needs based on my activity.",
      value: null,
      link: (
        <span className="underline cursor-pointer">See Privacy Policy</span>
      ),
    },
    {
      label:
        "Enrich my data with select third parties for more relevant content.",
      value: null,
      link: (
        <span className="underline cursor-pointer">See Privacy Policy</span>
      ),
    },
  ]);

  const handleSelection = (index, selection) => {
    const updatedOptions = options.map((option, optIndex) => {
      if (index === optIndex) {
        return { ...option, value: selection };
      }
      return option;
    });
    setOptions(updatedOptions);
  };

  return (
    <div className="w-full">
      <div className="mx-auto w-full rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-left text-sm font-medium pl-7 py-1">
                <span className="text-[#191919] font-normal">See options</span>
                <CgChevronUp
                  className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm pl-7">
                {options.map((option, index) => (
                  <div key={index}>
                    <span className="text-sm text-custom-dark mb-2">
                      {option.label}
                      &nbsp;
                      {option.link || ""}
                    </span>

                    <div className="flex mb-3">
                      <div className="radio">
                        <input
                          id={`radio-yes-${index}`}
                          name={`radio-${index}`}
                          type="radio"
                          checked={option.value === true}
                          onChange={() => handleSelection(index, true)}
                        />
                        <label
                          htmlFor={`radio-yes-${index}`}
                          className="radio-label"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="radio">
                        <input
                          id={`radio-no-${index}`}
                          name={`radio-${index}`}
                          type="radio"
                          checked={option.value === false}
                          onChange={() => handleSelection(index, false)}
                        />
                        <label
                          htmlFor={`radio-no-${index}`}
                          className="radio-label"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
