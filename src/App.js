import React from 'react';
import UserCreate from './UserCreate';
import { LanguageContext } from './contexts/language-context';
import { ColorContext } from './contexts/color-context';

class App extends React.Component {
    state = {
        language: 'english'
    }

    onSelectLanguage = (lang) => {
        this.setState({
            language: lang
        });
    }

    render() {
        return (
            <div className="ui container">
                Select a language:
                <i className="flag us" onClick={() => this.onSelectLanguage('english')}></i>
                <i className="flag it" onClick={() => this.onSelectLanguage('italian')}></i>
                {/* the provider is used to update the value if context object passed to childrens */}
                
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider> 
                {/* if we create another Provider we create a separate pipe of informations */} 
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value='italian'>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>             
            </div>
        )
    }
}

export default App;