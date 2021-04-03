import React from 'react'

import {CButton,CCard,CCardBody,CCardFooter,CCardHeader,CCol,CForm,CFormGroup,CInput,CLabel,CRow} 
        from '@coreui/react'

import CIcon from '@coreui/icons-react'

const BasicForms = () => {

  return (
    <>
      <CRow>
      <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Dados Básicos
              <small> (cliente)</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">


              <CFormGroup row md="10">

                  <CCol xs="4" md="3">
                  <CLabel htmlFor="cnpj">CNPJ</CLabel>
                  <CButton type="submit" size="sm"><CIcon name="cil-search" /> </CButton>
                  <CInput id="cnpj" name="text-input" placeholder="CNPJ" />

                  </CCol>
                </CFormGroup>

              <CFormGroup row>

                  <CCol xs="4" md="4">
                  <CLabel htmlFor="rsocial">Razão Social</CLabel>
                    <CInput id="rsocial" name="text-input" placeholder="Razão Social" />
                  </CCol>

                     <CCol xs="4" md="4">
                  <CLabel htmlFor="nmFantasia">Nome Fantasia</CLabel>
                  <CInput id="nmFantasia" name="text-input" placeholder="Nome Fantasia" />
                  </CCol>                  
                </CFormGroup>

                <CFormGroup row>


                <CCol xs="4" md="4">
                  <CLabel htmlFor="nmProp">Nome Proprietário</CLabel>
                    <CInput id="nmProp" name="text-input" placeholder="Nome Completo" />
                  </CCol>

                  <CCol xs="4" md="3">
                    <CLabel htmlFor="date-input">Data Nascimento</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CCol>
                </CFormGroup>

            <CCardHeader></CCardHeader>

                <CFormGroup row>
                    <CCol md="3">
                        <CLabel htmlFor="cep">Cep</CLabel>
                        <CButton type="submit" size="sm"><CIcon name="cil-search" /> </CButton>
                        <CInput id="cep" placeholder="Digite aqui seu cep" />
                    </CCol>
                </CFormGroup>


                <CFormGroup row>

                <CCol md="6">
                    <CLabel htmlFor="street">Logradouro</CLabel>
                    <CInput id="street" placeholder="Digite aqui seu logradouro" />
                </CCol>

                <CCol md="2">
                    <CLabel htmlFor="numero">Nº</CLabel>
                    <CInput id="numero" placeholder="" />
                </CCol>   

                <CCol md="3">
                    <CLabel htmlFor="complemento">Complemento</CLabel>
                    <CInput id="complemento" placeholder="" />
                </CCol>                   
                </CFormGroup>

  
              <CFormGroup row className="my-0">
                <CCol md="3">
                        <CLabel htmlFor="cidade">Cidade</CLabel>
                        <CInput id="cidade" placeholder="Digite aqui sua cidade" />
                    </CCol>

                    <CCol md="1">
                        <CLabel htmlFor="UF">UF</CLabel>
                        <CInput id="UF" placeholder="" />
                    </CCol> 


                    <CCol md="2">
                        <CLabel htmlFor="pais">País</CLabel>
                        <CInput id="pais" placeholder="" />
                    </CCol>                 
                </CFormGroup>
             

              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Salvar</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Cancelar</CButton>
            </CCardFooter>
          </CCard>
          
        </CCol>
      
     
      </CRow>


    </>
  )
}

export default BasicForms
