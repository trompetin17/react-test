import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText, Media } from "react-md";

class ProductListContainer extends Component {
    static propTypes = {
        resultdata: PropTypes.shape({
            total: PropTypes.number.isRequired,
            hidden: PropTypes.number.isRequired,
            data: PropTypes.array
        })
    }

    render() {
        const { resultdata: { total, hidden, data } } = this.props;
        console.log(this.props);
        const cardItems = data.map((item) => {
            return (
                <Card key={item.id} className="app-product-list-container-card">
                    <CardTitle
                        title={item.name}
                        subtitle={`${item.categories.join(", ")} - ${item.brand}`}
                    />
                    <CardText>
                        <div className="md-grid app-product-list-container-card-content">
                            <div className="md-cell md-cell--3">
                                <Media aspectRatio="3-1" forceAspect={true}>
                                    <img src={item.photo} alt={item.name} />
                                </Media>
                            </div>

                            <div className="md-cell md-cell--9">
                                <p>{item.description}</p>
                                <div>
                                    <strong>Stock:</strong> {item.stock}
                                </div>
                                <div>
                                    <strong>Price:</strong> {item.price}
                                </div>
                            </div>
                        </div>
                    </CardText>
                </Card>
            );
        });

        return (
            <div className="app-product-list-container">
                <p>
                    <span>Showing <strong>{total}</strong> products</span>
                    {hidden > 0 && <span> - Hidden: < strong > {hidden}</strong></span>}
                </p>
                {cardItems}
            </div>
        );
    }
}

export default ProductListContainer;