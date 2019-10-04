import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadTypes, remove } from './typeActions'

import Icon from '../../templates/Icon'

class TypeList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadTypes()
  }

  renderRows() {
    let types = this.props.types || []
    return types.map(type => (
      <tr key={type.id}>
        <td><Link to={`show_type/`+type.id}> {type.attributes.name} </Link></td>
        <td> <Link to={`edit_type/`+type.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.props.remove(type.id)} ><Icon icon='trash' /> </Link> </td>
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