using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Users;

namespace TalentenShow.Repository.Users
{
    public class PersonRepository : BaseRepository<Participant>, IPersonRepository
    {
        public List<Participant> GetParticipants()
        {
            List<Participant> result = new List<Participant>();
            List<ParticipantEvent> participantEvents;
            List<Event> events;
            var context = CreateContext();
            using (context)
            {
                result = context.Set<Participant>()
                .AsNoTracking()
                .ToList();

                participantEvents = context.ParticipantEvent.ToList();
                events = context.Events.ToList();
            }

            foreach (ParticipantEvent participantEvent in participantEvents)
            {
                Participant p = result.Find(x => x.Id == participantEvent.ParticipantId);
                foreach (Event eventObj in events)
                {
                    if(eventObj.Id == participantEvent.EventId)
                    {
                        p.ParticipatedEvents.Add(eventObj);
                    }
                }
            }

            return result;
        }

        public string SaveParticipant(Participant participant, Event eventObj, string code)
        {
            // Save Participant
            using (var context = CreateContext())
            {
                if (participant.Id > 0)
                { // Update
                    context.Set<Participant>().Attach(participant);
                    context.Entry(participant).State = EntityState.Modified;
                }
                else
                { // New
                    context.Set<Participant>().Add(participant);
                }
                
                context.SaveChanges();
            }

            //Create new link object
            ParticipantEvent participantEvent = new ParticipantEvent();
            participantEvent.Id = 0;
            participantEvent.ParticipantId = participant.Id;
            participantEvent.Participant = null;
            participantEvent.EventId = eventObj.Id;
            participantEvent.Event = null;
            participantEvent.Code = code;

            //Save link between event and particpant
            return new ParticipantEventRepository().SaveParticipantEvent(participantEvent);
        }
    }
}
