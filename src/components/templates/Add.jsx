import './Add.css'
import React from 'react'

import { Link } from 'react-router-dom'

export default props =>
  <div className="ml-4 mr-4">
    <Link className="btn btn-light btn-sm" to="/new_ticket" >
      <span className="">Abrir Ticket</span>
    </Link>
  </div>