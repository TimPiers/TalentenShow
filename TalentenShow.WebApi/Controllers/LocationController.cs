using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Events;
using TalentenShow.Domain.Business.Locations;
using TalentenShow.Domain.Business.News;
using TalentenShow.Domain.Models.Events;
using TalentenShow.Domain.Models.Locations;
using TalentenShow.Domain.Models.News;
using TalentenShow.Repository.Events;
using TalentenShow.Repository.Locations;
using TalentenShow.Repository.News;

namespace TalentenShow.WebApi.Controllers {
    public class LocationController : ApiController
    {

        private ILocationService _service;

        public LocationController()
        {
            _service = new LocationService(new LocationRepository());
        }


        /// <summary>
        /// Get all Locations.
        /// </summary>
        [Route("api/locations/all")]
        [HttpGet]
        public List<Location> GetAllEvents()
        {
            return _service.GetAllLocations();
        }

        /// <summary>
        /// Save a location
        /// </summary>
        [Route("api/locations/save")]
        [HttpPost]
        public int SaveLocation(Location location)
        {
            return _service.SaveLocation(location);
        }

        /// <summary>
        /// Delete a location
        /// </summary>
        [Route("api/locations/delete")]
        [HttpPost]
        public int DeleteLocation(Location location)
        {
            return _service.DeleteLocation(location);
        }
    }
}
