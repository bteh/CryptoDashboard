import React from 'react';
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import CoinImage from '../Shared/CoinImage';

const SpotlightName = styled.h2`
  text-align: center; 
`
export default function() {
  return (
    <AppContext.Consumer>
      {({ currentFavorite, coinList }) => (
       (coinList && currentFavorite) ?
       <Tile>
          <SpotlightName> {coinList[currentFavorite].CoinName} </SpotlightName>
          <CoinImage spotlight coin={coinList[currentFavorite]} />
        </Tile>
       : <div>Loading... </div>
      )
      }
    </AppContext.Consumer>
  );
}