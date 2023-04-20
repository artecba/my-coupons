import React, {useEffect} from 'react'
import { connect } from 'frontity'
import Header from './components/Header';
import Post from './components/Post';
import CategoryCoupons from './components/CategoryCoupons';
import Login from './components/Login';



const Root = ({state}) => {

    // useEffect(() => {

    //     const data = state.source.get(state.router.link)

    //    console.log("estado",data)

    // }, [state])
    

    const data = state.source.get(state.router.link)



    return (
      <>
        <Header></Header>       
        <hr/>

        {data.isFetching && <p>Cargando ... </p>}
        {data.isHome && <Post></Post>}
        {data.isCategory && <CategoryCoupons></CategoryCoupons>}
        {data.isPage && <Login></Login>}

      </>
    );
  };

export default connect(Root)