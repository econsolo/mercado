using mercado.Models.DTO;
using mercado.NHibernate;
using mercado.Service;
using System.Collections.Generic;
using System.Web.Http;

namespace mercado.Controllers
{
    [RoutePrefix("api/usuario")]
    public class UsuarioController : ApiController
    {
        private readonly UsuarioService usuarioService;

        public UsuarioController()
        {
            usuarioService = new UsuarioService(NHibernateHelper.OpenSession());
        }

        [HttpGet]
        [Route("buscar-todos")]
        public List<UsuarioDTO> BuscarTodos()
        {
            return usuarioService.BuscarTodos();
        }

        [HttpPost]
        [Route("buscar")]
        public List<UsuarioDTO> Buscar([FromBody]FiltroUsuarioDTO filtro)
        {
            return usuarioService.Buscar(filtro);
        }

        [HttpGet]
        [Route("buscar-por-id/{id}")]
        public UsuarioDTO BuscarPorId(string id)
        {
            return usuarioService.BuscarPorId(id);
        }

        [HttpPost]
        [Route("salvar")]
        public UsuarioDTO Salvar([FromBody]UsuarioDTO usuario)
        {
            return usuarioService.Salvar(usuario);
        }

        [HttpPut]
        [Route("alterar/{id}")]
        public UsuarioDTO Alterar(string id, [FromBody]UsuarioDTO usuario)
        {
            return usuarioService.Alterar(id, usuario);
        }

        [HttpDelete]
        [Route("excluir/{id}")]
        public void Excluir(string id)
        {
            usuarioService.Excluir(id);
        }

        [HttpPost]
        [Route("entrar")]
        public UsuarioDTO Entrar([FromBody]UsuarioDTO usuario)
        {
            return usuarioService.BuscarPorLoginSenha(usuario);
        }
    }
}
