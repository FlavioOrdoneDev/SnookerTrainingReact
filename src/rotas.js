import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './componentes/layout/layout';

import PrivateRoute from './componentes/authRoutes/privateRoutes';
import PublicRoute from './componentes/authRoutes/publicRoutes';

import Home from './componentes/home';
import Login from './componentes/login';
import Painel from './componentes/admin/painel';

import Categorias from './componentes/categorias/listar';
import AdicionarCategoria from './componentes/categorias/adicionar';
import EditarCategoria from './componentes/categorias/editar';
import DetalhesCategoria from './componentes/categorias/detalhes';

import Rotinas from './componentes/rotinas/listar';

import RotinasTemplate from './componentes/admin/rotinas-template/listar';
import AdicionarRotinasTemplate from './componentes/admin/rotinas-template/adicionar';
import EditarRotinasTemplate from './componentes/admin/rotinas-template/editar';
import DetalhesRotinasTemplate from './componentes/admin/rotinas-template/detalhes';

export default function Rotas(props) {
    return (
            <Layout>
                <Switch>

                    <PrivateRoute {...props} path="/painel" exact component={Painel} />
                    <PrivateRoute {...props} path="/categorias" exact component={Categorias} />

                    <PublicRoute  {...props} restricted={false} path="/" exact component={Home}/>
                    <PublicRoute  {...props} restricted={true} path="/login" exact component={Login} />

                    <Route path="/categorias/adicionar" component={AdicionarCategoria} />
                    <Route path="/categorias/editar" component={EditarCategoria} />
                    <Route path="/categorias/detalhes/:id" component={DetalhesCategoria} />

                    <Route path="/rotinas" exact component={Rotinas} />

                    <Route path="/rotinasTemplate" exact component={RotinasTemplate} />
                    <Route path="/rotinasTemplate/adicionar" component={AdicionarRotinasTemplate} />
                    <Route path="/rotinasTemplate/editar" component={EditarRotinasTemplate} />
                    <Route path="/rotinasTemplate/detalhes/:id" component={DetalhesRotinasTemplate} />
                </Switch>
            </Layout>
    );
}