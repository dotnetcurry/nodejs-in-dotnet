using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Node_MVCClient.Controllers
{
    public class NodeAppController : Controller
    {
        // GET: NodeApp
        public ActionResult Index()
        {
            return View();
        }
    }
}