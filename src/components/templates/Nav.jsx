import './Nav.css'
import React from 'react'

import NavItem from './NavItem'
import DropMenu from './DropMenu'
import If from '../templates/If'

export default props =>
  <aside className="menu-area">
    <nav className="menu">
      <NavItem icon="inbox" title="Caixa de entrada" address="/" />
      <NavItem icon="tasks" title="Meus Tickets" address="/mytickets" />
      <NavItem icon="lock" title="Tickets Fechados" address="/closedtickets" />

      <DropMenu title="Filters" icon="chevron-down">
        <NavItem icon="filter" title="Delegadas a mim" address="/" />
        <NavItem icon="filter" title="Prioridade 1" address="/" />
        <NavItem icon="filter" title="Prioridade 2" address="/" />
      </DropMenu>

      <If test={localStorage.getItem("admin") === "true"}>
        <DropMenu title="Administrativo" icon="chevron-down">
          <NavItem icon="" title="Usuários" address="/employees" />
          <NavItem icon="" title="Empresas" address="/companies" />
          <NavItem icon="" title="Departamentos" address="/departments" />
          <NavItem icon="" title="Setores" address="/sectors" />
          <NavItem icon="" title="Tipos" address="/types" />
        </DropMenu>
      </If>
      
    </nav>
  </aside>