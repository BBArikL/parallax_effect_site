import './App.css';
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import cat from "./cat.gif"
import moon from "./moon.png"
import land from "./land.png"
import {useRef} from "react";

function App() {
    const ref = useRef();

    return (
        <div className="App" >
            <header className="App-header">
                <Parallax pages={4} ref={ref}>
                    <ParallaxLayer
                        offset={0}
                        speed={1}
                        factor={2}
                        style={{
                            backgroundImage: `url(${moon})`,
                            backgroundSize: 'cover'
                        }}
                    />

                    <ParallaxLayer
                        offset={1}
                        speed={1}
                        factor={4}
                        style={{
                            backgroundImage: `url(${land})`,
                            backgroundSize: "cover",
                        }}
                    />

                    <ParallaxLayer
                        sticky={{start: 0.9, end: 2.5}}
                        style={{textAlign: "center"}}
                    >
                        <img src={cat} alt={"A cat skydiving"}/>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={0.2}
                        speed={0.05}
                        onClick={() => ref.current.scrollTo(2.5)}
                    >
                        <h2>Boiling something....</h2>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={2.5}
                        speed={2}
                        onClick={() => ref.current.scrollTo(0)}
                    >
                        <h2>This seems interesting...</h2>
                    </ParallaxLayer>

                </Parallax>
            </header>
        </div>
    );
}

export default App;
