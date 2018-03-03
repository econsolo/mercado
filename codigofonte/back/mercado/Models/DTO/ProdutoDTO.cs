using Newtonsoft.Json;

namespace mercado.Models.DTO
{
    public class ProdutoDTO
    {
        public ProdutoDTO() { }

        public ProdutoDTO(Produto produto)
        {
            Id = produto.Id;
            Nome = produto.Nome;
            Quantidade = produto.Quantidade;
            Valor = produto.Valor;
            Unidade = new UnidadeDTO(produto.Unidade);
        }

        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; }

        [JsonProperty(PropertyName = "nome")]
        public string Nome { get; set; }

        [JsonProperty(PropertyName = "unidade")]
        public UnidadeDTO Unidade { get; set; }

        [JsonProperty(PropertyName = "quantidade")]
        public double Quantidade { get; set; }

        [JsonProperty(PropertyName = "valor")]
        public double Valor { get; set; }

        
    }
}