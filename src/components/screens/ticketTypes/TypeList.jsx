import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadTypes, remove } from './typeActions'

import Icon from '../../templates/Icon'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class TypeList extends Component {

  componentDidMount() {
    this.props.loadTypes()
  }


  removeType(id) {
    
    confirmAlert( {
      title: 'Confirma pra Deletar',
      message: `O Tipo só podera ser removido se não estiver mais vínculado a nenhum ticket. 
                Deseja continuar?`,
      buttons: [
        {
          label: 'Confirmar',
          onClick: () => this.props.remove(id)
        },
        {
          label: 'Cancelar',
          onClick: () => {}
        }
      ]
    });

  }

  renderRows() {
    let types = this.props.types || []
    return types.map(type => (
      <tr key={type.id}>
        <td><Link to={`show_type/`+type.id}> {type.attributes.name} </Link></td>
        <td> <Link to={`edit_type/`+type.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.removeType(type.id)} ><Icon icon='trash' /> </Link> </td>
      </tr>
    ))
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Tipos de Serviços</th>
            <th> - </th>
            <th> - </th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({ types: state.typesState.types.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadTypes, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TypeList)