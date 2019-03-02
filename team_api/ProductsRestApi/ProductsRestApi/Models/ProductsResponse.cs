using System;
using System.Collections.Generic;

namespace ProductsRestApi.Models
{
    public class ProductsResponse
    {
        public int Total { get; set; }
        public int Hidden { get; set; }
        public List<Product> Data { get; set; }
    }
}
