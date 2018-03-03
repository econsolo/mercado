
namespace mercado.Models
{
    public class VendaProduto
    {
        public VendaProduto() { }

        public virtual string Id { get; set; }
        public virtual Venda Venda { get; set; }
        public virtual Produto Produto { get; set; }
    }
}