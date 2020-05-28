import React from 'react';
import './Popup.css';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import './ReactToastify.css';
import Preferences from '../../components/Preferences';

import IpForm from '../../components/IpForm';
import TopBar from '../../components/TopBar';
import Http from '../../components/Tabs/Http';
import Json from '../../components/Tabs/Json';

const appSelector = (state) => state.app;

toast.configure();

const Popup = () => {
  const { yz, navi } = useSelector(appSelector);

  return (
    <div className="App">
      <TopBar />
      <div id="extension" className="scroll4">
        {yz ? <Preferences /> : <div></div>}
        <div className="container scroll4">
          <IpForm />
          {navi === 'http' && <Http />}
          {navi === 'json' && <Json />}
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Popup;
