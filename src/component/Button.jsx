
import { useTodos } from "../context/todoContext";


const Button = ({text,className, ...props}) => {

  const {theme} = useTodos();

   
  
 
  

    
  return (
  <button {...props} className={`btn btn-${theme} ${className ? className : " "}`}> {text} </button>
  );
}

export default Button
