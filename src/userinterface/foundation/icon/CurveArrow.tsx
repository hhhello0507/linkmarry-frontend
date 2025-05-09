import {SVGProps} from "react";

export default function CurveArrow(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M5 4C5.55228 4 6 4.44772 6 5L6 8C6 10.7614 8.23858 13 11 13L18.5858 13L13.9289 8.34315C13.5384 7.95262 13.5384 7.31946 13.9289 6.92893C14.3195 6.53841 14.9526 6.53841 15.3431 6.92893L21.7071 13.2929C22.0976 13.6834 22.0976 14.3166 21.7071 14.7071L15.3431 21.0711C14.9526 21.4616 14.3195 21.4616 13.9289 21.0711C13.5384 20.6805 13.5384 20.0474 13.9289 19.6569L18.5858 15L11 15C7.13401 15 4 11.866 4 8L4 5C4 4.44772 4.44772 4 5 4Z"
                  fill="current"/>
        </svg>
    )
}