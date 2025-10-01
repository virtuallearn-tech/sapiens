import logo from '@assets/icons/sapiens-logo-branco.png'
import { Button } from '@components/common/Button'

export const Header = () =>{
  return <div className="m-header">
    <div className="m-header__logo">
      <img src={logo} alt="Sapiens Logo" />
      <h1>Sapiens</h1>
    </div>
    <div className="m-header__session">
      {/* <span>Entrar</span> */}
      <Button typeBtn={'clear'}>Entrar</Button>
    </div>
  </div>
}