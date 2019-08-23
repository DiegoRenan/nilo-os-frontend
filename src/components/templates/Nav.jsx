import './Nav.css'
import React from 'react'

import NavItem from './NavItem'
import DropMenu from './DropMenu'

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

      <DropMenu title="Administrativo" icon="chevron-down">
        <NavItem icon="" title="Usuários" address="/" />
        <NavItem icon="" title="Empresas" address="/companies" />
        <NavItem icon="" title="Departamentos" address="/" />
        <NavItem icon="" title="Setores" address="/" />
        <NavItem icon="" title="Serviços" address="/" />
        <NavItem icon="" title="Status" address="/" />
        <NavItem icon="" title="Permissões" address="/" />
        <NavItem icon="" title="Funções" address="/" />
      </DropMenu>

    </nav>
  </aside>