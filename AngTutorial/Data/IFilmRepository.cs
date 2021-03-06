﻿using System.Collections.Generic;
using MovieShop.Data.Entities;

namespace MovieShop.Data
{
    public interface IFilmRepository
    {
        IEnumerable<Product> GetAllProducts();
        IEnumerable<Product> GetProductsByCategory(string category);

        IEnumerable<Order> GetAllOrders(bool includeItems);

        IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems);
        Order GetOrderById(string username, int id);
        
        bool SaveAll();
        void AddEntity(object model);
       
    }
}