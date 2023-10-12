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
                                    <img src="https://media.istockphoto.com/id/1250000899/vector/chat-bot-robot-avatar-in-circle-round-shape-isolated-on-white-background-stock-vector.jpg?s=170667a&w=0&k=20&c=mBC-3kaZ9ZeGVA8Oo-O3S17sh-gzAow4dL-4cACP57M="></img>
                                </div>
                                <div class="navHead">
                                    CHATBOT
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg"></div>
                                <div class="navHead">
                                    STORY TIME
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg"></div>
                                <div class="navHead">
                                    CREATIVITY
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg"></div>
                                <div class="navHead">
                                    MEDITATION
                                </div>
                            </div>
                            <div class="navComponent">
                                <div class="navImg"></div>
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