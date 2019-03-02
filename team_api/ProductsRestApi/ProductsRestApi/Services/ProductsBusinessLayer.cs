using System;
using ProductsRestApi.Interfaces;

namespace ProductsRestApi.Services
{
    public class ProductsBusinessLayer
    {
        private readonly IProductsDataAccessLayer _productsDataAccessLayer;

        public ProductsBusinessLayer(IProductsDataAccessLayer productsDataAccessLayer)
        {
            this._productsDataAccessLayer = productsDataAccessLayer;
        }


        public IEnumerable<Product> GetByCategory()
        {

        }
    }
}
