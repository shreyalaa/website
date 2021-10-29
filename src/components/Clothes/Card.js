import classes from "./Card.module.css"
const Card = (props) =>{
    return(
        <section>
            <div className = {classes.card}>
                <body className = {classes.body}>
                    <header>
                       <h2> {props.heading}</h2>
                    </header>
                    <text>
                        {props.text}
                    </text>
                    <actions className  = {classes.actions}>
                        <button>add to cart</button>
                        <button>order now</button>
                    </actions>
                </body>
                <image>
                    <img src = {props.img} alt = "img"/>
                </image>

            </div>
        </section>
    )
}

export default Card