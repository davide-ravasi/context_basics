import React from 'react';
import { LanguageContext } from './contexts/language-context';
import { ColorContext } from './contexts/color-context';

class Button extends React.Component {  
    render() {
        return (
            <ColorContext.Consumer>
                {color => (
                    <button className={`ui ${color} button`}>
                        <LanguageContext.Consumer>
                            {(value) => (
                                value === 'english' ? 'send' : 'invia'
                            )}
                        </LanguageContext.Consumer>
                    </button>
                    )

                }
            </ColorContext.Consumer>
        )
    }
}
/* we can use consumer to use the context type */
/* it's better when we have multiple contexts */
/* refer to Field.js for the other method */

export default Button;