import React from "react";
import PropTypes from 'prop-types';
import { CircularProgress } from "react-md";

export class WithFetching extends React.Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        children: PropTypes.element.isRequired,
        errorContainer: PropTypes.func,
        loader: PropTypes.func
    }

    static defaultProps = {
        errorContainer: (props) => (<div className="md-text md-text--error md-text-center app--margin--top">{props.error.message}</div>),
        loader: () => (<CircularProgress id="app-loading"></CircularProgress>)
    }
    
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true,
            error: null
        };
    }
    

    loadData() {
        this.setState({ isLoading: true, error: null, data: null });
        fetch(this.props.url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ data: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.url !== prevProps.url) {
            this.loadData();
        }
    }
    componentDidMount() {
        this.loadData();
    }

    render() {
        const { data, isLoading, error } = this.state;
        const { loader: Loader, errorContainer: ErrorContainer } = this.props;
        if (isLoading) {
            return Loader();
        }
        if (error) {
            return ErrorContainer({ error });
        }

        return React.cloneElement(React.Children.only(this.props.children), { resultdata: data });
    }
};
