import React from "react";
import ReviewPresenter from "./ReviewPresenter";

export default class extends React.Component {
    state = {
        result: null,
        error: null,
        loading: true
    };
    render() {
        const { result, error, loading } = this.state
        return (<ReviewPresenter
            result={result}
            error={error}
            loading={loading}
        />
        );
    }
}