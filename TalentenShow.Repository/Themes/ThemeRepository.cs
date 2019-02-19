using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Locations;
using TalentenShow.Domain.Models.Themes;

namespace TalentenShow.Repository.Themes
{
    public class ThemeRepository : BaseRepository<Event>, IThemeRepository
    {


        public List<Theme> GetAllThemes()
        {
            List<Theme> result = new List<Theme>();

            using (var context = CreateContext())
            {
                result = context.Set<Theme>()
                .AsNoTracking()
                .ToList();
            }

            return result;
        }

        public int SaveTheme(Theme theme)
        {
            using (var context = CreateContext())
            {
                if (theme.Id > 0)
                { // Update
                    context.Set<Theme>().Attach(theme);
                    context.Entry(theme).State = EntityState.Modified;
                }
                else
                { // New
                    context.Set<Theme>().Add(theme);
                }
                context.SaveChanges();
            }

            return 1;
        }

        public int DeleteTheme(Theme theme)
        {
            using (var context = CreateContext())
            {
                context.Set<Theme>().Attach(theme);
                context.Entry(theme).State = EntityState.Deleted;
                context.SaveChanges();
            }

            return 1;
        }
    }
}
