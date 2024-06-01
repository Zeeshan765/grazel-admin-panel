import { Link } from 'react-router-dom';
import UserOne from '../images/user/user-01.png';
import UserTwo from '../images/user/user-02.png';
import UserThree from '../images/user/user-03.png';
import UserFour from '../images/user/user-04.png';
import UserFive from '../images/user/user-05.png';

const ChatCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <h4 className="mb-6 px-7.5 text-title-md font-semibold text-black-2">
        Best Sellers
      </h4>

      <div>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black-2 text-title-sm">
               John Mark
              </h5>
            </div>
            <span className="text-title-xsm font-medium text-[#06E775]">
              100 sales
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black-2 text-title-sm">
               John Mark
              </h5>
            </div>
            <span className="text-title-xsm font-medium text-[#06E775]">
              100 sales
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black-2 text-title-sm">
               John Mark
              </h5>
            </div>
            <span className="text-title-xsm font-medium text-[#06E775]">
              100 sales
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black-2 text-title-sm">
               John Mark
              </h5>
            </div>
            <span className="text-title-xsm font-medium text-[#06E775]">
              100 sales
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black-2 text-title-sm">
               John Mark
              </h5>
            </div>
            <span className="text-title-xsm font-medium text-[#06E775]">
              100 sales
            </span>
          </div>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-5 py-3 px-7.5 hover:bg-gray-3 dark:hover:bg-meta-4"
        >
          <div className="flex flex-1 items-center justify-between">
            <div>
              <h5 className="font-medium text-black-2 text-title-sm">
               John Mark
              </h5>
            </div>
            <span className="text-title-xsm font-medium text-[#06E775]">
              100 sales
            </span>
          </div>
        </Link>
       
      </div>
    </div>
  );
};

export default ChatCard;
