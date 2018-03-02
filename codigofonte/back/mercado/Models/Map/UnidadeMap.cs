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
                .GeneratedBy.Guid();

            Map(x => x.Nome)
                .Column("nome")
                .Length(80)
                .Not.Nullable();
        }
    }
}