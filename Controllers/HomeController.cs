using aurelia_mvc6_typescript.wwwroot.Models;
using Microsoft.AspNetCore.Mvc;

namespace aurelia_mvc6_typescript.Controllers
{
  public class HomeController : Controller
  {
    public IActionResult Index()
    {
      return View();
    }

    public IActionResult About()
    {
      ViewData["Message"] = "Your application description page.";

      return View();
    }

    public IActionResult Contact()
    {
      ViewData["Message"] = "Your contact page.";

      return View();
    }

    // TODO: Refactor this to use MVC6 ViewComponents instead of razor partials
    public IActionResult GetTemplate()
    {
      var model = new Product
      {
        Title = "My cool product",
        Subtitle = "My cool product's subtitle"
      };

      return PartialView($"~/Views/Home/_homeComponent.cshtml", model);
    }

    public IActionResult Error()
    {
      return View();
    }
  }
}
