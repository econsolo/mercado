using mercado.Models;
using mercado.NHibernate;
using mercado.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace mercado.Service
{
    public class ValidarLogin : AuthorizationFilterAttribute
    {
        
       public override void OnAuthorization(HttpActionContext actionContext)
        {
            IEnumerable<string> values;
            if (actionContext.Request.Headers.TryGetValues("id-usuario", out values))
            {
                string idUsuario = values.First();
                if (string.IsNullOrEmpty(idUsuario))
                {
                    SendResponse401(actionContext);
                    return;
                }

                IUsuarioRepository repository = new UsuarioRepository(NHibernateHelper.OpenSession());
                Usuario usuario = repository.BuscarPorId(idUsuario);
                if (usuario == null)
                {
                    SendResponse401(actionContext);
                    return;
                }

                base.OnAuthorization(actionContext);
            }
        }

        private void SendResponse401(HttpActionContext actionContext)
        {
            actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
        }
    }
}