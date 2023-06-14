import { useNavigate } from "react-router-dom";
import { useQuery } from "../useQuery";
import { useEffect } from "react";

const Real =  () => {
  const query = useQuery();
  const id = query.get("id");
  const navigate = useNavigate();
  const addr = query.get("owner");
  useEffect(()=>{
    async function real(){
        
        const res = await fetch("/api/product/mark_real", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, addr }),
        });
        const json = await res.json()
        if(json.state === true){
          navigate("/show_products")
        }
    }
    real()
  })
};

export default Real;
