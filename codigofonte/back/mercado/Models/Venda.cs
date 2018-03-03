using System;

namespace mercado.Models
{
    public class Venda
    {
        public Venda() { }

        public virtual string Id { get; set; }
        public virtual Usuario Usuario { get; set; }
        public virtual double Total { get; set; }
        public virtual DateTime Data { get; set; }
    }
}