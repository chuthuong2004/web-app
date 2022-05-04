import "./order.scss"
import Sidebar from "../../components/SiderBar/Sidebar"
import Dataorder from "../../components/Order/Dataoder"

const order = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Dataorder />
      </div>
    </div>
  )
}

export default order