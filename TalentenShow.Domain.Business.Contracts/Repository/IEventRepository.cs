using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Events;

namespace TalentenShow.Domain.Business.Contracts.Repository
{
    public interface IEventRepository
    {

        List<Event> GetAllEvents();
        List<Event> GetAllActiveEvents();
        Event GetEventById(int eventId);
        int SaveEvent(Event eventObj);
        int DeleteEvent(Event eventObj);
    }
}
