import Card from "./Card";
import {data} from "../../helper/data"
import "../body/Body.scss"

console.log(data)

const Body = () => {
    return(
        <div className="card-container">
            {data.map((city,index) => {
               return <Card {...city} key={index}/>
            })}
        </div>
    )
}

export default Body;