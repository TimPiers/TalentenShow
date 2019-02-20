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
        public int DeleteEvent(Event eventObj)
        {
            using (var context = CreateContext())
            {
                context.Set<Event>().Attach(eventObj);
                context.Entry(eventObj).State = EntityState.Deleted;
                context.SaveChanges();
            }

            return 1;
        }

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

        public List<Event> GetAllEvents()
        {
            List<Event> result = new List<Event>();

            using (var context = CreateContext())
            {
                result = context.Set<Event>()
                .AsNoTracking()
                .Include(x => x.Location)
                .Include(x => x.Theme)
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

        public int SaveEvent(Event eventObj)
        {
            using (var context = CreateContext())
            {
                if (eventObj.Id > 0)
                { // Update
                    context.Set<Event>().Attach(eventObj);
                    context.Entry(eventObj).State = EntityState.Modified;
                }
                else
                { // New
                    context.Set<Event>().Add(eventObj);
                }
                context.SaveChanges();
            }

            return 1;
        }
    }
}
