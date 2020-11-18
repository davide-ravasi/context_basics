import React from 'react';

import { LanguageContext } from './contexts/language-context';

class Field extends React.Component {
    
    render() {
        const text = this.context === 'english' ? 'lastname' : 'cognome';
        return (
            <div className="field">
                <label>{text}</label>
                <input type="text" name="text" placeholder="Text" />
            </div>
        )
    }
}
// we create a static value inside class to store context value
// is better when we have only one context to refer
// if we have multiple contexts see Button.js (consumer method)
Field.contextType = LanguageContext;

export default Field;