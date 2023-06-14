import { useEffect, useState } from "react";
import QrReader from "react-qr-scanner";
const ScanProduct = () => {
  
  const [data,setData] = useState();

  const handleScan = (result) => {
    setData(result)
  }

  const handleError = () => {
    console.log("Error")
  }

  const previewStyle = {
    height: 300,
    width: 300,
  }


  return (
    <>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <QrReader
            delay = {100}
            style = {previewStyle}
            onError={handleError}
            onScan={handleScan}
            />
            <p>{data}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScanProduct;
