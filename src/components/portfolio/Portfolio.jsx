import { useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"

export default function Portfolio() {

    const [selected, setSelected] = useState("retratoF")

    const list = [
        {
            id: "retratoF",
            title: "Retrato Femninino"
        },
        {
            id: "retratoI",
            title: "Retrato Intimista"
        },
        {
            id: "marcas",
            title: "Marcas"
        },
        {
            id: "casais",
            title: "Casais"
        },
        {
            id: "eventos",
            title: "Eventos"
        },
        {
            id: "retratosM",
            title: "Retratos Masculino"
        }
    ]

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) =>(
                    <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected}/>
                ))}
            </ul>
            <div className="container">
                <div className="item">
                    <img src="https://play-lh.googleusercontent.com/berY6CZvEXkoH72AdLQI9r6CcHLmMAyMyL1bAjDFaqwHJIJM-QTC5SwVQsAe8Bi6fCfq" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.figmacrush.com/wp-content/uploads/2019/07/Banking-app-Figma-mobile-template-1014x487.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.figmacrush.com/wp-content/uploads/2019/07/Banking-app-Figma-mobile-template-1014x487.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.figmacrush.com/wp-content/uploads/2019/07/Banking-app-Figma-mobile-template-1014x487.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.figmacrush.com/wp-content/uploads/2019/07/Banking-app-Figma-mobile-template-1014x487.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.figmacrush.com/wp-content/uploads/2019/07/Banking-app-Figma-mobile-template-1014x487.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
                <div className="item">
                    <img src="https://www.figmacrush.com/wp-content/uploads/2019/07/Banking-app-Figma-mobile-template-1014x487.jpg" alt="" />
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
