using HTML.WebSite.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTML.WebSite.Controllers
{
    public class ProductoController : Controller
    {

        [HttpGet]
        public ActionResult Index()
        {
            return View();
        }




        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }



        [HttpPost]
        public ActionResult Create(FormCollection form)
        {

            var producto = new Producto();

            producto.Codigo = Convert.ToInt32(form["Codigo"]);
            producto.Nombre = form["Nombre"];
            producto.Descripcion = form["Descripcion"];

            GestorBiz.Add(producto);

            return RedirectToAction("Index");
           
        }
    }
}