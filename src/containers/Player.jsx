import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import { NotFound } from './NotFound';

const Player = (props) => {
  const { id } = props.match.params;

  const hasPlaying = Object.keys(props.playing).length > 0; //para saber cuantas keys tiene un objeto

  useEffect(() => {
    props.getVideoSource(id); //para que vaya al reducer y filtre ese id y sea el que nos mande por paramtero
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video>
        <source src={props.playing.source} type='video/mp4' />
      </video>
      <div onClick={() => props.history.goBack()} className='Player-back'>
        <button type='button'>Regresar</button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};
const matchDispatchToProps = {
  getVideoSource,
};
// export default Player;
export default connect(mapStateToProps, matchDispatchToProps)(Player);
