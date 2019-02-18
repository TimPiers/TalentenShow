using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Events;
using TalentenShow.Domain.Business.News;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.News;
using TalentenShow.Repository.Events;
using TalentenShow.Repository.News;

namespace TalentenShow.WebApi.Controllers {
    public class EventController : ApiController
    {

        private IEventService _service;

        public EventController()
        {
            _service = new EventService(new EventRepository());
        }

        /// <summary>
        /// Get all active events.
        /// </summary>
        [Route("api/events/active")]
        [HttpGet]
        public List<Event> GetAllActiveEvents()
        {
            return _service.GetAllActiveEvents();
        }

        /// <summary>
        /// Get event by Id
        /// </summary>
        [Route("api/events/get/{eventId}")]
        [HttpGet]
        public Event GetNewsById(int eventId)
        {
            return _service.GetEventById(eventId);

        }

    }
}
