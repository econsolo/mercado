using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using mercado.Models;
using NHibernate;

namespace mercado.Repository
{
    public class VendaProdutoRepository : IVendaProdutoRepository
    {
        private readonly ISession _session;

        public VendaProdutoRepository(ISession session)
        {
            _session = session;
        }

        public void Alterar(VendaProduto entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Update(entidade);
                tran.Commit();
            }
        }

        public VendaProduto BuscarPorId(string id) => _session.Get<VendaProduto>(id);

        public IEnumerable<VendaProduto> BuscarPorProduto(string id)
        {
            return _session.Query<VendaProduto>().Where(v => v.Produto.Id == id).ToList();
        }

        public IEnumerable<VendaProduto> BuscarTodos() => _session.Query<VendaProduto>().ToList();

        public void Excluir(VendaProduto entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Delete(entidade);
                tran.Commit();
            }
        }

        public void Salvar(VendaProduto entidade)
        {
            using (var tran = _session.BeginTransaction())
            {
                _session.Save(entidade);
                tran.Commit();
            }
        }
    }
}