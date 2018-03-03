using Newtonsoft.Json;
using System.Collections.Generic;

namespace mercado.Models.DTO
{
    public class CarrinhoDTO
    {

        [JsonProperty(PropertyName = "produtos")]
        public List<ProdutoDTO> ProdutosDTO { get; set; }

        [JsonProperty(PropertyName = "usuario")]
        public UsuarioDTO UsuarioDTO { get; set; }

    }
}