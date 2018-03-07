using mercado.Models;
using System.Collections.Generic;

namespace mercado.Repository
{
    public interface IVendaProdutoRepository : IRepository<VendaProduto>
    {
        IEnumerable<VendaProduto> BuscarPorProduto(string id);
    }
}