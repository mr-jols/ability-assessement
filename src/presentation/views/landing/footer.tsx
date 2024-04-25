import Images from "@/utils/image";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#0044A3] givelayout py-[4rem] tab:py-[6rem] mt-[2rem] tab:mt-[3rem]">
      <div className="max-w-[70rem] mx-auto">
        <div className="flex flex-col tab:flex-row justify-between gap-[2rem]">
          <div className="flex gap-[0.5rem] flex-col">
            <Image src={Images.logo_footer} alt="" className="w-[8rem]" />
            <p className="text-white"> (+234) 90 -11-19-911</p>
            <p className="text-[#D4E5FD]">abilityassess@help.agency</p>
          </div>
          <Links />
          <div className="max-w-[500px]">
            <p className="text-white mb-[1rem] tet-[1.25rem]">Ability Assess</p>
            <p className="text-[#D4E5FD]">
              Diverse scales for diverse abilities with tailored assessments for
              every individual and the right support{" "}
            </p>
          </div>
        </div>
        <div className="border-[0.5px] border-[#D4E5FD] my-[4rem]"></div>
        <div className="flex justify-end">
            <p className="text-[#FFFFFF] inline-block">© 2024 All rights reserved</p>

        </div>
      </div>
    </div>
  );
}

export interface LinkProps {
  title: string;
  href?: string;
}

const linkData: LinkProps[] = [
  {
    title: "Faqs",
  },
  {
    title: "Subscribe",
  },
  {
    title: "Assessments",
  },
  {
    title: "About us",
  },
];

function Links() {
  return (
    <div>
      <h4 className="text-[1.25rem] text-white mb-[1rem]"> Quick Links</h4>
      <ul>
        {linkData.map((item, index) => (
          <li key={index} className="mb-[0.5rem]">
            <Link href={item?.href ?? "#"} className="text-[#D4E5FD]">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
