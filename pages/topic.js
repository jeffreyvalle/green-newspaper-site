
import styled from 'styled-components';

class Topic extends React.Component {
    static async getInitialProps({ query }) {
        console.log('SLUG', query.slug);
        return {};
    }
    render() {
        return <h1>This is a topic page!</h1>;
    }
}

export default Topic;