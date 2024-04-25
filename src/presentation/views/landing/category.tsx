import Images from "@/utils/image";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const data: CategoryItemProps[] = [
  {
    title: "Audiology & Speech Pathology",
    content:
      "This is a related but independent unit that consults for the identification, assessment and management of children with speech and language disorder.",
    href: "#",
    image: Images.category_1,
  },
  {
    title: "Gifted & Talented",
    content:
      "Do you suspect your child is gifted? We offer thorough assessments to identify their strengths and  guide them on their unique learning path. Discover their full potential!",
    href: "#",
    image: Images.category_2,
  },
  {
    title: "Hearing Impairment",
    content:
      "Struggling to hear? Audiologists diagnose and treat hearing loss, tinnitus, and balance disorders. Get a hearing assessment and rediscover the world of sound.",
    href: "#",
    image: Images.category_3,
  },
  {
    title: "Learning Disability",
    content:
      "Does someone you know face challenges with learning, development, or daily activities? Our therapists can help you reach your full potential. Schedule an assessment.",
    href: "#",
    image: Images.category_4,
  },
  {
    title: "Intellectual Disability",
    content:
      "This is a related but independent unit that consults for the identification, assessment and management of children with intellectual disability.",
    href: "#",
    image: Images.category_5,
  },
];

interface CategoryItemProps {
  title: string;
  content: string;
  href: string;
  image: StaticImageData;
}

export default function Category() {
  return (
    <div className="givelayout py-[2rem] tab:py-[3rem]">
      <div className="bg-[#D4E5FD] rounded-[1.25rem] pt-[2rem]">
        <h3 className="text-[700] text-[2rem] text-center">Assessment Categories</h3>
        <div className="tab:max-w-[60rem] mx-auto">
          <div className="grid grid-cols-1 tab:grid-cols-2 gap-[2rem] px-[20px] tab:px-[4rem] py-[2rem]">
            {data.map((item, index) => (
              <Fragment key={index}>
                <CategoryItem props={item} />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryItem({ props }: { props: CategoryItemProps }) {
  return (
    <div className="bg-white p-[0.5rem] flex gap-[0.5rem] rounded-[0.85rem] flex-col">
      <Image src={props.image} alt="" className="w-full" />
      <h4 className="font-[700] text-[1.25rem]">{props.title}</h4>
      <p>
      {props.content}
      </p>
      <Link
        href={props.href}
        className="bg-[#0066F5] text-[#fff] font-[700] px-[2rem] py-[0.9rem] rounded-[0.5rem] inline-block max-w-[10rem]"
      >
        Learn more
      </Link>
    </div>
  );
}


