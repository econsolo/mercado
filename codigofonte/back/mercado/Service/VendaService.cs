using mercado.Models;
using mercado.Models.DTO;
using mercado.Repository;
using NHibernate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mercado.Service
{
    public class VendaService
    {
        private IVendaRepository _repositoryVenda;
        private IVendaProdutoRepository _repositoryVendaProduto;
        private IProdutoRepository _repositoryProduto;
        private IUsuarioRepository _repositoryUsuario;

        public VendaService(ISession session)
        {
            _repositoryVenda = new VendaRepository(session);
            _repositoryVendaProduto = new VendaProdutoRepository(session);
            _repositoryProduto = new ProdutoRepository(session);
            _repositoryUsuario = new UsuarioRepository(session);
        }

        public void Vender(CarrinhoDTO carrinhoDTO)
        {
            // Somo o valor de cada produto
            double valorTotal = GetValorTotal(carrinhoDTO.ProdutosDTO);

            // Crio uma venda e salvo
            Venda venda = CriaVenda(valorTotal, carrinhoDTO.UsuarioDTO);

            // Vinculo produtos na venda salva
            carrinhoDTO.ProdutosDTO.ForEach(produto =>
            {
                VendaProduto vendaProduto = new VendaProduto()
                {
                    Id = Guid.NewGuid().ToString(),
                    Produto = _repositoryProduto.BuscarPorId(produto.Id),
                    Venda = venda
                };

                _repositoryVendaProduto.Salvar(vendaProduto);
            });
        }

        private Venda CriaVenda(double valorTotal, UsuarioDTO usuarioDTO)
        {
            Venda venda = new Venda()
            {
                Id = Guid.NewGuid().ToString(),
                Total = valorTotal,
                Usuario = _repositoryUsuario.BuscarPorId(usuarioDTO.Id),
                Data = new DateTime()
            };

            _repositoryVenda.Salvar(venda);
            return venda;
        }

        private double GetValorTotal(List<ProdutoDTO> produtosDTO)
        {
            return produtosDTO.Select(p => p.Valor).Sum();
        }
    }
}