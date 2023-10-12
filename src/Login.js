import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/form.css'

function login()
{
  return (
    <>
      <div class="mainBackground">
        <div class="container">
          <section class="firstSection">
            <div class="formQuote">You look the most beautiful when you wear your smile!</div>
          </section>
          <section class="secondSection">
            <form>
              <div class="dataContainer">
                <div class="formGroup">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email"/>
                </div>
                <div class="formGroup">
                  <label for="password">Password</label>
                  <input type="password" id="password" name="password"/>
                </div>
              </div>
              <div class="buttonContainer">
                <button>Login</button>
                <div class="accountSwitch">
                  <p>New User? <a href="#">Register</a></p>
                </div>
              </div>
            </form>
          </section>
        </div>

      </div>
    </>
  );
}

export default login;
