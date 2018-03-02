using System.Collections.Generic;

namespace mercado.Repository
{
    public interface IRepository<T>
    {
        void Salvar(T entidade);
        void Alterar(T entidade);
        void Excluir(T entidade);
        T BuscarPorId(string id);
        IEnumerable<T> BuscarTodos();
    }
}
