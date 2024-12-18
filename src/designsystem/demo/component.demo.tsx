import React from 'react';
import Button, {ButtonRole, ButtonSize} from "../component/button";

function ComponentDemo() {
    const buttonSizes: ButtonSize[] = ['large', 'medium', 'small'];
    const buttonRoles: ButtonRole[] = ['primary', 'secondary', 'assistive'];

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
        }}>
            {buttonRoles.map(role => (
                <div style={{
                    display: 'flex',
                    gap: 8
                }}>
                    {buttonSizes.map(size =>
                        <div style={{
                            display: 'flex',
                            gap: 8
                        }}>
                            <Button text={'Button'} role={role} size={size}/>
                            <Button text={'Button'} role={role} size={size} enabled={false}/>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ComponentDemo;