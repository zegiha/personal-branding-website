import { HeadlineSectionContainer } from "ui-kit/atom";
import { Col } from "ui-kit/foundation";
import { Header } from "@/components/header/header";
import { HeroSection } from "@/widget/home/heroSection/heroSection";
import { SubProjectSection } from "@/widget/home/subProjectSection/subProjectSection";
import st from "./page.module.css";

export default async function Home() {
  return (
    <Col className={st.loadBackground} width={"fill-width"}>
      <Header />
      <HeroSection />
      <HeadlineSectionContainer>
        <SubProjectSection />
      </HeadlineSectionContainer>
    </Col>
  );
}
