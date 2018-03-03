using mercado.Models;
using mercado.Models.DTO;
using System.Collections.Generic;

namespace mercado.Repository
{
    public interface IUsuarioRepository : IRepository<Usuario>
    {
        List<Usuario> Buscar(FiltroUsuarioDTO filtro);
    }
}