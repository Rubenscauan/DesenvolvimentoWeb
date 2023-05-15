const BotaoVoltar = ({incrementar}) => {
    return(
        <>
            <button onClick={()=>incrementar()}>ID + 1</button>
        </>
    )
}

export default BotaoVoltar;