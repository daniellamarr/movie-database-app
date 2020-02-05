import React from 'react'
import Header from '../components/Header';
import dummyimage from '../assets/images/primary-bg.jpg';
import WatchlistCard from '../components/WatchlistCards';

const UserProfile = () => {
    return (
        <div>
            <Header />
            <main id="landing">
                <div className={"container"} style={{ paddingTop: "11vmin" }}>
                    <div className="row w-100">
                        <div className={"col-md-4 "}>
                            <div className={"card border-0 position-sticky sticky-top w-75 mx-auto"} style={{top:"9vmin"}}>
                                <div className={"d-flex justify-content-center align-items-center p-2"} style={{ background: "#262626" }}>
                                    <div>
                                        <div className="user__profile__img__wrapper mb-3">
                                            <img src={dummyimage} alt="photo" width="100%" height="100%" />
                                        </div>
                                        <div className="text-center user__profile__name">
                                            {localStorage.getItem('userName')}
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center align-items-center p-2 py-4">
                                    <div class="d-flex flex-column w-75">
                                        <div class="p-2">User Stats</div>
                                        <div class="p-2 ml-4">Watch List</div>
                                        <div class="p-2 ml-4">Reviews</div>
                                        <div class="p-2">Member Since</div>
                                        <div class="p-2 ml-4">December 2019</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-8"}>
                            <div className={"row w-100"}>
                                <div className="col-md-12 profile__page__top__col p-2 mb-4">
                                    Watchlist
                                </div>
                            </div>
                            <div className={"row w-100"}>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                                <div className="col-md-4 movies p-2">
                                    <section id="latest-movies" className="p-0 m-0">
                                        <div className="movies w-100">
                                            <WatchlistCard/>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UserProfile