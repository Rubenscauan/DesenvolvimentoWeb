import Vendedor from "./Vendedor";

const Layout = () => {
    return(
        <div>
            <h1>Arquivo de vendas</h1>
            <div class = 'nomes'>
                <h2>Vendedores</h2>
                <Vendedor/>
                <h2>Compradores</h2>
                <h2>Produtos</h2>
            </div>
        </div>
    )
}

export default Layout;