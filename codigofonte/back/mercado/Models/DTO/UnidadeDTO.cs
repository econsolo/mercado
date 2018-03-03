using Newtonsoft.Json;

namespace mercado.Models.DTO
{
    public class UnidadeDTO
    {
        public UnidadeDTO() { }

        public UnidadeDTO(Unidade unidade)
        {
            Id = unidade.Id;
            Nome = unidade.Nome;
        }

        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "nome")]
        public string Nome { get; set; }
    }
}