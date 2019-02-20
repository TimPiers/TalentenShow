using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Users;

namespace TalentenShow.Domain.Business.Users
{
    public class PersonService : IPersonService
    {

        private IPersonRepository _repository;

        public PersonService(IPersonRepository repository)
        {
            _repository = repository;
        }

        public string GenerateEventKey(string eventCode)
        {
            Guid randomId = Guid.NewGuid();
            return eventCode + "-" + randomId;
        }

        public List<Participant> GetParticipants()
        {
            return _repository.GetParticipants();
        }

        public string SaveParticipant(Participant participant, Event eventObj)
        {
            string code = GenerateEventKey(eventObj.EventCode);
            return _repository.SaveParticipant(participant, eventObj, code);
        }
    }
}
