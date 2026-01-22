export interface IActionMenuOption{
  id: string
  label: string
  onSelect: () => void
  disabled?: boolean
}

export type ActionMenuType = 
  | 'top-right'
  | 'bottom-center'
  | 'bottom-left'

type MobileActionMenuProps = {
  options: IActionMenuOption[]
  type: ActionMenuType
}

export const MobileActionMenu = ({
  options,
  type
}: MobileActionMenuProps) => {
  return (
    <div className={`m-action-menu m-action-menu--${type}`}>
      <div className="m-action-menu__list">
        {options.map(option => (
          <button
            key={option.id}
            className="m-action-menu__item"
            onClick={option.onSelect}
            disabled={option.disabled}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}



