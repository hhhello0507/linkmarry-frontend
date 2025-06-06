import {SVGProps} from "react";

export default function AddLine(props: SVGProps<SVGSVGElement>) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="current" xmlns="http://www.w3.org/2000/svg" {...props} >
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 2.10051C12.5523 2.10051 13 2.54823 13 3.10051L13 20.8995C13 21.4518 12.5523 21.8995 12 21.8995C11.4477 21.8995 11 21.4518 11 20.8995V3.10051C11 2.54823 11.4477 2.10051 12 2.10051Z"
                  fill="current"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M2.10051 12C2.10051 11.4477 2.54822 11 3.10051 11H20.8995C21.4518 11 21.8995 11.4477 21.8995 12C21.8995 12.5523 21.4518 13 20.8995 13L3.10051 13C2.54822 13 2.10051 12.5523 2.10051 12Z"
                  fill="current"/>
        </svg>
    )
}