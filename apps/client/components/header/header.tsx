import classNames from "classnames";
import { getThemeModeFromServer } from "design-kit/server";
import Image from "next/image";
import Link from "next/link";
import { IconLinkButton, TextLinkButton } from "ui-kit/atom";
import { Row } from "ui-kit/foundation";
import { Menu } from "@/components/header/menu";
import st from "./style.module.css";

export async function Header({ background = "solid" }: { background?: "solid" | "transparent" }) {
  const themeMode = await getThemeModeFromServer();

  return (
    <Row
      className={classNames(st.container, st[background])}
      width={"fill-width"}
      justifyContent={"center"}
    >
      <Row className={st.wrapper} width={"fill-width"} alignItems={"center"}>
        <Row width={"fill-flex"} alignItems={"center"}>
          <Link href={"/"} className={st.itemWrapper} style={{ height: 24 }}>
            {themeMode && (
              <Image
                width={73}
                height={24}
                src={`/logo_${themeMode}.svg`}
                alt={"logo"}
                style={{}}
              />
            )}
          </Link>
        </Row>
        <Row width={"fill-flex"} justifyContent={"end"} alignItems={"center"}>
          <Row className={st.itemWrapper}>
            <TextLinkButton
              href={"/subproject"}
              color={"translucent-gray"}
              label={"서브프로젝트"}
            />
          </Row>
          <Row className={st.itemWrapper}>
            <TextLinkButton href={"/playground"} color={"translucent-gray"} label={"놀이터"} />
          </Row>
          <Row className={st.itemWrapper}>
            <TextLinkButton href={"/blog"} color={"translucent-gray"} label={"블로그"} />
          </Row>
          <Row className={st.itemWrapper}>
            <TextLinkButton href={"/series"} color={"translucent-gray"} label={"시리즈"} />
          </Row>
          <Row className={st.itemWrapper}>
            <IconLinkButton
              href={"/search"}
              iconKey={"search"}
              color={"transparent"}
              size={"medium"}
            />
            <Menu />
          </Row>
        </Row>
      </Row>
    </Row>
  );
}
