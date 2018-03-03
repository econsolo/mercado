using FluentNHibernate.Mapping;

namespace mercado.Models.Map
{
    public class VendaMap : ClassMap<Venda>
    {
        public VendaMap()
        {
            Table("venda");

            Id(x => x.Id)
                .Column("id")
                .Length(36);

            Map(x => x.Total)
                .Column("total")
                .Length(8)
                .Precision(2)
                .Not.Nullable();

            Map(x => x.Data)
                .Column("data")
                .Not.Nullable();

            References(x => x.Usuario)
                .Column("id_usuario")
                .ForeignKey("FK_VENDA_USUARIO")
                .Not.LazyLoad()
                .Not.Nullable();
        }
    }
}