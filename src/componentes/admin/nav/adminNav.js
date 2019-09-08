import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';

const AdminNav = () => {

    const links = [
        {
            title: 'Categorias',
            linkTo: '/painel/categorias'
        },
        {
            title: 'Rotinas',
            linkTo: '/painel/rotinasTemplate'
        },
        {
            title: 'Adicionar Rotina',
            linkTo: '/painel/rotinasTemplate/editar'
        },
        {
            title: 'Editar Rotina',
            linkTo: '/painel/rotinasTemplate/editar'
        },
        {
            title: 'Treinos',
            linkTo: '/painel/edit_match'
        },        
        {
            title: 'Resultados',
            linkTo: '/painel/add_player'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom:'1px solid #353535'
    }


    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem>
            </Link>
        ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Log out succesfull')
        },(error)=>{
            console.log('Error logging out')
        })
    }


    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={()=> logoutHandler()}>
                Log out
            </ListItem>
        </div>
    );
};

export default AdminNav;