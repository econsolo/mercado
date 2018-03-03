using FluentNHibernate.Mapping;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace mercado.Models.Map
{
    public class VendaProdutoMap : ClassMap<VendaProduto>
    {
        public VendaProdutoMap()
        {
            Table("venda_produto");

            Id(x => x.Id)
                .Column("id")
                .Length(36);

            References(x => x.Produto)
                .Column("id_produto")
                .ForeignKey("FK_VENDA_PRODUTO")
                .Not.LazyLoad()
                .Not.Nullable();

            References(x => x.Venda)
                .Column("id_venda")
                .ForeignKey("FK_PRODUTO_VENDA")
                .Not.LazyLoad()
                .Not.Nullable();
        }
    }
}