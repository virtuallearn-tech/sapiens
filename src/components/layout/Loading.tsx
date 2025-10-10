import logo from "@assets/icons/sapiens-logo.png"

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__content">
        <img src={logo} alt="Sapiens Logo" className="loading__logo" />
        <h1 className="loading__title">Sapiens</h1>
        <p className="loading__subtitle">Explorando o universo da ciência em 3D</p>
      </div>
    </div>
  )
}
