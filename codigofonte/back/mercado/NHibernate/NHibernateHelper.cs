using FluentNHibernate.Cfg;
using FluentNHibernate.Cfg.Db;
using mercado.Models.Map;
using NHibernate;
using NHibernate.Tool.hbm2ddl;
using System;
using System.IO;

namespace mercado.NHibernate
{
    public class NHibernateHelper
    {

        public static ISession OpenSession()
        {
            string caminhoBanco = @"C:\Programming\Projetos\mercado\mercado\codigofonte\back\mercado\Banco\Mercado.mdf";

            ISessionFactory sessionFactory = Fluently.Configure()
                .Database(MsSqlConfiguration.MsSql2012
                  .ConnectionString(@"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename="+ caminhoBanco + ";Persist Security Info=True;Connect Timeout=30")
                              .ShowSql()
                )
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<UnidadeMap>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<ProdutoMap>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<UsuarioMap>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<VendaMap>())
               .Mappings(m => m.FluentMappings.AddFromAssemblyOf<VendaProdutoMap>())
                .ExposeConfiguration(cfg => new SchemaExport(cfg).Create(true, false))
                .BuildSessionFactory();
            return sessionFactory.OpenSession();
        }
    }
}