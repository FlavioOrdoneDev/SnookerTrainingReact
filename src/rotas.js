import React from 'react';
import { Switch } from 'react-router-dom';
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

const Routes = (props) => {
    return (
            <Layout>
                <Switch>

                    <PrivateRoute {...props} path="/painel" exact component={Painel} />
                    <PrivateRoute {...props} path="/categorias" exact component={Categorias} />

                    <PublicRoute  {...props} restricted={false} path="/" exact component={Home}/>
                    <PublicRoute  {...props} restricted={true} path="/login" exact component={Login} />

                    <PrivateRoute {...props} path="/categorias/adicionar" component={AdicionarCategoria} />
                    <PrivateRoute {...props} path="/categorias/editar" component={EditarCategoria} />
                    <PrivateRoute {...props} path="/categorias/detalhes/:id" component={DetalhesCategoria} />

                    <PrivateRoute {...props} path="/rotinas" exact component={Rotinas} />

                    <PrivateRoute {...props} path="/painel/rotinasTemplate" exact component={RotinasTemplate} />
                    <PrivateRoute {...props} path="/painel/rotinasTemplate/adicionar" exact component={AdicionarRotinasTemplate} />
                    <PrivateRoute {...props} path="/painel/rotinasTemplate/editar" exact component={EditarRotinasTemplate} />
                    <PrivateRoute {...props} path="/painel/rotinasTemplate/editar/:id" exact component={EditarRotinasTemplate} />
                    <PrivateRoute {...props} path="/painel/rotinasTemplate/detalhes/:id" exact component={DetalhesRotinasTemplate} />
                </Switch>
            </Layout>
    );
}

export default Routes;