import React from 'react';
import ReactDOM from 'react-dom/client';
import './Home.css'

function home()
{
    return (
        <>
            <div class="bgImage">
                <div class="header"></div>
                <div class="sectionContainer">
                    <section class="leftSection">
                        <div class="navigation">
                            <div class="navComponent">
                                <div class="navImg">
                                    <img src="https://cdn-icons-png.flaticon.com/512/7717/7717267.png"></img>
                                </div>
                                <div class="navHead">
                                    CHATBOT
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg">
                                    <img src="https://cdn-icons-png.flaticon.com/512/950/950851.png"></img>
                                </div>
                                <div class="navHead">
                                    STORY TIME
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg">
                                    <img src="https://cdn-icons-png.flaticon.com/512/5985/5985765.png"></img>
                                </div>
                                <div class="navHead">
                                    CREATIVITY
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg">
                                    <img src="https://cdn-icons-png.flaticon.com/512/3663/3663335.png"></img>
                                </div>
                                <div class="navHead">
                                    MEDITATION
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg">
                                    <img src="https://cdn-icons-png.flaticon.com/512/8638/8638228.png"></img>
                                </div>
                                <div class="navHead">
                                    SUGGESTIONS
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="rightSection"></section>
                </div>
                
            </div>
        </>
    )
}

export default home;