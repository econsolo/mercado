using Newtonsoft.Json;

namespace mercado.Models.DTO
{
    public class FiltroProdutoDTO
    {
        [JsonProperty(PropertyName = "nome")]
        public string _nome { get; set; }

        public string Nome
        {
            get { return _nome ?? ""; }
        }
        
    }
}