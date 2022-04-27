import React, {useState} from 'react'
import ReactMapGL from "react-map-gl"

const OrderCheck = () => {

    const [viewport, setViewport] = useState({
        latitude:10.802271,
        longitude:106.7193849,
        zoom: 10,
        width:"100vw",
        height:"100vh", 
    })

  return (
    <>
        <ReactMapGL {...viewport}>

        </ReactMapGL>
    </>
  )
}

export default OrderCheck