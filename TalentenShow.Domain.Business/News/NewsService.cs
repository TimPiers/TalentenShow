using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.News;
using TalentenShow.Repository.News;

namespace TalentenShow.Domain.Business.News
{
    public class NewsService : INewsService
    {

        private INewsRepository _repository;

        public NewsService(INewsRepository repository)
        {
            _repository = repository;
        }

        public List<Models.News.News> GetAllNews()
        {
            return _repository.GetAllNews();
        }

        public Models.News.News GetLatestNews()
        {
            return _repository.GetLatestNews();
        }
    }
}
