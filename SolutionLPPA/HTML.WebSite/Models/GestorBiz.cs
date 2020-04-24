using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Web;

namespace HTML.WebSite.Models
{
    public class GestorBiz
    {
        private static List<Producto> productos = new List<Producto>();


        public static void InitLista()
        {
            productos.Add(new Producto { Codigo = 1234, Nombre = "Teclado", Descripcion = "Descripcion Teclado" });
            productos.Add(new Producto { Codigo = 1235, Nombre = "Mouse", Descripcion = "Descripcion Mouse" });
            productos.Add(new Producto { Codigo = 1236, Nombre = "Monitor", Descripcion = "Descripcion Monitor" });
        }

        public static List<Producto> GetProductos()
        {
            if (productos.Count == 0)
                InitLista();

            return productos;
        }

        public static void Add(Producto producto)
        {
            productos.Add(producto);
        }

    }
}