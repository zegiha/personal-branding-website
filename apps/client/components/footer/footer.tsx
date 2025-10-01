import { LinkButton } from "ui-kit/atom";
import { Col, Row, Typo } from "ui-kit/foundation";
import { ContentColumn } from "@/components/footer/contentColumn";
import st from "./footer.module.css";

export function Footer() {
  return (
    <Col className={st.container} width={"fill-width"}>
      <Row className={st.section} width={"fill-width"} justifyContent={"center"}>
        <Row
          className={st.sectionWrapper}
          width={"fill-width"}
          gap={24}
          justifyContent={"space-between"}
          wrap
        >
          <ContentColumn
            category={"서비스"}
            contents={[
              { label: "제작자 웹사이트", url: "https://zegiha.work" },
              { label: "감상", url: "https://gamsang.com" },
              { label: "이룸", url: "https://irum.com" },
              { label: "Nexus", url: "https://nexus.zegiha.work" },
              { label: "Rabbit", url: "https://rabbit.com" },
            ]}
          />
          <ContentColumn
            category={"주요 기능"}
            contents={[
              { label: "홈", url: "https://zegiha.work" },
              { label: "서브 프로젝트", url: "https://zegiha.work/subproject" },
              { label: "놀이터", url: "https://zegiha.work/playground" },
              { label: "블로그", url: "https://zegiha.work/blog" },
              { label: "시리즈", url: "https://zegiha.work/series" },
              { label: "문의 건의", url: "https://zegiha.work/suggest" },
            ]}
          />
          <ContentColumn
            category={"연락처"}
            contents={[
              { label: "이메일 : leeseoyul070814@gmail.com" },
              { label: "Github: https://github.com/zegiha" },
              { label: "LinkedIn: https://www.linkedin.com/in/zegiha/" },
            ]}
          />
          <ContentColumn
            category={"포트폴리오"}
            contents={[{ label: "포트폴리오", url: "https://zegiha.work/portfolio" }]}
          />
          <Col gap={12}>
            <Typo.label.medium color={"strong"}>후원하기</Typo.label.medium>
            <LinkButton
              href={"/donation"}
              size={"medium"}
              color={"translucent-gray"}
              label={"후원하기"}
            />
            <LinkButton
              href={"/donation"}
              size={"medium"}
              color={"translucent-gray"}
              label={"후원하기"}
            />
          </Col>
        </Row>
      </Row>
      <Row className={st.section} width={"fill-width"} justifyContent={"center"}>
        <Row className={st.sectionWrapper} width={"fill-width"}>
          <Typo.label.small>© 2025 Zegiha. All Rights Reserved.</Typo.label.small>
        </Row>
      </Row>
    </Col>
  );
}
