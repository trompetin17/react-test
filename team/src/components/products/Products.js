import React, { Component } from 'react';
import { Grid, Cell } from "react-md";
import { LayoutCategories } from "./LayoutCategories";
import { WithFetching } from '../utils/FetchData';
import ProductListContainer from './ProductListContainer';
import ReactRouterPropTypes from 'react-router-prop-types';

// TODO: FIX this
const API = 'https://localhost:5001/api/products';

const Categories = [
    {
        id: 'c_all',
        title: 'All',
        icon: 'view_list',
        addDivider: true
    },
    {
        id: 'c_tech',
        title: 'Tech',
        icon: 'computer',
        addDivider: false
    },
    {
        id: 'c_services',
        title: 'Services',
        icon: 'build',
        addDivider: false
    },
    {
        id: 'c_office',
        title: 'Office',
        icon: 'folder',
        addDivider: false
    }
];


class Products extends Component {
    static propTypes = {
        history: ReactRouterPropTypes.history.isRequired,
        match: ReactRouterPropTypes.match.isRequired,
        location: ReactRouterPropTypes.location.isRequired
    }

    constructor(props) {
        super(props);
        const { match } = this.props;
        const current = (!match.params.category ? { id: "c_all" } : Categories.find((item) => item.title.toLowerCase() === match.params.category)) || { id: "c_all" };
        this.state = {
            currentCategory: current.id,
            urlQuery: API + (current.id !== 'c_all' ? `?category=${current.title}` : "")
        }
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }

    onCategoryChange(newCategory) {
        const { history } = this.props;
        history.push('/products' + (newCategory.id !== 'c_all' ? `/${newCategory.title.toLowerCase()}` : ""));
        this.setState({
            currentCategory: newCategory.id,
            urlQuery: API + (newCategory.id !== 'c_all' ? `?category=${newCategory.title}` : "")
        });
    }

    render() {
        const { urlQuery } = this.state;
        return (
            <Grid noSpacing={true}>
                <Cell size={3}>
                    <LayoutCategories categories={Categories} onChange={this.onCategoryChange} current={this.state.currentCategory} />
                </Cell>
                <Cell size={9}>
                    <WithFetching url={urlQuery}>
                        <ProductListContainer></ProductListContainer>
                    </WithFetching>
                </Cell>
            </Grid>
        );
    }
}

export default Products;