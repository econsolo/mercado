using mercado.Models;
using mercado.Models.DTO;
using mercado.Repository;
using NHibernate;
using System;
using System.Collections.Generic;

namespace mercado.Service
{
    public class UsuarioService
    {
        private IUsuarioRepository _repository;

        public UsuarioService(ISession session)
        {
            _repository = new UsuarioRepository(session);
        }

        public List<UsuarioDTO> BuscarTodos()
        {
            List<Usuario> Usuarios = new List<Usuario>(_repository.BuscarTodos());
            List<UsuarioDTO> UsuariosDTO = new List<UsuarioDTO>();

            Usuarios.ForEach(u => UsuariosDTO.Add(new UsuarioDTO(u)));

            return UsuariosDTO;
        }

        public List<UsuarioDTO> Buscar(FiltroUsuarioDTO filtro)
        {
            List<Usuario> Usuarios = new List<Usuario>(_repository.Buscar(filtro));
            List<UsuarioDTO> UsuariosDTO = new List<UsuarioDTO>();

            Usuarios.ForEach(p => UsuariosDTO.Add(new UsuarioDTO(p)));

            return UsuariosDTO;
        }

        public void Salvar(UsuarioDTO usuarioDTO)
        {
            _repository.Salvar(ConverterParaEntidade(null, usuarioDTO));
        }

        public void Alterar(string id, UsuarioDTO usuarioDTO)
        {
            _repository.Alterar(ConverterParaEntidade(id, usuarioDTO));
        }

        private Usuario ConverterParaEntidade(string id, UsuarioDTO usuarioDTO)
        {
            Usuario usuario = new Usuario();
            usuario.Id = string.IsNullOrEmpty(id) ? Guid.NewGuid().ToString() : id;
            usuario.Login = usuarioDTO.Login;
            usuario.Senha = usuarioDTO.Senha;
            return usuario;
        }

        internal void Excluir(string id)
        {
            _repository.Excluir(_repository.BuscarPorId(id));
        }

        public UsuarioDTO BuscarPorId(string id)
        {
            return new UsuarioDTO(_repository.BuscarPorId(id));
        }
    }
}