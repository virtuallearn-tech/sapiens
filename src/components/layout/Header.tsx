import { useNavigate, Link } from 'react-router-dom'
import logo from '@assets/icons/sapiens-logo-branco.png'
import { Button } from '@components/common/Button'

export const Header = () => {
  const navigate = useNavigate()

  return <div className="m-header">
    <Link to="/">
      <div className="m-header__logo">
        <img src={logo} alt="Sapiens Logo" />
        <h1>Sapiens</h1>
      </div>
    </Link>
    <div className="m-header__session">
      <Button typeBtn={'clear'} onClick={() => navigate('/signin')}>Entrar</Button>
    </div>
  </div>
}