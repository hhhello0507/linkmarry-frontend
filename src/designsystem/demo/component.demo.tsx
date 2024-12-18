import React from 'react';
import Button, {ButtonRole, ButtonSize} from "../component/button";
import HorizontalDivider, {HorizontalDividerSize} from "../component/horizontalDivider";

function ComponentDemo() {
    const buttonSizes: ButtonSize[] = ['large', 'medium', 'small'];
    const buttonRoles: ButtonRole[] = ['primary', 'secondary', 'assistive'];

    const dividerSizes: HorizontalDividerSize[] = ['large', 'medium', 'small'];

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

            {dividerSizes.map(size => (
                <HorizontalDivider size={size}/>
            ))}
        </div>
    );
}

export default ComponentDemo;