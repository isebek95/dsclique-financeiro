import React from 'react'
import CIcon from '@coreui/icons-react'

//MENU

const _nav =  [
  //#region  FINANCEIRO
  {
    _tag: 'CSidebarNavItem',
    name: 'Visão Geral',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Gestão']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Financeiro',
    route: '/base',
    icon: 'cil-dollar',
    _children: [
        {
          _tag: 'CSidebarNavTitle',
          _children: ['Contas a pagar']
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Lançar Despesa',
          to: '/base/paginations',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Rel. Desesas',
          to: '/base/popovers',
        },


        {
          _tag: 'CSidebarNavTitle',
          _children: ['Contas a receber']
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Lançar Receitas',
          to: '/base/paginations',
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Rel. Receitas',
          to: '/base/popovers',
        },
        
        {
          _tag: 'CSidebarNavTitle',
          _children: ['Relatórios Gerais']
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Fluxo de Caixa',
          to: '/base/paginations',
        },

    ],
  },
  //#endregion
  
  //#region CLIENTES
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Clientes',
    route: '/Cliente',
    icon: 'cil-people',
    _children: [
                {
          _tag: 'CSidebarNavItem',
          name: 'Cadastrar Cliente',
          to: '/Cliente/Cadastro',
          badge: {
            color: 'info',
            text: 'NEW',
          }
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Listar Clientes',
          to: '/base/popovers',
        },

      ],
  },

  //#endregion
 
  //#region FORNECEDORES
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Fornecedores',
    route: '/base',
    icon: 'cil-people',
    _children: [
                {
          _tag: 'CSidebarNavItem',
          name: 'Cadastrar Fornecedor',
          to: '/base/paginations',
          badge: {
            color: 'info',
            text: 'NEW',
          }
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Listar Fornecedor',
          to: '/base/popovers',
        },

      ],
  },

  //#endregion

  //#region PRODUTOS
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Produtos',
    route: '/base',
    icon: 'cil-basket',
    _children: [
                {
          _tag: 'CSidebarNavItem',
          name: 'Cadastrar Produto',
          to: '/base/paginations',
          badge: {
            color: 'info',
            text: 'NEW',
          }
        },
        {
          _tag: 'CSidebarNavItem',
          name: 'Listar Produtos',
          to: '/base/popovers',
        },

      ],
  },

  //#endregion

  //#region  CONFIGURAÇÕES
  {

    _tag: 'CSidebarNavItem',
    name: 'Configurações',
    to: '/base/popovers',
    icon:'cil-settings',

  },
  //#endregion

  //#region  SAIR
  {
    _tag: 'CSidebarNavItem',
    name: 'Sair',
    to: '/base/popovers',
    icon:'cil-Arrow-Thick-Left',
  }
  //#region 
]

export default _nav
