import { Link } from "react-router-dom";

const Newscard = ({news}) => {
    const{title,thumbnail_url,rating,total_view,details,_id,image_url}=news;
    return (
        <div className="card  bg-base-100 shadow-xl mb-16">
        <figure><img src={image_url}/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {details.length>100?<p>{details.slice(0.100)} <br /><Link to={`/news/${_id}`} className="text-red-400 font-bold">Read More....</Link></p>:<p>{details}</p>
          
          
          }
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
    );
};

export default Newscard;