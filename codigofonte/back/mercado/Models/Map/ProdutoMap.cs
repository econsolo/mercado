using FluentNHibernate.Mapping;

namespace mercado.Models.Map
{
    public class ProdutoMap : ClassMap<Produto>
    {
        public ProdutoMap()
        {

            Table("produto");

            Id(x => x.Id)
                .Column("id")
                .Length(36);

            Map(x => x.Nome)
                .Column("nome")
                .Length(80)
                .Not.Nullable();

            Map(x => x.Quantidade)
                .Column("quantidade")
                .Length(8)
                .Precision(2)
                .Not.Nullable();

            Map(x => x.Valor)
                .Column("valor")
                .Length(8)
                .Precision(2)
                .Not.Nullable();

            References(x => x.Unidade)
                .Column("id_unidade")
                .ForeignKey("FK_PRODUTO_UNIDADE")
                .Not.LazyLoad() // Sempre precisarei ter a Unidade carregada
                .Not.Nullable();
        }
    }
}