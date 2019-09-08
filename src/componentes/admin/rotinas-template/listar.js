import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../layout/adminLayout';
import { firebaseRotinasTemplate } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../shared/shared';


//import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import CircularProgress from '@material-ui/core/CircularProgress';

import "./estilos/listar.css";

class RotinasTemplate extends Component {
    state = {
        isloading: true,
        formType: 'Rotinas',
        rotinasTemplate: []
    };

    componentDidMount() {
        firebaseRotinasTemplate.limitToLast(16).once('value').then((snapshot) => {
            const rotinasTemplate = firebaseLooper(snapshot);

            this.setState({
                isloading: false,
                rotinasTemplate: reverseArray(rotinasTemplate)
            })
        })
    };

    mostrarRotinas = (rotinasTemplate) => (
        <div className="admin_wrapper">
            <div className="border_wrapper">
                <h2>
                    { this.state.formType }
                </h2>
                <div className="table_wrapper">
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Descrição</TableCell>
                                    <TableCell>Tipo Meta</TableCell>
                                    <TableCell>Meta</TableCell>
                                    <TableCell>Detalhes</TableCell>
                                    <TableCell>Editar</TableCell>
                                    <TableCell>Excluir</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {  this.state.rotinasTemplate ?
                                    rotinasTemplate.map( rotina => (                    
                                        <TableRow key={ rotina.id }>
                                            <TableCell>{ rotina.nome }</TableCell>
                                            <TableCell>{ rotina.descricao }</TableCell>
                                            <TableCell>{ rotina.tipoMeta }</TableCell>
                                            <TableCell>{ rotina.meta }</TableCell>
                                            <TableCell><Link to={`/painel/rotinasTemplate/detalhes/${rotina.id}`}>Detalhes</Link></TableCell>
                                            <TableCell><Link to={`/painel/rotinasTemplate/editar/${rotina.id}`}>Editar</Link></TableCell>
                                            <TableCell><Link to={`/painel/rotinasTemplate/editar/${rotina.id}`}>Excluir</Link></TableCell>
                                        </TableRow>
                                    ))
                                    : null
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        </div>      
    )
    
        
    render() {        
        return (  
            <AdminLayout>
                {this.mostrarRotinas(this.state.rotinasTemplate)}
                <div className="admin_progress">
                    {
                        this.state.isloading ?
                            <CircularProgress thickness={7} />
                        : ''
                    }
                    
                </div>
                

            </AdminLayout>        
        );
    }
}

export default RotinasTemplate;
