using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Locations;

namespace TalentenShow.Repository.Locations
{
    public class LocationRepository : BaseRepository<Location>, ILocationRepository
    {


        public List<Location> GetAllLocations()
        {
            List<Location> result = new List<Location>();

            using (var context = CreateContext())
            {
                result = context.Set<Location>()
                .AsNoTracking()
                .ToList();
            }

            return result;
        }
    }
}
