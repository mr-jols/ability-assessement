import Categories from "@/presentation/views/landing/category";
import Faq from "@/presentation/views/landing/faq";
import Footer from "@/presentation/views/landing/footer";
import Introduction from "@/presentation/views/landing/introduction";
import Perk from "@/presentation/views/landing/perk";
import Header from "@/presentation/views/shared/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Introduction />
      <Perk />
      <Categories />
      <Faq/>
      <Footer/>
    </div>
  );
}
