using mercado.Models;
using mercado.Models.DTO;
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
        public List<ProdutoDTO> BuscarTodos()
        {
            return produtoService.BuscarTodos();
        }

        [HttpPost]
        [Route("buscar")]
        public List<ProdutoDTO> Buscar([FromBody]FiltroProdutoDTO filtro)
        {
            return produtoService.Buscar(filtro);
        }

        [HttpGet]
        [Route("buscar-por-id/{id}")]
        public ProdutoDTO BuscarPorId(string id)
        {
            return produtoService.BuscarPorId(id);
        }

        [HttpPost]
        [Route("salvar")]
        public void Salvar([FromBody]ProdutoDTO produto)
        {
            produtoService.Salvar(produto);
        }

        [HttpPut]
        [Route("alterar/{id}")]
        public void Put(string id, [FromBody]ProdutoDTO produto)
        {
            produtoService.Alterar(id, produto);
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public void Delete(string id)
        {
            produtoService.Excluir(id);
        }
    }
}
