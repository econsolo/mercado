using mercado.Models;
using mercado.Models.DTO;
using mercado.Repository;
using NHibernate;
using System;
using System.Collections.Generic;

namespace mercado.Service
{
    public class ProdutoService
    {
        private IProdutoRepository _repository;
        private IUnidadeRepository _unidadeRepository;

        public ProdutoService(ISession session)
        {
            _repository = new ProdutoRepository(session);
            _unidadeRepository = new UnidadeRepository(session);
        }

        public List<ProdutoDTO> BuscarTodos()
        {
            List<Produto> Produtos = new List<Produto>(_repository.BuscarTodos());
            List<ProdutoDTO> ProdutosDTO = new List<ProdutoDTO>();

            Produtos.ForEach(p => ProdutosDTO.Add(new ProdutoDTO(p)));

            return ProdutosDTO;
        }

        public List<ProdutoDTO> Buscar(FiltroProdutoDTO filtro)
        {
            List<Produto> Produtos = new List<Produto>(_repository.Buscar(filtro));
            List<ProdutoDTO> ProdutosDTO = new List<ProdutoDTO>();

            Produtos.ForEach(p => ProdutosDTO.Add(new ProdutoDTO(p)));

            return ProdutosDTO;
        }

        public void Salvar(ProdutoDTO produtoDTO)
        {
            _repository.Salvar(ConverterParaEntidade(null, produtoDTO));
        }

        public void Alterar(string id, ProdutoDTO produtoDTO)
        {
            _repository.Alterar(ConverterParaEntidade(id, produtoDTO));
        }

        private Produto ConverterParaEntidade(string id, ProdutoDTO produtoDTO)
        {
            Produto produto = new Produto();
            produto.Id = string.IsNullOrEmpty(id) ? Guid.NewGuid().ToString() : id;
            produto.Nome = produtoDTO.Nome;
            produto.Quantidade = produtoDTO.Quantidade;
            produto.Valor = produtoDTO.Valor;
            produto.Unidade = _unidadeRepository.BuscarPorId(produtoDTO.Unidade.Id);
            return produto;
        }

        public void Excluir(string id)
        {
            _repository.Excluir(_repository.BuscarPorId(id));
        }

        public ProdutoDTO BuscarPorId(string id)
        {
            return new ProdutoDTO(_repository.BuscarPorId(id));
        }
    }
}