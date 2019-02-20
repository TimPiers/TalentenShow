using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Events;
using TalentenShow.Domain.Business.News;
using TalentenShow.Domain.Business.Users;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.News;
using TalentenShow.Domain.Models.Users;
using TalentenShow.Repository.Events;
using TalentenShow.Repository.News;
using TalentenShow.Repository.Users;

namespace TalentenShow.WebApi.Controllers {
    public class ParticipantController : ApiController
    {

        private IPersonService _service;

        public ParticipantController()
        {
            _service = new PersonService(new PersonRepository());
        }


        /// <summary>
        /// Get all active participants.
        /// </summary>
        [Route("api/participant/all")]
        [HttpGet]
        public List<Participant> GetParticipants()
        {
            return _service.GetParticipants();
        }

        /// <summary>
        /// Save a participant
        /// </summary>
        [Route("api/participant/save")]
        [HttpPost]
        public string SaveEvent(ParticipantEvent participantEvent)
        {
            return _service.SaveParticipant(participantEvent.Participant, participantEvent.Event);
        }

      
    }
}
