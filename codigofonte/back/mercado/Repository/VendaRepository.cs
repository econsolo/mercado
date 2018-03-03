using System.Collections.Generic;
using System.Linq;
using mercado.Models;
using NHibernate;

namespace mercado.Repository
{
    public class VendaRepository : IVendaRepository
    {
        private readonly ISession _session;

        public VendaRepository(ISession session)
        {
            _session = session;
        }

        public void Alterar(Venda entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Update(entidade);
                tran.Commit();
            }
        }

        public Venda BuscarPorId(string id) => _session.Get<Venda>(id);

        public IEnumerable<Venda> BuscarTodos() => _session.Query<Venda>().ToList();

        public void Excluir(Venda entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Delete(entidade);
                tran.Commit();
            }
        }

        public void Salvar(Venda entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Save(entidade);
                tran.Commit();
            }
        }
    }
}