import {CSSProperties, HTMLAttributes} from "react";

interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
    w?: number;
    h?: number;
    style?: CSSProperties;
}

function Spacer(
    {
        w,
        h,
        style,
        ...props
    }: SpacerProps
) {
    return (
        <div style={{
            minWidth: `${w}px`,
            minHeight: `${h}px`,
            ...style
        }} {...props}/>
    );
}

export default Spacer;