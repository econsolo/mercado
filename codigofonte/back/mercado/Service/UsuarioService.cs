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

        public UsuarioDTO Salvar(UsuarioDTO usuarioDTO)
        {
            Usuario u = ConverterParaEntidade(null, usuarioDTO);
            _repository.Salvar(u);
            return new UsuarioDTO(u);
        }

        public UsuarioDTO Alterar(string id, UsuarioDTO usuarioDTO)
        {
            Usuario u = ConverterParaEntidade(id, usuarioDTO);
            _repository.Alterar(u);
            return new UsuarioDTO(u);
        }

        private Usuario ConverterParaEntidade(string id, UsuarioDTO usuarioDTO)
        {
            Usuario usuario = new Usuario();
            usuario.Id = string.IsNullOrEmpty(id) ? Guid.NewGuid().ToString() : id;
            usuario.Login = usuarioDTO.Login;
            usuario.Senha = usuarioDTO.Senha;
            return usuario;
        }

        public void Excluir(string id)
        {
            _repository.Excluir(_repository.BuscarPorId(id));
        }

        public UsuarioDTO BuscarPorLoginSenha(UsuarioDTO usuarioDTO)
        {
            Usuario usuario = _repository.BuscarPorLoginSenha(usuarioDTO);
            UsuarioDTO u = null;
            if (usuario != null)
            {
                u = new UsuarioDTO(usuario);
            }

            return u;
        }

        public UsuarioDTO BuscarPorId(string id)
        {
            return new UsuarioDTO(_repository.BuscarPorId(id));
        }
    }
}