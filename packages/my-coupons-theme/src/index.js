import React from 'react'
import Root from './Root';


const index =() =>{
    return( 
      <div></div>
    )
}


export default {
  name: "my-coupons-theme",
  roots: {
    theme: Root
  },

  "state": {
    theme: {
      token: {},
      user:{}
    },
  },
  actions: {
    theme: {
    },  
  source: {
    auth: {
      setToken: ({ state }) => value => {
        state.theme.token = `Bearer ${value}`;
      },
    },
    dataUser: {
      setUser: ({ state }) => value => {
        state.theme.user = `${value}`;
      },
    },
  },
  }
};
