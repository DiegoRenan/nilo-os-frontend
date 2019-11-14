import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadStatus, remove } from './statusActions'

import Icon from '../../templates/Icon'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

class StatusList extends Component {

  componentDidMount() {
    this.props.loadStatus()
  }

  removeStatus(id) {
    
    confirmAlert( {
      title: 'Confirma pra Deletar',
      message: `O Status só podera ser removido se não estiver mais vínculado a nenhum ticket. 
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
    let statuses = this.props.statuses || []
    return statuses.map(status => (
      <tr key={status.id}>
        <td><Link to={`show_status/`+status.id}> {status.attributes.status} </Link></td>
        <td> <Link to={`edit_status/`+status.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.removeStatus(status.id)} ><Icon icon='trash' /> </Link> </td>
      </tr>
    ))
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>Status</th>
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

const mapStateToProps = state => ({ statuses: state.statusState.statuses.data })
const mapDispatchToProps = dispatch => bindActionCreators({loadStatus, remove}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(StatusList)