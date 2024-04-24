interface CategoryItemProps {
  title: string;
  content: string;
  href: string;
  image:string;
}

export default function Category() {
  return (
    <div className="givelayout py-[2rem] tab:py-[3rem]">
      <div className="bg-[#D4E5FD] rounded-[1.25rem]"></div>
    </div>
  );
}

function CategoryItem({ props }: { props: CategoryItemProps }) {
  return <div></div>;
}
