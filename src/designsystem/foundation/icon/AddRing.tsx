import {SVGProps} from "react";

export default function AddRing(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 6.05025C12.5523 6.05025 13 6.49797 13 7.05025V16.9497C13 17.502 12.5523 17.9497 12 17.9497C11.4477 17.9497 11 17.502 11 16.9497V7.05025C11 6.49797 11.4477 6.05025 12 6.05025Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M6.05025 12C6.05025 11.4477 6.49797 11 7.05025 11H16.9497C17.502 11 17.9497 11.4477 17.9497 12C17.9497 12.5523 17.502 13 16.9497 13H7.05025C6.49797 13 6.05025 12.5523 6.05025 12Z"
                  fill="current"/>
        </svg>
    );
}