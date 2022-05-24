import { FruitsHomeStyle } from "./style";
import { useSelector } from "react-redux";

const FruitsPage = () => {
	//acessando o estado global e pegando o state fruits
  const fruits = useSelector((state) => state.fruits);

  return <FruitsHomeStyle>
      {fruits.map((fruit, index) => (
        <div key={index}>{fruit}</div>
      ))}
    </FruitsHomeStyle>
}

export default FruitsPage;
