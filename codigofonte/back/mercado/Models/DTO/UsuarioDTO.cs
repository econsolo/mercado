using Newtonsoft.Json;

namespace mercado.Models.DTO
{
    public class UsuarioDTO
    {
        public UsuarioDTO() { }
        
        public UsuarioDTO(Usuario usuario)
        {
            Id = usuario.Id;
            Login = usuario.Login;
            Senha = usuario.Senha;
        }

        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "login")]
        public string Login { get; set; }

        [JsonProperty(PropertyName = "senha")]
        public string Senha { get; set; }
    }
}