using System;
using System.Collections.Generic;
using FluentAssertions;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NSubstitute;
using TalentenShow.Domain.Business.Contracts.Business;
using TalentenShow.Domain.Business.Contracts.Repository;
using TalentenShow.Domain.Business.News;
using TalentenShow.Domain.Models.News;
using TalentenShow.Repository.News;

namespace TalentenShow.UnitTests
{
    [TestClass]
    public class NewsTests
    {

        private INewsService _service;
        private INewsRepository _repo;

        public void CreateContainers()
        {
            _repo = Substitute.For<INewsRepository>();
            _service = new NewsService(_repo);
            
        }

        [TestMethod]
        public void Test_GetAllNews_Returns_ListOfNews()
        {
            CreateContainers();

            List<News> list = new List<News>();

            _repo.GetAllNews().Returns(list);

            _service.GetAllNews().Should().NotBeNull();

        }

        [TestMethod]
        public void Test_GetLatestNews_Returns_News()
        {
            CreateContainers();

            News news = new News() {
                Id = 0,
                Content = "",
                IsHidden = false,
                Title = "",
                DatePublished = null
            };

            _repo.GetLatestNews().Returns(news);

            _service.GetLatestNews().Should().NotBeNull();

        }
    }
}
