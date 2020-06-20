import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => (
  <>
    <Search isHome />
    {myList.length > 0 && (
      <Categories title='Mi Lista'>
        <Carousel>
          {myList.map(item => (
            <CarouselItem key={item.id} {...item} isList />
          ))}
        </Carousel>
      </Categories>
    )}
    <Categories title='Tendencias'>
      <Carousel>
        {trends.map(item => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
    <Categories title='Originales de Platzi Video'>
      <Carousel>
        {originals.map(item => (
          <CarouselItem key={item.id} {...item} />
        ))}
      </Carousel>
    </Categories>
  </>
);

//Esta es una funcion que le indica al provider que informacion necesitamos del store
//Son las props que recibe Home las toma de initialState
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
// export default Home;
export default connect(mapStateToProps, null)(Home); //aqui se conecta al provider
// conect(props, actions)
