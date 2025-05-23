import {SVGProps} from "react";

export default function ExclamationLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M10.2393 4.78811L10.4691 13.4804C10.5001 14.5021 11.0439 15.0637 12.0043 15.0637C12.9291 15.0637 13.4702 14.5192 13.5011 13.4742L13.7443 4.80217C13.7753 3.7495 13.0267 3 11.9851 3C10.9329 3 10.2083 3.73534 10.2393 4.78811Z"
                fill="current"/>
            <path
                d="M10 19.0323C10 20.1573 10.9074 21 12.0043 21C13.0982 21 14 20.1715 14 19.0323C14 17.9024 13.1116 17.0568 12.0043 17.0568C10.8941 17.0568 10 17.9135 10 19.0323Z"
                fill="current"/>
        </svg>
    )
}