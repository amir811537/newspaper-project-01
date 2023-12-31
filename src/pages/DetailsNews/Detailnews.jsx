import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import Navbar from "../Shared/Navbar/Navbar";



const Detailnews = () => {

const {id}=useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
          <div className="grid md:grid-cols-4">
<div className="col-span-3">
<h2 className="text-5xl"> News Details</h2>
<p>{id}</p>
</div>
<div>
    <Rightsidenav></Rightsidenav>
</div>
          </div>
            

        </div>
    );
};

export default Detailnews;