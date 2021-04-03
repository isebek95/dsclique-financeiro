import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import {CAlert, CButton,CCard,CCardBody,CCardGroup,CCol,CContainer,CForm,CInput,CInputGroup,CInputGroupPrepend,CInputGroupText,CRow} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import Logo from '../imagens/logo.png';




const Login = () => {
  const [email,setEmail]=useState('');
  const [senha,setSenha]=useState('');
  const [error,setError]=useState('');

  const history = useHistory();
  const handleLoginButton =()=>{
  if(email && senha)
  {
    if(email==="isebek@hotmail.com" && senha==="123456")  
    {
      history.push('/teste');
    }
    else
    {
      setError("Dados de acesso inválidos");

    }

  }
  else{
    setError("Obrigatório informar usuário e senha!!");
  }
 // 
  }


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Informe seus dados </p>

                    {error !== '' &&
                      <CAlert color="danger">{error}</CAlert>
                    
                    }

                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="E-mail" Value={email} onChange={e=>setEmail(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Senha" Value={senha} onChange={e=>setSenha(e.target.value)} />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick={handleLoginButton}>Entrar</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm> 
                </CCardBody> 
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none"  style={{ width: '44%'} }>
                <CCardBody className="text-center">
                  <div >
                     <img src={Logo} alt="" width="100%"></img>
                   </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
