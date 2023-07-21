import "../body/Body.scss"

const Card = (data)=> {
    return(
        <div className="card">
            <h1 className="title">{data.title}</h1>
            <img src={data.image} alt="" />
            <p> {data.desc} </p>
        </div>
    )
}
export default Card;