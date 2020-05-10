import React, { useContext, useState } from 'react';

import {
  question,
  answer
} from '../actions';

import AppContext from '../contexts/AppContext';


const initialState = {
  count: 1,
  shindan: 0,
  show: false
}
const EventForm = () => {
  const { state, dispatch } = useContext(AppContext);
  const [count, setCount] = useState(initialState.count);
  const [insei, setInsei] = useState(initialState.shindan);
  const [chuyou, setChuyou] = useState(initialState.shindan);
  const [yousei, setYousei] = useState(initialState.shindan);
  const [shindanCount, setShindanCount] = useState(initialState.shindan);
  const [showFlag, setShowFlag] = useState(initialState.show);
  const [inseiFlg, setInseiFlg] = useState(initialState.show);
  const [chuyouFlg, setChuyouFlg] = useState(initialState.show);
  const [youseiFlg, setYouseiFlg] = useState(initialState.show);

  console.log('shindanCount', shindanCount);

  //console.log('prevCount', prevCount => prevCount);
  console.log('EventForm.sindan', insei, chuyou, yousei);
 
  const nextEvent = e => {
    e.preventDefault();
    setCount(prevCount => prevCount + 1);

    dispatch({
      count,
      insei,
      chuyou,
      yousei
    })
  }
  const returnEvent = e => {
    e.preventDefault();
    setCount(prevCount => prevCount - 1);
    if(insei !== 0){setInsei(prevCount => prevCount - 1)};
    if(chuyou !== 0){setChuyou(prevCount => prevCount - 1)};
    if(yousei !== 0){setYousei(prevCount => prevCount - 1)};
    setShowFlag(false);

    dispatch({
      count,
      insei,
      chuyou,
      yousei
    })
  }
  const inseiEvent = e => {
    e.preventDefault();
    setInsei(prevCount => prevCount + 1);
    setShindanCount(prevCount => prevCount + 1);

    if (state.count === 16) {
      setShowFlag(true);
    }

    if(chuyouFlg){
      setChuyou(prevCount => prevCount - 1);
      setChuyouFlg(false);
    };

    if(youseiFlg){
      setYousei(prevCount => prevCount - 1);
      setYouseiFlg(false);
    };

    setInseiFlg(true);
  }

  const chuyouEvent = e => {
    e.preventDefault();
    setChuyou(prevCount => prevCount + 1);
    setShindanCount(prevCount => prevCount + 1);

    if (count === 16) {
      setShowFlag(true);
    }

    if(inseiFlg){
      setInsei(prevCount => prevCount - 1);
      setInseiFlg(false);
    };

    if(youseiFlg){
      setYousei(prevCount => prevCount - 1);
      setYouseiFlg(false);
    };

    setChuyouFlg(true);
  }

  const youseiEvent = e => {
    e.preventDefault();
    setYousei(prevCount => prevCount + 1);
    setShindanCount(prevCount => prevCount + 1);
    console.log('youseiEvent.count', count);
    console.log('youseiEvent.shindanCount', shindanCount);

    if (count === 16) {
      setShowFlag(true);
    }

    if(inseiFlg){
      setInsei(prevCount => prevCount - 1);
      setInseiFlg(false);
    };
    if(chuyouFlg){setChuyou(
      prevCount => prevCount - 1);
      setChuyouFlg(false);
    };
  
    setYouseiFlg(true);
  }

  return (
  <>
    <h4>体質診断</h4>
    <div className="container">
      <div className="jumbotron">
          <div className="col text-center">
            <h1>{ question[`${count}`] }</h1>
          </div>
          <div className="row col text-center">
              <div className="col-xs-12 col-lg-4">
                <button className="btn btn-outline-primary btn-block" onClick={ inseiEvent } >{ answer[`${count}1`] }</button>
              </div>
              <div className="col-xs-12 col-lg-4">
                <button className="btn btn-outline-primary btn-block" onClick={ chuyouEvent } disabled={count === 14 || count === 15} >{ answer[`${count}2`] }</button>
              </div>
              <div className="col-xs-12 col-lg-4">
                <button className="btn btn-outline-primary btn-block" onClick={ youseiEvent } >{ answer[`${count}3`] }</button>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col text-left">
            <button className="btn btn-primary text-left" onClick={ returnEvent } disabled={count === 1}>戻る</button>
          </div>
          <div className="col text-right">
            <button className="btn btn-primary" onClick={ nextEvent } disabled={count === 16}>次へ</button>
          </div>
        </div>
    </div>
    { showFlag ? <Shindan /> : null }
    </>
  )
}

const Shindan = () => {
    return (
      <>
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-danger" >診断結果を見る</button>
        </div>
      </div>
      </>
    );
};
export default EventForm;
