using Newtonsoft.Json;

namespace mercado.Models.DTO
{
    public class FiltroUsuarioDTO
    {
        [JsonProperty(PropertyName = "login")]
        public string _login { get; set; }

        public string Login
        {
            get { return _login ?? ""; }
        }
    }
}