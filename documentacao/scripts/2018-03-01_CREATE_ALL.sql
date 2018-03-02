/*==============================================================*/
/* Table: UNIDADE                                               */
/*==============================================================*/
create table UNIDADE (
   ID                   varchar(36)          not null,
   NOME                 varchar(80)          not null,
   constraint PK_UNIDADE primary key (ID)
)
go

/*==============================================================*/
/* Table: PRODUTO                                               */
/*==============================================================*/
create table PRODUTO (
   ID                   varchar(36)          not null,
   ID_UNIDADE           varchar(36)          not null,
   NOME                 varchar(80)          not null,
   QUANTIDADE           decimal(8,2)         not null,
   VALOR_UNITARIO       decimal(8,2)         not null,
   constraint PK_PRODUTO primary key (ID)
)
go

alter table PRODUTO
   add constraint FK_PRODUTO_UNIDADE foreign key (ID_UNIDADE)
      references UNIDADE (ID)
go

/*==============================================================*/
/* Table: VENDA_PRODUTO                                         */
/*==============================================================*/
create table VENDA_PRODUTO (
   ID                   varchar(36)          not null,
   ID_VENDA             varchar(36)          not null,
   ID_PRODUTO           varchar(36)          not null,
   constraint PK_VENDA_PRODUTO primary key (ID)
)
go

alter table VENDA_PRODUTO
   add constraint FK_PRODUTO_VENDA foreign key (ID_VENDA)
      references VENDA (ID)
go

alter table VENDA_PRODUTO
   add constraint FK_VENDA_PRODUTO foreign key (ID_PRODUTO)
      references PRODUTO (ID)
go

/*==============================================================*/
/* Table: VENDA                                                 */
/*==============================================================*/
create table VENDA (
   ID                   varchar(36)          not null,
   ID_USUARIO           varchar(36)          not null,
   TOTAL                decimal(8,2)         not null,
   DATA                 datetime             not null,
   constraint PK_VENDA primary key (ID)
)
go

alter table VENDA
   add constraint FK_VENDA_USUARIO foreign key (ID_USUARIO)
      references USUARIO (ID)
go

/*==============================================================*/
/* Table: USUARIO                                               */
/*==============================================================*/
create table USUARIO (
   ID                   varchar(36)          not null,
   LOGIN                varchar(40)          not null,
   SENHA                varchar(40)          not null,
   constraint PK_USUARIO primary key (ID)
)
go