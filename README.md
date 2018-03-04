# O que foi utilizado

## 1. Para o backend em C#

1. Microsoft .NET MVC 5 com Web API no **Visual Studio 2017 Community**;
2. SQL Server 2012;
3. NHibernate e Fluent NHibernate para gerenciamento e mapeamento da base de dados relacional;
4. Nginx atuando como proxy reverso na qual redireciona requisições do frontend para a Web API do backend.

## 2. Para o frontend

1. NodeJS e npm para gerenciamento de pacotes;
2. Angular 5;
3. Bootstrap 4.

# Montando o ambiente

## 1. Rodando o projeto backend

1. Abra o arquivo *codigofonte/back/mercado.sln* para iniciá-lo no **Visual Studio**;
2. Clique para rodar o projeto e veja em qual porta ele foi hospedado;
3. Altere-a na configuração do passo abaixo.

## 2. Configurando o Nginx

1. No repositório encontra-se o Nginx (_codigofonte/nginx_);
2. Abra o arquivo _codigofonte/nginx/conf/nginx.conf_ e edite-o como arquivo de texto;
3. Altere o diretório do projeto frontend em que encontra-se o código HTML estático, estes arquivos estão em uma pasta chamada **dist**;
4. Deve-se alterar a **linha 14** e adicionar o diretório citado no **passo 3** à frente da palavra **root**;
5. Deve-se alterar a **linha 19** para a porta gerada ao rodar o backend no **Visual Studio**;
5. Feito isso, retorne para _codigofonte/nginx_ e execute o arquivo chamado **nginx.exe**;
6. Para verificar se o **nginx** foi iniciado com sucesso, execute o comando *tasklist /fi "imagename eq nginx.exe"* no **cmd** do Windows.

## 3. Abrindo o sistema

1. Abra o navegador **Google Chrome**;
2. Acesse *http://localhost:5001/* 
3. De acordo com a configuração do **nginx**, toda URL acessada através dos *HTTP methods* com o prefixo **api/** será redirecionada para a porta na qual o projeto backend está hospedado.


# O que há no código até o momento?

- [x] Modelagem do banco
- [x] Responsividade da interface
- [x] Preparação do Service Worker para PWA
- [ ] Tags para funcionamento do PWA
- [x] CRUD de produtos do mercado
- [ ] Venda de produtos do mercado
- [ ] Cadastro de novos usuários
- [ ] Login de usuários no sistema para efetuar vendas
- [ ] Controle de acesso
