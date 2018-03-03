using mercado.Models;
using NHibernate;
using System.Collections.Generic;
using System.Linq;

namespace mercado.Repository
{
    public class UnidadeRepository : IUnidadeRepository
    {
        private readonly ISession _session;

        public UnidadeRepository(ISession session)
        {
            _session = session;
        }

        public void Salvar(Unidade unidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Save(unidade);
                tran.Commit();
            }
        }

        public void Alterar(Unidade unidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Update(unidade);
                tran.Commit();
            }
        }

        public Unidade BuscarPorId(string id) => _session.Get<Unidade>(id);

        public IEnumerable<Unidade> BuscarTodos() => _session.Query<Unidade>().ToList();

        public void Excluir(Unidade unidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Delete(unidade);
                tran.Commit();
            }
        }

    }
}