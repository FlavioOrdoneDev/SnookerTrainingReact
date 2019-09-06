import React, {Component} from "react";
import { Link } from "react-router-dom";
import api from "../../servicos/api/api";

import "./estilos/listar.css";

export default class Categorias extends Component {
    state = {
        categorias: [],
        categoriaDetalhes: {},
        pagina : 1
    };

    componentDidMount() {
        this.ObterCategorias();
    }

    ObterCategorias = async (pagina = 1) => {

        this.setState({ categorias: 
            [
                {
                    "id": 1,
                    "nome": "Positional Play",
                    "descricao": "Treino para melhor posicionamento da bola branca"              
                },
                {
                    "id": 2,
                    "nome": "Control Cue Ball",
                    "descricao": "Treino para melhor controle da bola branca"
                },
                {
                    "id": 3,
                    "nome": "Control Cue Ball",
                    "descricao": "Treino para melhor controle da bola branca"
                },
                {
                    "id": 4,
                    "nome": "Safety",
                    "descricao": "Treino para melhorar as saídas de sinuca"
                }
            ], 
            categoriaDetalhes:{}, 
            pagina: 1
        });

        const response = await api.get(`/categorias?pagina=${pagina}`);
        const { categorias , ...categoriaDetalhes} = response.data;
        console.log(response.data);
        console.log(categorias);
        
        console.log("---------------------------");
        console.log(categorias);
        console.log(categoriaDetalhes);
        console.log(pagina);
        
    };

    prevPage = () => {
        const { pagina } = this.state;

        if (pagina === 1) 
            return;

        const pageNumber = pagina - 1;
        this.ObterCategorias(pageNumber);
    };

    nextPage = () => {
        const { pagina, categoriaDetalhes } = this.state;

        if (pagina === categoriaDetalhes.pages) 
            return;

        const pageNumber = pagina + 1;
        this.ObterCategorias(pageNumber);
    };

    render() {
        const { categorias } = this.state;
        return (
            <div>
            <div className="header_wrapper">
                Categorias
            </div>
            <div class="cont">
                <div className="wrapper">      
                    <table className="content-table">
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Detalhes</th>
                        </tr>
                        </thead>
                        <tbody>
                            { categorias.map( categoria => (                    
                                <tr key={ categoria.id }>
                                    <td>{ categoria.nome }</td>
                                    <td>{ categoria.descricao }</td>
                                    <td><Link to={`/categorias/detalhes/${categoria.id}`}>Detalhes</Link></td>
                                </tr>
                            ))}
                            </tbody>
                    </table>
                </div>
            </div>
            </div>                         
        )
    }
}
