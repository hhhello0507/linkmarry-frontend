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
            minWidth: w &&`${w}px`,
            minHeight: h && `${h}px`,
            flex: !w && !h ? 1 : undefined,
            ...style
        }} {...props}/>
    );
}

export default Spacer;