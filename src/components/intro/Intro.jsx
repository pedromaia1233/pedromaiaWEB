import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef} from "react"

export default function Intro() {

    const textRef = useRef()

    useEffect(()=> {
        console.log(textRef);
        init(textRef.current, { 
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ['Photography']
        })
    },[])

    return (
        <div className="intro" id="intro">
            <div className="imageInitial">
                <div className="right">
                    <div className="wrapper">
                        <h2>Hi There, I'm </h2>
                        <h1>Pedro Maia</h1>
                        <h3>I love <span ref={textRef}></span></h3>
                    </div>
                </div>
            </div>
            
            <div className="secondPart">
                <button>OLA</button>
                <div>OLAASAS</div>
                <div>OLAASAS</div>
                <div>OLAASAS</div>
                <div>OLAASAS</div>
            </div>
        </div>
    )
}
