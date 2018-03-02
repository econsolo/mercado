using mercado.Models;
using mercado.Repository;
using NHibernate;
using System;
using System.Collections.Generic;

namespace mercado.Service
{
    public class ProdutoService
    {
        private IProdutoRepository _repository;

        public ProdutoService(ISession session)
        {
            _repository = new ProdutoRepository(session);
        }

        public IEnumerable<Produto> BuscarTodos()
        {
            return _repository.BuscarTodos();
        }

        public void Salvar(Produto produto)
        {
            _repository.Salvar(produto);
        }
         
        internal Produto BuscarPorId(string id)
        {
            return _repository.BuscarPorId(id);
        }
    }
}