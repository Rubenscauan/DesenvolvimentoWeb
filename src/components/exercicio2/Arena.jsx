

const Hero = ({Name, Image}) => {
    return(
        <div>
            <h1>My Name is: {Name}</h1>
            <h1><img src= {Image}/></h1>
        </div>
    )
}
export {Hero};