import Images from "@/utils/image";
import Image from "next/image";

export default function Playground() {
  return (
    <div>
      <Header />
    </div>
  );
}

function Header() {
  return (
    <div className="givelayout bg-[#D4E5FD]">
      <div className="py-[2rem]">
        <Image src={Images.logo} alt="" className="w-[16.75rem]" />
      </div>
    </div>
  );
}
