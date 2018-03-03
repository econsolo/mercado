using mercado.Models.DTO;
using mercado.NHibernate;
using mercado.Service;
using System.Web.Http;

namespace mercado.Controllers
{
    [RoutePrefix("api/venda")]
    public class VendaController : ApiController
    {
        private readonly VendaService vendaService;

        public VendaController()
        {
            vendaService = new VendaService(NHibernateHelper.OpenSession());
        }

        [HttpPost]
        [Route("vender")]
        public void Vender([FromBody]CarrinhoDTO carrinhoDTO)
        {
            vendaService.Vender(carrinhoDTO);
        }
    }
}
