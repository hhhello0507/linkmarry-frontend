import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

function KakaoRedirectPage() {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        alert(searchParams.get('code'));
        // TODO: 서버에 로그인 request
    }, []);
    
    return (
        <div></div>
    );
}

export default KakaoRedirectPage;