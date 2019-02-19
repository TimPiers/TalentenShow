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
        public int DeleteLocation(Location location)
        {
            using (var context = CreateContext())
            {
                context.Set<Location>().Attach(location);
                context.Entry(location).State = EntityState.Deleted;
                context.SaveChanges();
            }

            return 1;
        }

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

        public int SaveLocation(Location location)
        {
            using (var context = CreateContext())
            {
                if (location.Id > 0)
                { // Update
                    context.Set<Location>().Attach(location);
                    context.Entry(location).State = EntityState.Modified;
                }
                else
                { // New
                    context.Set<Location>().Add(location);
                }
                context.SaveChanges();
            }

            return 1;
        }

    }
}
