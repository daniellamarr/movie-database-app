// Helper Methods
export const trimUser = (user) => {
    return {
        id: user.dataValues.id,
        username: user.dataValues.username,
        email: user.dataValues.email,
        watchlist: user.dataValues.watchlist,
        ratedMovies: user.dataValues.ratedMovies
    };
}
