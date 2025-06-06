import {SVGProps} from "react";

export default function Camera(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M21 7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  fill="current"/>
            <path
                d="M8.70711 3.29289C8.89464 3.10536 9.149 3 9.41421 3H14.5858C14.851 3 15.1054 3.10536 15.2929 3.29289L17 5H7L8.70711 3.29289Z"
                fill="current"/>
        </svg>
    );
}