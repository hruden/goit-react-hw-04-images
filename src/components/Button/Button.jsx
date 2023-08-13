import { useContext } from "react";
import { Context } from "stateContext/GlobalContext";

export const Button =()=>{
    const{setPage}=useContext(Context)
    const handleLoadMore = () => {
        setPage(s => s + 1);
      };
    return(
        <button className="Button" onClick={handleLoadMore} type="button">Load more</button>
    )
}