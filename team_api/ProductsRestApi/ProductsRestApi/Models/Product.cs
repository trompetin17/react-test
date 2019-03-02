using System;
using System.Collections.Generic;

namespace ProductsRestApi.Models
{
    public class Product
    {
        public Product()
        {
            Categories = new HashSet<string>();
        }
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Price { get; set; }
        public string Brand { get; set; }
        public int Stock { get; set; }
        public string Photo { get; set; }
        public HashSet<string> Categories { get; set; }
    }
}
