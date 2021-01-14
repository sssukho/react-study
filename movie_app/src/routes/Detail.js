import React from "react";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        // state가 undefined면 유저를 데려와서 홈으로 redirecting 시켜버릴 것임.
        if(location.state === undefined) {
            history.push("/"); 
        }
    }
    render() {
        const { location } = this.props;
        return <span>{location.state.title}</span>;

    }
}

export default Detail;