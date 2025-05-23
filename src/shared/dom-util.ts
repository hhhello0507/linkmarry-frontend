import {RefObject} from "react";

export function increaseFontSize(ref: RefObject<HTMLElement>, increment: number) {
    if (ref.current) {
        // containerRef 아래 모든 요소 가져오기
        const elements = ref.current.querySelectorAll("*");

        elements.forEach((element) => {
            const htmlElement = element as HTMLElement;
            if (!htmlElement) return;

            const computedStyle = window.getComputedStyle(htmlElement);
            const currentFontSize = parseFloat(computedStyle.fontSize);

            // 이미 증가한 요소인지 확인 (커스텀 데이터 속성 사용)
            if (!htmlElement.dataset.originalFontSize) {
                htmlElement.dataset.originalFontSize = `${currentFontSize}`; // 원래 크기 저장
            }
        });

        elements.forEach((element) => {
            const htmlElement = element as HTMLElement;
            if (!htmlElement) return;

            const originalFontSize = htmlElement.dataset.originalFontSize;
            if (!originalFontSize) return;

            const parsedOriginalFontSize = parseFloat(originalFontSize);
            if (!parsedOriginalFontSize) return;

            // 원래 크기에서만 증가값을 더함
            htmlElement.style.fontSize = `${parsedOriginalFontSize + increment}px`;
        })
    }
}
