const Temperatura =({celsius,kelvin,f}) =>{
    const celsiusParaFahrenheit = (celsius) =>{
        return ((celsius * 9) + (5*32)) / 5;
    }
    const fahrenheitParaCelsius = (f) =>{
        return((f - 32) * 5) / 9;
    }
    const kelvinParaAsDuas = (k) =>{
        let c = k-273;
        let f = celsiusParaFahrenheit(c);
        return {c,f}
        
    }
    return(
        <div>
            <h1> Temperaturas = C: {celsius}, F ={f}, K = {kelvin}</h1> 
            <h1>Celsius - Fahrenheit = {celsiusParaFahrenheit(celsius)}</h1>
            <h1>Fahrenheit - Celsius = {fahrenheitParaCelsius(f)}</h1>
            <h1>Kelvin- Celsius = {kelvinParaAsDuas(kelvin).c}</h1>
            <h1>Kelvin - Fahrenheit = {kelvinParaAsDuas(kelvin).f}</h1>
        </div>

    )
}

export default Temperatura;