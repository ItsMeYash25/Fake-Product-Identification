import { useEffect, useState } from "react";
import { useQuery } from "../useQuery";

const ViewProduct = () => {
  const query = useQuery();
  const id = query.get("id");
  const [data, setData] = useState([{}]);
  const [qr, setQr] = useState("");

  useEffect(() => {
    fetch("/api/product/show_product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  function generateQR() {
    const product = {
        id: data.res[0],
        name: data.res[1],
        price: data.res[2],
        verify: data.res[4],
    }
        const link = `http://localhost:3000/check?msg=${product.verify}&productName=${product.name}&productprice=${product.price}`
        setQr(`https://api.qrserver.com/v1/create-qr-code/?data=${link}&amp;size=500x500`);
    // setQr(`https://api.qrserver.com/v1/create-qr-code/?data=${JSON.stringify(product)}&amp;size=500x500`);
    
  }

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {typeof data.res === "undefined" ? (
            <h3>Data is Loading Please Wait</h3>
          ) : (
            <>
              <div className="col" key={data.res[0]}>
                <div className="card bg-dark text-light">
                  <div className="card-body d-block">
                    <h5 className="card-title">
                      {data.res[0]}. {data.res[1]}
                    </h5>
                    <button className="btn btn-light my-3" onClick={generateQR}>Generate QR Code</button>
                    <br />
                    {qr && (
                        <>
                        <a href={qr} download>
                            <img src={qr} alt="" title="" download />
                        </a>        
                        </>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
