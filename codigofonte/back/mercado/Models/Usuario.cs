
namespace mercado.Models
{
    public class Usuario
    {
        public Usuario() { }

        public virtual string Id { get; set; }
        public virtual string Login { get; set; }
        public virtual string Senha { get; set; }
    }
}