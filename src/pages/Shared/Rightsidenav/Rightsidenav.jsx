import { FcGoogle } from "react-icons/fc";
import { FiGithub } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { TfiTwitterAlt } from "react-icons/tfi";
import { BsInstagram } from "react-icons/bs";
import qzoneimg1 from '../../../assets/qZone1.png'
import qzoneimg2 from '../../../assets/qZone2.png'
import qzoneimg3 from '../../../assets/qZone3.png'




const Rightsidenav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl text-center font-bold">Login with </h2>
<button className="btn btn-outline w-full">
<FcGoogle className="text-2xl"></FcGoogle>
 Google

</button>


<button className="btn btn-outline w-full">
<FiGithub className="text-2xl"></FiGithub>
 GitHub

</button>
   
      </div>


      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl text-center font-bold">Find Us On </h2>
<a className="p-4 border rounded-t-lg items-center gap-4 flex" href="">
    <ImFacebook2 className="text-lg"></ImFacebook2>
 <span>Facebook</span>

</a>
<a className="p-4 border rounded-t-lg items-center gap-4 flex" href="">
    <TfiTwitterAlt className="text-lg"></TfiTwitterAlt>
 <span>Twitter</span>

</a>
<a className="p-4 border rounded-t-lg items-center gap-4 flex" href="">
    <BsInstagram className="text-lg"></BsInstagram>
 <span>Instagram</span>

</a>
   
      </div>


      <div className="p-4 space-y-3 bg-[#F3F3F3] mb-6">
        <h2 className="text-3xl text-center font-bold">Q-Zone </h2>

   
<img src={qzoneimg1} alt="" />
<img src={qzoneimg2} alt="" />
<img src={qzoneimg3}alt="" />



      </div>


      <div className="p-4 space-y-3 bg-[#05001DCC] mb-6 flex flex-col items-center justify-center text-center">
  <h2 className="text-3xl text-white font-bold">Create an <br /> Amazing <br /> Newspaper</h2>
  <p className="text-white">Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br />click to import demo <br /> and much more.</p>

  <button className="btn btn-secondary px-4 py-2">Learn More</button>
</div>


    </div>
  );
};

export default Rightsidenav;
