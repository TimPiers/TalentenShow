using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.News;

namespace TalentenShow.Repository.News
{
    public class NewsRepository : BaseRepository<Domain.Models.News.News>, INewsRepository
    {

        public List<Domain.Models.News.News> GetAllNews()
        {
            List<Domain.Models.News.News> result = new List<Domain.Models.News.News>();

            using (var context = CreateContext())
            {
                result = context.Set<Domain.Models.News.News>()
               .AsNoTracking()
               .OrderByDescending(n => n.DatePublished)
               .ToList();
            }
            return result;
        }

        public Domain.Models.News.News GetLatestNews()
        {
            Domain.Models.News.News result = null;

            using (var context = CreateContext())
            {
                result = context.Set<Domain.Models.News.News>()
               .AsNoTracking()
               .Where(n => !n.IsHidden)
               .OrderByDescending(n => n.DatePublished)
               .FirstOrDefault();
            }
            return result;
        }
    }
}
