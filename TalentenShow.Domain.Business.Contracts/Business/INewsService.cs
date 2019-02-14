using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.News;

namespace TalentenShow.Domain.Business.Contracts.Business
{
    public interface INewsService
    {

        List<News> GetAllNews();
        News GetLatestNews();
        News GetNewsById(int newsId);

    }
}
