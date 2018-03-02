using mercado.Models;
using mercado.NHibernate;
using mercado.Service;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace mercado.Controllers
{
    [RoutePrefix("api/produto")]
    public class ProdutoController : ApiController
    {
        private readonly ProdutoService produtoService;

        public ProdutoController()
        {
            produtoService = new ProdutoService(NHibernateHelper.OpenSession());
        }

        [HttpGet]
        [Route("buscar-todos")]
        public IEnumerable<Produto> BuscarTodos()
        {
            return produtoService.BuscarTodos();
        }

        [HttpGet]
        [Route("buscar-por-id/{id}")]
        public Produto BuscarPorId(string id)
        {
            return produtoService.BuscarPorId(id);
        }

        [HttpPost]
        [Route("salvar")]
        public void Salvar([FromBody]Produto produto)
        {
        }

        [HttpPut]
        [Route("alterar/{id}")]
        public void Put(string id, [FromBody]Produto produto)
        {
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public void Delete(int id)
        {
        }
    }
}
