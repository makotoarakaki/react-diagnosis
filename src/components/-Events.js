import React, { useContext } from 'react';
//import Event from './Event';
import AppContext from '../contexts/AppContext';

const Shindan = () => {
//  const { state } = useContext(AppContext);
  return (
    <>
    <div className="row">
      <div className="col text-center">
        <button className="btn btn-danger" >診断結果を見る</button>
      </div>
    </div>
    </>
  )
}
export default Shindan;
