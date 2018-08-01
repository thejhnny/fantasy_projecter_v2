import React, { Component } from 'react';

const PlayerListItem = ({player, index}) => {
  return <div>{index} {player}</div>;
};

export default PlayerListItem;
