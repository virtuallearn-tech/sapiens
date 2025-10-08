import { IoIosCloseCircleOutline } from "react-icons/io";


export const Explanation = ({ explanation }: { explanation: string }) => {
  return (
    <div className="c-explanation">
      <IoIosCloseCircleOutline className="c-explanation__close"/>
      {explanation.split('.').map((p, index)=> (
        <p key={index+1}  className="c-explanation__paragraph">{p}</p>
      ))}
      
    </div>
  )
}