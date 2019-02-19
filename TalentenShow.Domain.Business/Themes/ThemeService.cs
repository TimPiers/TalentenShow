using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Themes;

namespace TalentenShow.Domain.Business.Themes
{
    public class ThemeService : IThemeService
    {

        private IThemeRepository _repository;

        public ThemeService(IThemeRepository repository)
        {
            _repository = repository;
        }

        public List<Theme> GetAllThemes()
        {
            return _repository.GetAllThemes();
        }

        public int SaveTheme(Theme theme)
        {
            return _repository.SaveTheme(theme);
        }

        public int DeleteTheme(Theme theme)
        {
            return _repository.DeleteTheme(theme);
        }
    }
}
