import "../Card.css"

const Card = (props) => {

    return (
        <div>
            <img className="picture" src={props.image} width="300" height="300"></img>
            <h4 className="title"> {props.title} </h4>
            <h5 className="desc"> {props.desc} </h5>
            <a className="button" href={props.out}>take a listen!</a>
        </div>
    )
}

export default Card;