import type { TypeOlNumberingType, TypeUlNumberingType } from "../type";

export function numbering({
  target,
  olNumberingType,
  ulNumberingType,
  getOlNumbering,
  getNextOlNumberingType,
  getUlNumbering,
  getNextUlNumberingType,
}: {
  target: NodeListOf<ChildNode>;
  olNumberingType: TypeOlNumberingType;
  ulNumberingType: TypeUlNumberingType;
  getOlNumbering: (n: number, v: TypeOlNumberingType) => string;
  getNextOlNumberingType: (v: TypeOlNumberingType) => TypeOlNumberingType;
  getUlNumbering: (n: number, v: TypeUlNumberingType) => string;
  getNextUlNumberingType: (v: TypeUlNumberingType) => TypeUlNumberingType;
}): void {
  target.forEach((node) => {
    if (!(node instanceof Element)) return;

    const tagName = node.tagName.toLowerCase();

    if (tagName === "ol") {
      // ol 처리
      let cnt = 1;
      const childrenNodes = node.childNodes;
      childrenNodes.forEach((child) => {
        if (child instanceof Element && child.tagName.toLowerCase() === "li") {
          const numberingEl = child.querySelector(".ol-item");
          if (numberingEl !== null) {
            numberingEl.innerHTML = getOlNumbering(cnt++, olNumberingType);
          }

          // li의 자식 노드들 재귀 처리 (다음 타입으로)
          if (child.childNodes.length > 0) {
            numbering({
              target: child.childNodes,
              olNumberingType: getNextOlNumberingType(olNumberingType),
              ulNumberingType,
              getOlNumbering,
              getNextOlNumberingType,
              getUlNumbering,
              getNextUlNumberingType,
            });
          }
        }
      });
    } else if (tagName === "ul") {
      // ul 처리
      let cnt = 1;
      const childrenNodes = node.childNodes;
      childrenNodes.forEach((child) => {
        if (child instanceof Element && child.tagName.toLowerCase() === "li") {
          const numberingEl = child.querySelector(".ul-item");
          if (numberingEl !== null) {
            numberingEl.innerHTML = getUlNumbering(cnt++, ulNumberingType);
          }

          // li의 자식 노드들 재귀 처리 (다음 타입으로)
          if (child.childNodes.length > 0) {
            numbering({
              target: child.childNodes,
              olNumberingType,
              ulNumberingType: getNextUlNumberingType(ulNumberingType),
              getOlNumbering,
              getNextOlNumberingType,
              getUlNumbering,
              getNextUlNumberingType,
            });
          }
        }
      });
    } else {
      // 그 외 요소는 자식 노드만 재귀 탐색 (현재 타입 유지)
      if (node.childNodes.length > 0) {
        numbering({
          target: node.childNodes,
          olNumberingType,
          ulNumberingType,
          getOlNumbering,
          getNextOlNumberingType,
          getUlNumbering,
          getNextUlNumberingType,
        });
      }
    }
  });
}
