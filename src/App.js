import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./presets/dark.json";
import { SocialIcon } from 'react-social-icons';

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])
    

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <p>
                    <code>and.rew.gold/berg</code>
                </p>
                <body>
                    <SocialIcon bgColor="transparent" url="https://www.linkedin.com/in/andrew-goldberg-06744a233/" />
                    <SocialIcon bgColor="transparent" url="https://github.com/ordrew/" />
                </body>
            </header>
        </div>
    );
}

export default App;
