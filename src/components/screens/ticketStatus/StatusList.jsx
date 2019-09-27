import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { loadStatus, remove } from './statusActions'

import Icon from '../../templates/Icon'

class StatusList extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.loadStatus()
  }

  renderRows() {
    let statuses = this.props.statuses || []
    return statuses.map(status => (
      <tr key={status.id}>
        <td><Link to={`show_status/`+status.id}> {status.attributes.status} </Link></td>
        <td> <Link to={`edit_status/`+status.id}> <Icon icon='edit' /> </Link> </td>
        <td> <Link to="#" onClick={() =>  this.props.remove(status.id)} ><Icon icon='trash' /> </Link> </td>
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