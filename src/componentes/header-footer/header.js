import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
                <div>
                    <div className="title-area">
                        <h2>Snooker Training</h2>
                    </div> 
                    <div className="banner-area">            
                        <label htmlFor="res-menu" className="res-menu">Menu</label>
                        <input type="checkbox" id="res-menu"/>
                        <ul className="menu-area">
                            <li><a href="/">Home</a></li>
                            <li><a href="/categorias">Categorias</a></li>
                            <li><a href="/rotinasTemplate">Rotinas</a></li>
                            <li><a href="/treinosTemplate">Treinos</a></li>
                            <li><a href="/Resultados">Resultados</a></li>
                            <li><a href="/painel">Painel Admin</a></li>
                        </ul>                
                    </div>
                </div>
        );
    }
}

export default Header;