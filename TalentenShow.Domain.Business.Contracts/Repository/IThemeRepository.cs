using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Locations;
using TalentenShow.Domain.Models.Themes;

namespace TalentenShow.Domain.Business.Contracts.Repository
{
    public interface IThemeRepository
    {

        List<Theme> GetAllThemes();
        int SaveTheme(Theme theme);
        int DeleteTheme(Theme theme);

    }
}
