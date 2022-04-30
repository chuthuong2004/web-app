import "./list.scss"
import Datatable from "../../components/User/Datatable"
import Sidebar from "../../components/SiderBar/Sidebar"

const List = () => {
    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Datatable />
            </div>
        </div>
    )
}

export default List