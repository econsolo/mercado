using FluentNHibernate.Mapping;

namespace mercado.Models.Map
{
    public class UnidadeMap : ClassMap<Unidade>
    {
        public UnidadeMap()
        {
            Table("unidade");

            Id(x => x.Id)
                .Column("id")
                .Length(36);

            Map(x => x.Nome)
                .Column("nome")
                .Length(80)
                .Not.Nullable();
        }
    }
}