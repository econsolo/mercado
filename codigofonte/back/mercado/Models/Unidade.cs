using System;

namespace mercado.Models
{
    public class Unidade
    {
        public Unidade()
        {
        }

        public virtual Guid Id { get; set; }
        public virtual string Nome { get; set; }
    }
}