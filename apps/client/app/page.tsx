import { HeadlineSectionContainer } from "ui-kit/atom";
import { Col } from "ui-kit/foundation";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { BlogSection } from "@/widget/home/blogSection/blogSection";
import { HeroSection } from "@/widget/home/heroSection/heroSection";
import { SeriesSection } from "@/widget/home/seriesSection/seriesSection";
import { SubProjectSection } from "@/widget/home/subProjectSection/subProjectSection";
import st from "./page.module.css";

export default async function Home() {
  return (
    <Col className={st.loadBackground} width={"fill-width"}>
      <Header />
      <HeroSection />
      <HeadlineSectionContainer>
        <SubProjectSection />
        <SeriesSection />
        <BlogSection />
      </HeadlineSectionContainer>
      <Footer />
    </Col>
  );
}
