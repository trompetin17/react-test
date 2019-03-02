using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Newtonsoft.Json;
using ProductsRestApi.Interfaces;
using ProductsRestApi.Models;

namespace ProductsRestApi.Services
{
    public class ProductsDataAccessLayer : IProductsDataAccessLayer
    {
        private const String fileJSON = "products.json";
        private readonly string _path;
        private IEnumerable<Product> _cache;
        public ProductsDataAccessLayer(IHostingEnvironment env)
        {
            this._path = $"{env.ContentRootPath}{Path.DirectorySeparatorChar.ToString()}Data{Path.DirectorySeparatorChar.ToString()}{fileJSON}";
        }

        public async Task<IEnumerable<Product>> GetDataSet()
        {
            if (this._cache != null)
            {
                return this._cache;
            }

            string source = "";
            using (StreamReader sourceReader = File.OpenText(this._path))
            {
                source = await sourceReader.ReadToEndAsync();
            }
            _cache = await Task.Factory.StartNew(() => JsonConvert.DeserializeObject<IEnumerable<Product>>(source));
            return _cache;
        }
    }
}
