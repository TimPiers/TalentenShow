using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.News;
using TalentenShow.Domain.Business.Themes;
using TalentenShow.Domain.Models.News;
using TalentenShow.Domain.Models.Themes;
using TalentenShow.Repository.News;
using TalentenShow.Repository.Themes;

namespace TalentenShow.WebApi.Controllers {
    public class ThemeController : ApiController
    {

        private IThemeService _service;

        public ThemeController()
        {
            _service = new ThemeService(new ThemeRepository());
        }

        /// <summary>
        /// Get all themes.
        /// </summary>
        [Route("api/themes/all")]
        [HttpGet]
        public List<Theme> GetAllThemes()
        {
            return _service.GetAllThemes();
        }

        /// <summary>
        /// Save a theme
        /// </summary>
        [Route("api/themes/save")]
        [HttpPost]
        public int SaveTheme(Theme theme)
        {
            return _service.SaveTheme(theme);
        }

        /// <summary>
        /// Delete a theme
        /// </summary>
        [Route("api/themes/delete")]
        [HttpPost]
        public int DeleteTheme(Theme theme)
        {
            return _service.DeleteTheme(theme);
        }
    }
}
