
namespace mercado.Models
{
    public class VendaProduto
    {
        public VendaProduto() { }

        public string Id { get; set; }
        public Venda Venda { get; set; }
        public Produto Produto { get; set; }
    }
}