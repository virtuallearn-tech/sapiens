interface IMenuOptions {
  items: { label: string, value: string | number }[],
  onClick: Function
}

export const MenuOptions = ({ items, onClick }: IMenuOptions) => {
  return (
    <ul className="c-menu-options">
      {items.map((item, index) => (
        <li className="c-menu-options__item" key={index + 1} onClick={() => { onClick() }}>{item.label}</li>
      ))}
    </ul>
  )
}