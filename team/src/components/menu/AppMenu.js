import React, { Component } from "react";
import { Tabs, Tab } from 'react-md';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class AppMenu extends Component {
    static propTypes = {
        location: PropTypes.object.isRequired,
        match: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        navigation: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
    }
    handleTabChange = (activeTabIndex) => {
        const { history } = this.props;
        let navigateTo = this.props.navigation[activeTabIndex].to;
        history.push({ pathname: navigateTo });
    }

    getTab(pathname) {
        const indexOf = this.props.navigation.findIndex((item) =>item.to === pathname || (item.to.length > 1 && (pathname.includes(item.to))));
        return indexOf > -1 ? indexOf : undefined;
    }

    render() {
        const { location: { pathname }} = this.props;
        const activeTabIndex = this.getTab(pathname) || 0;
        const tabs = this.props.navigation.map((item) => {
            return (
                <Tab label={item.label} key={item.id} />
            );
        });
        return (
            <Tabs
                tabId="navigation"
                activeTabIndex={activeTabIndex}
                onTabChange={this.handleTabChange}
                centered = {true}
                colored = {true}
            >
                {tabs}
            </Tabs>
        );
    }
}

export default withRouter(AppMenu);