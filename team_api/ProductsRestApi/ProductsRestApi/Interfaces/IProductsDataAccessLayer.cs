using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using ProductsRestApi.Models;

namespace ProductsRestApi.Interfaces
{
    public interface IProductsDataAccessLayer
    {
        Task<IEnumerable<Product>> GetDataSet();
    }
}
