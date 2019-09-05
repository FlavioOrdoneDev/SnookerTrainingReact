import React from 'react';
import AdminLayout from '../../componentes/layout/adminLayout';
import './estilo.css';

const Painel = () => {
    return (
        <AdminLayout>
            <div className="user_dashboard">
                <div>
                    Painel Administrativo
                </div>
            </div>
        </AdminLayout>
        
    );
}

export default Painel;