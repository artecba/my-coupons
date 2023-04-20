import { connect } from 'frontity'
import React, { useState, useEffect } from 'react'


//import logo from './logo.svg';
//i

function Login({ state, actions }) {


   

     const [urlToLogin, setUrlToLogin] = useState()
     const [APIDetailsLogin, setAPIDetailsLogin] = useState({ username: "", password: ""})



    // useEffect(() => {
    //     if (urlToLogin.length > 0) {
    //         fetch(urlToLogin, {
    //             method: 'GET'
    //         })
    //             .then((response) => {
    //                 console.log('datos del usuario',response);
    //                 if (response.status === '200') {
    //                   //  props.setIsLoggedIn(true)
    //                   //  props.setUsername(props.APIDetailsLogin.user)
    //                   //  window.location.replace('https://artecba.co')
    //                 }
    //                 else {
    //                     console.log('error')
    //                 }
    //             })
    //     }
    // }, [urlToLogin])




    const handleChange = (e) => {
        e.preventDefault();
        setAPIDetailsLogin({
            ...APIDetailsLogin,
            [e.target.name]: e.target.value,
        });

       console.log(APIDetailsLogin)
    };


    function  handleSubmit  (e)  {

        e.preventDefault();

       // setAPIDetailsLogin({ ...loginDetails }) //check i need the ...here

        

        let formData = new FormData()
        formData.append('username', APIDetailsLogin.username)
        formData.append('password', APIDetailsLogin.password)

      //  let formData = {username: APIDetailsLogin.username, password: APIDetailsLogin.password}


        console.log("user y pass estado", APIDetailsLogin)
        console.log("user y pass form data", formData)

        const url = ' https://demarket.app/?rest_route=/demarket-login/v1/auth'
        
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then((response) =>  response.json())
            .then((data) => {
                if (data['success'] === true) {
                  
                    localStorage.setItem('jwt', data['data']['jwt'])
                    console.log('token....', data['data']['jwt'])
                    actions.source.auth.setToken(data['data']['jwt'])
                    setUrlToLogin(`https://demarket.app/?rest_route=/demarket-login/v1/autologin&jwt=${data['data']['jwt']}`)
                   
                    //actions.source.auth.setToken(data['data']['jwt'])                   

                }
                else {
                    console.log('error en acceso',data)
                    //  props.setServerMessage(data['data']['message'])
                }
            })

            e.target.reset();
    }   

    useEffect(()=>{


        let userJWT = localStorage.getItem('jwt') || ''
        console.log('ya leo el token, ahora biusco el profile del user',userJWT)
          if (userJWT.length > 0) {
            let url = `https://demarket.app/?rest_route=/demarket-login/v1/auth/validate&JWT=${userJWT}`
            fetch(url)
              .then(response => response.json()) 
              .then(data => {
                if (data['success']===true){
                  console.log('user was persisted!')

                  //setEmail(`Email: ${data['data']['user']['user_email']}`)
                 // setRegDate(`Date of registration: ${data['data']['user']['user_registered']}`)
                  actions.source.dataUser.setUser(`${data['data']['user']['user_email']}`)
                //   setPageText(`${data['data']['user']['user_login']}'s User Profile`)
                //   props.setIsLoggedIn(true)
                //   props.setUsername(data['data']['user']['user_login'])
                //   props.setServerMessage('')
                }
                else {
                  console.log(data)
                  console.log('Persist failed')
                 // props.setServerMessage(data['data']['message'])
                }
    
              })
          }
        }, [urlToLogin])




    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h2>Login</h2>
                    {/* <p>{props.serverMessage}</p> */}

                    <form onSubmit={handleSubmit}  className="login">
                        <input type="text" placeholder="User Name" name="username"  onChange={handleChange} />
                        <input type="password" placeholder="Password" name="password"  onChange={handleChange} />
                        <input type="submit" value="Go" />
                    </form>
                    {/* <img src={logo} className="App-logo" alt="logo" ></img> */}
                </header>
            </div>
            {/* <LoginAPI APIDetailsLogin={APIDetailsLogin} setUsername={props.setUsername} setIsLoggedIn={props.setIsLoggedIn} setServerMessage={props.setServerMessage} /> */}
        </>
    )
}

export default connect(Login)