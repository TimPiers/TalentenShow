using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.News;

namespace TalentenShow.Domain.Business.Contracts.Repository
{
    public interface INewsRepository
    {
        List<News> GetAllNews();
        News GetLatestNews();

    }
}
