using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.News;
using TalentenShow.Domain.Models.News;
using TalentenShow.Repository.News;

namespace TalentenShow.WebApi.Controllers {
    public class AppVersionController : ApiController
    {

        private INewsService _service;

        public AppVersionController()
        {
            _service = new NewsService(new NewsRepository());
        }

        /// <summary>
        /// Get all news.
        /// </summary>
        [Route("api/news/all")]
        [HttpGet]
        public List<News> GetAllNews()
        {
            return _service.GetAllNews();
        }

        /// <summary>
        /// Get all news.
        /// </summary>
        [Route("api/news/latest")]
        [HttpGet]
        public News GetLatestNews()
        {
            return _service.GetLatestNews();

        }

    }
}
