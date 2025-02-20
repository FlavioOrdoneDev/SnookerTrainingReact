import React, { Component } from 'react';
import AdminLayout from '../../layout/adminLayout';
import FormField from '../../shared/formFields';
import { validate } from '../../shared/shared';
import Button from '@material-ui/core/Button';

import { firebaseRotinasTemplate, firebaseCategorias, firebaseDB } from '../../../firebase';
import { firebaseLooper } from '../../shared/shared';

class EditarRotinasTemplate extends Component {

    state = {
        rotinaId:'',
        formType: '',
        formError: false,
        formSuccess: '',
        categorias:[],
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
                                    key: '1', value: 'Positional Play'
                                },
                                {
                                   key: '2', value: 'Safety'
                                },
                                {
                                   key: '3', value: 'Tecnique'
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
                element:'select',
                value:'',
                config: {
                    label: 'Tipo de meta',
                    name: 'tipoMeta_select',
                    type: 'select',
                    options: [ 
                                {
                                    key: '1', value: 'Total de Pontos'
                                },
                                {
                                   key: '2', value: 'Total de Bolas'
                                },
                                {
                                   key: '3', value: 'Número de Tentativas'
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

    updateForm(element) {
        const newFormdata = {...this.state.formdata}
        const newElement = {...newFormdata[element.id]}

        newElement.value = element.event.target.value;

        let validData = validate(newElement);
        newElement.valid = validData[0];
        newElement.validationMessage = validData[1];

        newFormdata[element.id] = newElement;

        this.setState({
            formError: false,
            formdata: newFormdata
        })
    }

    updateFields(rotina, categoriaOptions, categorias, type, rotinaId) {
        const newFormdata = {
            ...this.state.formdata
        }

        for (let key in newFormdata) {
            if (rotina) {
                newFormdata[key].value = rotina[key];
                newFormdata[key].valid = true;
            }
            if (key === 'categoria') {
                newFormdata[key].config.options = categoriaOptions;
            }
        }

        this.setState({
            rotinaId,
            formType: type,
            formdata: newFormdata,
            categorias
        })

    }

    componentDidMount() {
             
        const rotinaId = this.props.match.params.id;
        const getCategories = (rotina, type) => {
            firebaseCategorias.once('value').then(snapshot => {
                const categorias = firebaseLooper(snapshot);

                const categoriaOptions = [];

                snapshot.forEach((childSnapshot) => {
                    categoriaOptions.push({
                        key: childSnapshot.val().nome,
                        value: childSnapshot.val().nome
                    })
                });
                this.updateFields(rotina, categoriaOptions, categorias,type, rotinaId);
            })
        }
        

        if (!rotinaId) {
            getCategories(false, 'Adicionar Rotina');
        } 
        else {
            firebaseDB.ref(`rotinasTemplate/${rotinaId}`).once('value')
            .then((snapshot)=>{
                const rotina = snapshot.val();

                getCategories(rotina, 'Editar Rotina');
            })
        }
    }

    successForm(message) {
        this.setState({
            formSuccess: message
        });

        setTimeout(() => {
            this.setState({
                formSuccess: ''
            });
        }, 3000)
    }

    submitForm(event){
        event.preventDefault();
        
        let dataToSubmit = {};
        let formIsValid = true;

        for(let key in this.state.formdata){
            dataToSubmit[key] = this.state.formdata[key].value;
            formIsValid = this.state.formdata[key].valid && formIsValid;
        }

        // Pegar dados de objetos internos

        // this.state.teams.forEach((team) => {
        //     if(team.shortName === dataToSubmit.local){
        //         dataToSubmit['localThmb'] = team.thmb
        //     }
        // });

        if(formIsValid){
            if (this.state.formType === 'Editar Rotina') {
                firebaseDB.ref(`rotinasTemplate/${this.state.rotinaId}`)
                .update(dataToSubmit).then(() => {
                    this.successForm('Atualizado com sucesso!');
                }).catch((e) => {
                    this.setState({formError: true})
                })
            }
            else {
                firebaseRotinasTemplate.push(dataToSubmit).then(() => {
                    this.props.history.push('/painel/rotinasTemplate');
                }).catch((e) => {
                    this.setState({ formError: true });
                })
            }       

        } 
        else {
            this.setState({
                formError: true
            })
        }
    }

    render () {
        return (
            <AdminLayout>
                <div className="admin_wrapper">
                    <div className="border_wrapper">
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
                            <div className="">
                                <Button variant="contained" color="primary" onClick={(event) => this.submitForm(event)}>
                                    Salvar Rotina
                                </Button>
                            </div>

                            </form>
                        </div>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default EditarRotinasTemplate;