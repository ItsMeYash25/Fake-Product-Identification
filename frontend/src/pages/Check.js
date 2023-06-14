import { useEffect, useState } from "react";
import { useQuery } from "../useQuery";

const Check = () => {
    const query = useQuery();
    const [message,setMessage]  = useState()
    const [product_name,setName]  = useState()
    const [product_price,setPrice]  = useState()
    useEffect(()=>{
        const msg = query.get("msg");
        setMessage(msg)
        const name = query.get("productName");
        setName(name)
        const price = query.get("productprice");
        setPrice(price)
    },[])
    return ( 
        <>
            <div className="container my-5">
                <div className="card rounded-0 shadow">
                    {
                        (message === "true") && (
                            <>
                                <h2 className="card-title text-center my-3">Product is Real</h2>
                                <div className="card-body">
                                    <p className="card-text">
                                        Product Name: {product_name}
                                    </p>
                                    <p className="card-text">
                                        Product Price: {product_price}
                                    </p>
                                </div>
                            </>
                        )
                    }
                    {
                        (message === "false") && (
                            <>
                                <h2 className="card-title text-center my-3">Product {product_name} is Fake</h2>
        
                            </>
                        )
                    }
                </div>
            </div>
        </>
     );
}
 
export default Check;