using System;

namespace mercado.Models
{
    public class Produto
    {
        public Produto()
        {
        }

        public virtual string Id { get; set; }
        public virtual string Nome { get; set; }
        public virtual double Quantidade { get; set; }
        public virtual double Valor { get; set; }
        public virtual Unidade Unidade { get; set; }
    }
}