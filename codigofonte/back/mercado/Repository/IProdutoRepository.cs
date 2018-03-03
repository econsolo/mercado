using mercado.Models;
using mercado.Models.DTO;
using System.Collections.Generic;

namespace mercado.Repository
{
    public interface IProdutoRepository : IRepository<Produto>
    {
        List<Produto> Buscar(FiltroProdutoDTO filtro);
    }
}
