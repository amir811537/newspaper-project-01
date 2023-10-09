
import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
       <img className='mx-auto p-10' src={logo} alt="logo" />  
       <p className='font-bold'>Journalism Without Fear or Favour</p>
       <p className='text-xl font-bolds  '>{moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
        </div>
    );
};

export default Header;