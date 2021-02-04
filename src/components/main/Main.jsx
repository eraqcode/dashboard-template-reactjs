import React from 'react'
import { FaCalendar, FaCode, FaThumbsUp, FaUser, FaVideo } from 'react-icons/fa'
import { Chart } from '../chsrt/Chart'

export const Main = () => {
    return (
        <main>
            <div className="main__container">
                {/* <!-- Begin main header section --> */}
                <section className="main__header">
                    <div className="main__header-img">
                        <img src="./assets/img/img1.svg" alt=""/>
                    </div>
                    <div className="main__header-content">
                        <header>
                            <h1> Hello Eraqcoders </h1>
                            <h3> Welcome to your admin dashboard </h3>
                        </header>
                    </div>
                </section>
                {/* <!-- End main header section --> */}

                {/* <!-- Begin cards section --> */}
                <section className="main__cards">
                    <div className="card">
                        <FaUser 
                            className="card__icon"
                        />
                        <div className="card__content">
                            <p className="card__content-text">
                                Number of Subscribers
                            </p>
                            <span className="card__content-number"> 1450 </span>
                        </div>
                    </div>
                    <div className="card">
                        <FaCalendar 
                            className="card__icon"
                        />
                        <div className="card__content">
                            <p className="card__content-text">
                                Times of Watching
                            </p>
                            <span className="card__content-number">5487</span>
                        </div>
                    </div>
                    <div className="card">
                        <FaVideo 
                            className="card__icon"
                        />
                        <div className="card__content">
                            <p className="card__content-text">
                                Number of Videos
                            </p>
                            <span className="card__content-number">345</span>
                        </div>
                    </div>
                    <div className="card">
                        <FaThumbsUp 
                            className="card__icon"
                        />
                        <div className="card__content">
                            <p className="card__content-text">
                                Number of Likes
                            </p>
                            <span className="card__content-number">12478</span>
                        </div>
                    </div>
                </section>
                {/* <!-- End cards section --> */}

                {/* <!-- Begin stats charts section --> */}
                <section className="charts__stats">
                    <div className="charts__stats-left">
                        <header>
                            <h2>Daily Reports</h2>
                            <h3>Quito, Pichincha, Ecuador</h3>
                        </header>
                        <div className="charts__stats-content">
                            <Chart />
                        </div>
                    </div>
                    <div className="charts__stats-right">
                        <header>
                            <h2>Stats Reports</h2>
                            <h3>Quito, Pichincha, Ecuador</h3>
                        </header>
                        <div className="charts__stats-content">
                            <div className="chart__stats-card">
                                <h2>Income</h2>
                                <p>$75.300</p>
                            </div>
                            <div className="chart__stats-card">
                                <h2>Sales</h2>
                                <p>$124,200</p>
                            </div>
                            <div className="chart__stats-card">
                                <h2>Users</h2>
                                <p>35000</p>
                            </div>
                            <div className="chart__stats-card">
                                <h2>Orders</h2>
                                <p>1567</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End stats cards section --> */}
            </div>
        </main>
    )
}
