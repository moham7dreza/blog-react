import {Component} from "react";

class TestClass extends Component {

    static defaultProps = {
        count: 113333,
    }

    constructor(props) {
        super(props);

        this.state = {
            counter: 88,
            name: 'test',
        }

        // this.changeState = this.changeState.bind(this)
    }

    changeState() {
        this.setState({counter: 110000})
    }

    render() {
        const {count} = this.props;
        const {counter} = this.state;
        return (
            <>
                <h1>test class component</h1>
                <p>class direct prop : {this.props.count}</p>
                <p>class prop destructure : {count}</p>
                <p>counter state : {counter}</p>
                <button onClick={this.changeState}>change counter state</button>
            </>
        )
    }
}

export default TestClass;