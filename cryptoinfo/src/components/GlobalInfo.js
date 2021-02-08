import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Alert } from "reactstrap";
import { getGlobalInfo } from "../actions";

const GlobalInfo = (props) => {
  useEffect(() => {
    props.getGlobalInfo();
  }, []);

  const activeMarkets = props.globalInfo.active_markets;
  const coinCount = props.globalInfo.coins_count;
  const marketCap = Math.round(props.globalInfo.total_mcap);
  const volume = Math.round(props.globalInfo.total_volume);


  function numberWithCommas(anyNumber) {
    return anyNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

  return (
    <div>
      {props.isFetching && <Alert color="primary"> Fetching Global Data</Alert>}
      <div className="globalInfo">
        <h1>Global Crypto Market Info</h1>
        <div className="infoDetails">
          <h3>Active Market Count: {numberWithCommas(activeMarkets)}</h3>
          <h3>Total Coins: {numberWithCommas(coinCount)}</h3>
          <h3>Total Market Cap: $ {numberWithCommas(marketCap)}</h3>
          <h3>Total Volume: $ {numberWithCommas(volume)}</h3>
        </div>
      </div>
      {props.error && (
        <div className="globalAlert">
          <Alert color="danger">
            Something went wrong: {props.error}
            {<p>Try refreshing the page</p>}
          </Alert>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    globalInfo: state.globalInfo[0],
    error: state.error,
    isFetching: state.isFetching,
  };
};

export default connect(mapStateToProps, { getGlobalInfo })(GlobalInfo);
