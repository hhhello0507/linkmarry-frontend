import React from 'react';
import styled from "styled-components";
import makeText, {TextType} from "./designsystem/foundation/text/textType";
import Icon, {IconType} from "./designsystem/foundation/icon";

function App() {

    return (
        <div>
            {Object.keys(TextType)
                .filter((key) => isNaN(Number(key)))
                .map((key) => TextType[key as keyof typeof TextType])
                .map((text) => (
                    <Text text={text}>가나다라마바사ABCDEFG</Text>
                ))}
            <div style={{
                display: "flex",
                flexDirection: "column",
            }}>
                {Object.keys(IconType)
                    .filter((key) => isNaN(Number(key)))
                    .map((key) => IconType[key as keyof typeof IconType])
                    .map((icon) => (
                        <Icon type={icon} size={48} tint={'gray'}/>
                    ))}
            </div>
        </div>
    );
}


const Text = styled.div<{ text: TextType }>`
    ${({text}) => makeText(text)};
`;

export default App;
