using mercado.Models;
using mercado.Models.DTO;
using mercado.Repository;
using NHibernate;
using System.Collections.Generic;
using System.Linq;

namespace mercado.Service
{
    public class UnidadeService
    {
        private IUnidadeRepository _repository;

        public UnidadeService(ISession session)
        {
            _repository = new UnidadeRepository(session);
        }

        public List<UnidadeDTO> BuscarTodos()
        {
            List<Unidade> Unidades = new List<Unidade>(_repository.BuscarTodos());
            List<UnidadeDTO> UnidadesDTO = new List<UnidadeDTO>();

            Unidades.ForEach(unidade => UnidadesDTO.Add(new UnidadeDTO(unidade)));
            
            return UnidadesDTO;
        }

        public UnidadeDTO BuscarPorId(string id)
        {
            return new UnidadeDTO(_repository.BuscarPorId(id));
        }
    }
}