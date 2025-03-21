import {SVGProps} from "react";

export default function HeartFill(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12.4 4.60418C14.5675 2.20308 18.2392 1.93773 20.714 4.14664C23.3575 6.50614 23.5088 10.6892 21.0517 13.2476L21.0416 13.258L13.57 20.7909C12.9262 21.4543 11.8737 21.4543 11.23 20.7909L3.75836 13.258L3.7482 13.2476C1.29123 10.6892 1.44244 6.50615 4.08593 4.14665C6.56072 1.93772 10.2325 2.20308 12.4 4.60418Z"
                  fill="current"/>
        </svg>
    )
}