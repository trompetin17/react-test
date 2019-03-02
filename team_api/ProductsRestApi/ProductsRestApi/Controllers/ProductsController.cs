using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProductsRestApi.Interfaces;
using ProductsRestApi.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ProductsRestApi.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IProductsDataAccessLayer productsDataAccessLayer;

        public ProductsController(IProductsDataAccessLayer productsDataAccessLayer)
        {
            this.productsDataAccessLayer = productsDataAccessLayer;
        }

        // GET: api/products
        [HttpGet]
        public async Task<JsonResult> Get(string category = "all")
        {
            var products = await this.productsDataAccessLayer.GetDataSet();
            var totalItems = products.Count();
            var hiddenItems = 0;
            IEnumerable<Product> filteredProducts;
            if (category != "all")
            {
                filteredProducts = products.Where(p => p.Categories.Contains(category));
                hiddenItems = totalItems - filteredProducts.Count();
                totalItems = totalItems - hiddenItems;

            }
            else
            {
                filteredProducts = products;
            }

            return Json(new ProductsResponse
            {
                Total = totalItems,
                Hidden = hiddenItems,
                Data = filteredProducts.ToList()
            });
        }
    }
}
