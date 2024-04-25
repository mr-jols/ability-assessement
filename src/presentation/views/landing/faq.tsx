"use client"
import { Fragment, useRef } from "react";
import useToggle from "../../../../hooks/useToggle";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface FaqProps {
  title: string;
  content: string;
}

const content =
  "The platform is designed to provide tailored assessments and tests for students with diverse learning needs and disabilities, enabling educators to understand individual challenges to inform treatment";
const data: FaqProps[] = [
  {
    title: "What is the product about?",
    content,
  },
  {
    title: "How does the platform ensure data privacy and security?",
    content,
  },
  {
    title: "What types of assessments are available on the platform?",
    content,
  },
  {
    title: "Is the platform accessible for students with different needs?",
    content,
  },
  {
    title:
      "How can schools and organizations implement the assessment platform?",
    content,
  },
  {
    title:
      "Is there technical support available for educators and students using the platform?",
    content,
  },
];

export default function Faq() {
  return (
    <div className="givelayout py-[2rem] tab:py-[3rem]">
            <h3 className="font-[900] text-[2rem] text-[#000000] mb-[2rem] text-center">Frequently Asked Questions</h3>
        <div className="mx-auto max-w-[70rem] shadow-md p-[1rem] tab:p-[4rem]">
        
      {data.map((item, index) => (
        <Fragment key={index}>
          <Accordion props={item} />
        </Fragment>
      ))}
      </div>
    </div>
  );
}

function Accordion({ props }: { props: FaqProps }) {
  const [toggle, handleToggle] = useToggle();
  const panelRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="cursor-pointer mb-[1.5rem] border-b-[1.5px] border-[#D9DBE9]"
      onClick={() => handleToggle()}
    >
      <div className="flex gap-[1rem] justify-between ">
        <h5 className="flex-[12] mb-[1.5rem] text-[#333333] font-[700] text-[1rem]">
          {props.title}
        </h5>
        <div className="flex-1">
          <IoIosArrowDroprightCircle
            className={`ml-auto text-[1.5rem] ${
              toggle ? "rotate-90" : ""
            } transition-all`}
          />
        </div>
      </div>
      <div
        className="overflow-hidden transition-[height] duration-[50] "
        ref={panelRef}
        style={
          toggle ? { height: panelRef.current?.scrollHeight } : { height: 0 }
        }
      >
        {typeof props.content == "string" ? (
          <p className="pb-[1rem] text-[0.9rem] font-[600]">{props.content}</p>
        ) : (
          <div className="pb-[1rem] text-[0.9rem] font-[600]">
            {props.content}
          </div>
        )}
      </div>
    </div>
  );
}
