# O que foi utilizado

## Para o backend em C#

1. Microsoft .NET MVC 5 com Web API;
2. SQL Server 2012;
3. NHibernate e Fluent NHibernate para gerenciamento e mapeamento da base de dados relacional;
4. Nginx atuando como proxy reverso na qual redireciona requisições do frontend para a Web API do backend.

## Para o frontend

1. NodeJS e npm para gerenciamento de pacotes;
2. Angular 5;
3. Bootstrap 4.

# Montando o ambiente

## Configurando o Nginx

1. No repositório encontra-se o Nginx (_codigofonte/nginx_);
2. Abra o arquivo _codigofonte/nginx/conf/nginx.conf_ e edite-o como arquivo de texto;
3. Altere o diretório do projeto frontend em que encontra-se o código HTML estático, estes arquivos estão em uma pasta chamada **dist**;
4. Deve-se alterar a **linha 14** e adicionar o diretório citado no **passo 3** à frente da palavra **root**;
5. Feito isso, retorne para _codigofonte/nginx_ e execute o arquivo chamado **nginx.exe**;
6. Para verificar se o **nginx** foi iniciado com sucesso, execute o comando *tasklist /fi "imagename eq nginx.exe"* no **cmd** do Windows.
