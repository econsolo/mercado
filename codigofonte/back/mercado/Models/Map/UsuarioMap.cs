using FluentNHibernate.Mapping;

namespace mercado.Models.Map
{
    public class UsuarioMap : ClassMap<Usuario>
    {
        public UsuarioMap()
        {
            Table("usuario");

            Id(x => x.Id)
                .Column("id")
                .Length(36);

            Map(x => x.Login)
                .Column("login")
                .Length(40)
                .Not.Nullable();

            Map(x => x.Senha)
                .Column("senha")
                .Length(40)
                .Not.Nullable();
        }
    }
}