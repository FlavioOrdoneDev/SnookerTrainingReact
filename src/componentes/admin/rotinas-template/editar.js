import React, { Component } from 'react';
import AdminLayout from '../../layout/adminLayout';

import FormField from '../../shared/formFields';
import { Validate } from '../../shared/shared';

class EditarRotinasTemplate extends Component {

    state = {
        rotinaId:'',
        formType: 'Editar Rotina',
        formError: false,
        formSuccess: '',
        teams:[],
        formdata: {
            nome: {
                element:'input',
                value:'',
                config: {
                    label: 'Nome',
                    name: 'nome_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            categoria: {
                element:'select',
                value:'',
                config: {
                    label: 'Categoria',
                    name: 'categoria_select',
                    type: 'select',
                    options: [ 
                                {
                                    key: 'nome', value: 'Positional Play'
                                },
                                {
                                   key: 'nome', value: 'Safety'
                                },
                                {
                                   key: 'nome', value: 'Tecnique'
                                }
                            ]
                },
                validation: {
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            descricao: {
                element:'input',
                value:'',
                config: {
                    label: 'Descrição',
                    name: 'descricao_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            tipoMeta: {
                element:'input',
                value:'',
                config: {
                    label: 'Tipo de meta',
                    name: 'tipoMeta_input',
                    type: 'text'
                },
                validation: {
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },
            meta: {
                element:'input',
                value:'',
                config: {
                    label: 'Meta',
                    name: 'meta_input',
                    type: 'number'
                },
                validation: {
                    required: true
                },
                valid:false,
                validationMessage:'',
                showlabel: true
            },

        }
    }

    render () {
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>
                        { this.state.formType }
                    </h2>
                    <div>
                        <form onSubmit={(event)=> this.onSubmitForm(event)}>
                        <FormField
                            id={'nome'}
                            formdata={this.state.formdata.nome}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'categoria'}
                            formdata={this.state.formdata.categoria}
                            change={(element)=> this.updateForm(element)}
                        />   

                        <FormField
                            id={'descricao'}
                            formdata={this.state.formdata.descricao}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'tipoMeta'}
                            formdata={this.state.formdata.tipoMeta}
                            change={(element)=> this.updateForm(element)}
                        />

                        <FormField
                            id={'meta'}
                            formdata={this.state.formdata.meta}
                            change={(element)=> this.updateForm(element)}
                        />

                        <div className="success_label">{this.state.formSuccess}</div>
                        {
                            this.state.formError ?
                            <div className="error_label">
                                Algo deu errado
                            </div>
                            : null
                        }
                        <div className="admin_submit">
                            <button onClick={(event) => this.submitForm(event)}>
                                Salvar Rotina
                            </button>
                        </div>

                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default EditarRotinasTemplate;