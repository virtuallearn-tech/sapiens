interface IMenuOptions {
  items: string[],
  onClick: Function
}

export const MenuOptions = ({ items, onClick }: IMenuOptions) => {
  return (
    <ul className="c-menu-options">
      {items.map((item, index) => (
        <li 
            key={index + 1}
            className="c-menu-options__item"  
            onClick={() => { onClick(item) }}>{item}
        </li>
      ))}
    </ul>
  )
}