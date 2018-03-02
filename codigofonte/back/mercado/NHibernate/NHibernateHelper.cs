using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using mercado.Models;
using NHibernate;
using NHibernate.Tool.hbm2ddl;

namespace mercado.NHibernate
{
    public class NHibernateHelper
    {

        public static ISession OpenSession()
        {
            ISessionFactory sessionFactory = Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2012
                  .ConnectionString(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Programming\Projetos\mercado\mercado\codigofonte\banco\Mercado.mdf;Persist Security Info=True;Connect Timeout=30")
                              .ShowSql()
                )
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Unidade>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<Produto>())
                .ExposeConfiguration(cfg => new SchemaExport(cfg).Create(true, true))
                .BuildSessionFactory();
            return sessionFactory.OpenSession();
        }
    }
}