using mercado.Models;
using NHibernate;
using System.Collections.Generic;
using System.Linq;

namespace mercado.Repository
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly ISession _session;

        public ProdutoRepository(ISession session)
        {
            _session = session;
        }

        public void Salvar(Produto produto)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Save(produto);
                tran.Commit();
            }
        }

        public void Alterar(Produto produto)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Update(produto);
                tran.Commit();
            }
        }

        public Produto BuscarPorId(string id) => _session.Get<Produto>(id);

        public IEnumerable<Produto> BuscarTodos() => _session.Query<Produto>().ToList();

        public void Excluir(Produto produto)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Delete(produto);
                tran.Commit();
            }
        }

        
    }
}