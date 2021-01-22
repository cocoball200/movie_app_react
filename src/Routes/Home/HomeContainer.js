import React from "react";
import HomePresenter from "./HomePresenter";

export default class extends React.Component {
    state = {
        upcomming: null,
        topRated: null,
        nowPlaying: null,
        error: null,
        loading: true
    };
    render() { //렌더를 통해서 컴포넌트들을 재귀적으로 렌더링하면서, 렌더링이 끝나면, 지니고 있는 정보를 사용하여 HTML 마크업 만들고, 실제 페이지의 Dom 요소에 주입
        const { upcomming, topRated, nowPlaying, error, loading } = this.state;
        return (
            <HomePresenter
                upcomming={upcomming}
                topRated={topRated}
                nowPlaying={nowPlaying}
                error={error}
                loading={loading}
            />
        );
    }
}
