using mercado.Models;
using mercado.Models.DTO;
using mercado.NHibernate;
using mercado.Service;
using System.Collections.Generic;
using System.Web.Http;

namespace mercado.Controllers
{
    [RoutePrefix("api/unidade")]
    public class UnidadeController : ApiController
    {
        private readonly UnidadeService unidadeService;

        public UnidadeController()
        {
            unidadeService = new UnidadeService(NHibernateHelper.OpenSession());
        }

        [HttpGet]
        [Route("buscar-todos")]
        public List<UnidadeDTO> BuscarTodos()
        {
            return unidadeService.BuscarTodos();
        }
    }
}
