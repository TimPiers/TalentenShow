using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Models.Users;

namespace TalentenShow.Repository.Users
{
    public class ParticipantEventRepository : BaseRepository<ParticipantEvent>
    {

        public string SaveParticipantEvent(ParticipantEvent participantEvent)
        {
            using (var context = CreateContext())
            {
                context.Set<ParticipantEvent>().Add(participantEvent);
                context.SaveChanges();
            }
            return participantEvent.Code;
        }

        public List<ParticipantEvent> GetParticipantEvents()
        {
            List<ParticipantEvent> result = new List<ParticipantEvent>();

            using (var context = CreateContext())
            {
                result = context.Set<ParticipantEvent>()
                .AsNoTracking()
                .ToList();
            }

            
            return result;
        }

    }
}
