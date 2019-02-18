using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Locations;

namespace TalentenShow.Repository.Events
{
    public class EventRepository : BaseRepository<Event>, IEventRepository
    {
        public List<Event> GetAllActiveEvents()
        {
            List<Event> result = new List<Event>();
             
            using (var context = CreateContext())
            {
                result = context.Set<Event>()
                .AsNoTracking()
                .Include(x => x.Location)
                .Include(x => x.Theme)
                .Where(ev => ev.EntryStartDate <= DateTime.Now && ev.EntryEndDate >= DateTime.Now)
                .OrderByDescending(ev => ev.EventEndDate)
                .ToList();
            }

            return result;
        }

        public Event GetEventById(int eventId)
        {
            Event result = null;

            using (var context = CreateContext())
            {
                result = context.Set<Event>()
                .AsNoTracking()
                .Include(x => x.Location)
                .Include(x => x.Theme)
                .Where(ev => ev.Id == eventId)
                .OrderByDescending(ev => ev.EventEndDate)
                .FirstOrDefault();
            }

            return result;
        }
    }
}
