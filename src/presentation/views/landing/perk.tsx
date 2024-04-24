import Images from "@/utils/image";
import Image, { StaticImageData } from "next/image";

interface PerkItemsProps {
  icon: StaticImageData;
  title: string;
  content: string;
  backgroundColor: string;
}

const data: PerkItemsProps[] = [
  {
    icon: Images.perk_1,
    content:
      "Specialized assessment tailored for educational support and designed for special education assessments, ensuring effective support for every unique need",
    title: "Exceptional Edge",
    backgroundColor: "#D4E5FD",
  },
  {
    icon: Images.perk_2,
    content:
      "Our specialized tools cater to a wide range of abilities, ensuring tailored support for every individual's unique needs in special education",
    title: "Ability Bridge",
    backgroundColor: "#FCDDEC",
  },
  {
    icon: Images.perk_3,
    content:
      "There are different scales tailored specifically for the different assessments for special education needs",
    title: "Diverse Scales",
    backgroundColor: "#E6EAEF",
  },
];

export default function Perk() {
  return (
    <div className="givelayout py-[2rem] tab:py-[3rem]">
      <div className="tab:max-w-[60%] laptop:max-w-[40%] mx-auto text-center">
        <h3 className="text-[2rem] mb-[0.8rem] font-[700]">
          Ability Assessment
        </h3>
        <p className="text-[#48566C]">
          {`Discover a comprehensive suite of assessment, tailored for evaluating
        speech pathology, giftedness, intellectual disability, and learning
        disability, our platform ensures balanced insights into individual
        abilities`}
        </p>
      </div>
      <div className="grid tab_large:grid-cols-3 gap-[2rem] mt-[1.3rem]">
        {data.map((item, index) => (
          <div key={index}>
            <PerkItem props={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PerkItem({ props }: { props: PerkItemsProps }) {
  return (
    <div
      className="text-center flex flex-col gap-[1rem] rounded-[20px] justify-center p-[2rem] items-center h-full"
      style={{ background: props.backgroundColor }}
    >
      <Image src={props.icon} alt="" className="w-[1.5rem]" />
      <h3 className="text-[1.25rem] font-[700]">{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}
