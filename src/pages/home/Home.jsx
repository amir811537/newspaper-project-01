import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Rightsidenav from "../Shared/Rightsidenav/Rightsidenav";
import LeftsideNav from "../Shared/leftsidenav/LeftsideNav";
import Brakingnews from "./Brakingnews";
import Newscard from "./Newscard";

const Home = () => {

  const news =useLoaderData();
  console.log(news)
  return (
    <div>
      <Header></Header>
<Brakingnews></Brakingnews>
      <Navbar></Navbar>

      <h1 className="font-poppins font-bold text-3xl">this is home path</h1>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">

<div className=""><LeftsideNav></LeftsideNav></div>



<div className="md:col-span-2">
  

{
  news.map(sigleNews=><Newscard news={sigleNews} key={sigleNews._id}></Newscard>)
}


</div>





<div className=""><Rightsidenav></Rightsidenav></div>



</div>



    </div>
  );
};

export default Home;
