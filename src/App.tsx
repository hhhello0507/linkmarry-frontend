import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import FoundationDemo from "./designsystem/demo/foundation.demo";
import ComponentDemo from "./designsystem/demo/component.demo";

function App() {
    return (
        <Router>
            <Routes>
                {/*service*/}
                <Route path={'/'} element={<div>Home Page</div>}/>

                {/*design-system*/}
                <Route path={'/design-system/foundation'} element={<FoundationDemo/>}/>
                <Route path={'/design-system/component'} element={<ComponentDemo/>}/>
                
                {/*not found*/}
                <Route path={'*'} element={<div>404</div>}/>
            </Routes>
        </Router>
    );
}

export default App;
