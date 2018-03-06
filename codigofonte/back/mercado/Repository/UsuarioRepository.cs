using System.Collections.Generic;
using System.Linq;
using mercado.Models;
using mercado.Models.DTO;
using NHibernate;

namespace mercado.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly ISession _session;

        public UsuarioRepository(ISession session)
        {
            _session = session;
        }

        public void Alterar(Usuario entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Update(entidade);
                tran.Commit();
            }
        }

        public Usuario BuscarPorId(string id) => _session.Get<Usuario>(id);

        public IEnumerable<Usuario> BuscarTodos() => _session.Query<Usuario>().ToList();

        public void Excluir(Usuario entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Delete(entidade);
                tran.Commit();
            }
        }

        public void Salvar(Usuario entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Save(entidade);
                tran.Commit();
            }
        }

        public List<Usuario> Buscar(FiltroUsuarioDTO filtro)
        {
            return _session.Query<Usuario>()
                .Where(p => p.Login.ToUpper().Contains(filtro.Login.Trim().ToUpper()))
                .ToList();
        }

        public Usuario BuscarPorLoginSenha(UsuarioDTO usuarioDTO)
        {
            return _session.Query<Usuario>()
                .Where(u => u.Login.ToUpper().Equals(usuarioDTO.Login.Trim().ToUpper()))
                .Where(u => u.Senha.ToUpper().Equals(usuarioDTO.Senha.Trim().ToUpper()))
                .FirstOrDefault();
        }
    }
}