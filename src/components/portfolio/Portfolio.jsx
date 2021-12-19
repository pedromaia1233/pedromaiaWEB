import { useEffect, useState } from "react"
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio
} from "../../data"

export default function Portfolio() {

    const [selected, setSelected] = useState("retratoF")
    const [data, setData] = useState([])

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
    ];

    useEffect(()=> {

        switch(selected) {
            case "retratoF":
                setData(featuredPortfolio)
                break;
            case "retratoI":
                setData(webPortfolio)
                break;
            case "marcas":
                setData(mobilePortfolio)
                break;
            case "casais":
                setData(designPortfolio)
                break;
            case "eventos":
                setData(contentPortfolio)
                break;
            case "retratosM":
                setData(contentPortfolio)
                break;
            default:
                setData(featuredPortfolio)
        }

    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) =>(
                    <PortfolioList title={item.title} id={item.id} active={selected === item.id} setSelected={setSelected}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
