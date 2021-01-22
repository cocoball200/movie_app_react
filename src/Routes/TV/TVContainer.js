import React from "react";
import TVPresenter from "./TVPresenter";

export default class extends React.Component {
    state = {
        tvAiringToday={ tvAiringToday },
        topRated={ topRated },
        tvOnTheAir={ tvOnTheAir },
        loading: true,
        error: null
    };
    render() {
        const { tvAiringToday, topRated, tvOnTheAir, loading, error } = this.state
        return (
            <TVPresenter
                tvAiringToday={tvAiringToday}
                topRated={topRated}
                tvOnTheAir={tvOnTheAir}
                loading={loading}
                error={error}
            />
        )
    }
}