interface IMessage {
  message: string,
  type?: 'danger' | 'info' | 'warning' 
}

export const Message = ({ message, type = 'info' }: IMessage) => {
  return (
    <div className={`c-message c-message--${type}`}>
      <span>{message}</span>
    </div>
  )
}