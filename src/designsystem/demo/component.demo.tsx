import React, {useState} from 'react';
import Button, {ButtonRole, ButtonSize} from "../component/button";
import HorizontalDivider, {HorizontalDividerSize} from "../component/horizontalDivider";
import {TextField} from "../component/textField";

function ComponentDemo() {
    const buttonSizes: ButtonSize[] = ['large', 'medium', 'small'];
    const buttonRoles: ButtonRole[] = ['primary', 'secondary', 'assistive'];

    const dividerSizes: HorizontalDividerSize[] = ['large', 'medium', 'small'];

    const [input, setInput] = useState('');

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
            
            <TextField
                placeholder={'placeholder'}
                label={'label'}
                supportingText={'supportingText'}
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <TextField
                placeholder={'placeholder'}
                label={'label'}
                supportingText={'supportingText'}
                isError={true}
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{
                    marginTop: 32
                }}
            />
            <TextField
                placeholder={'placeholder'}
                label={'label'}
                supportingText={'supportingText'}
                enabled={false}
                value={input}
                onChange={e => setInput(e.target.value)}
                style={{
                    marginTop: 32
                }}
            />
        </div>
    );
}

export default ComponentDemo;