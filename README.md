
# Configuração 


* Acesse o site de instalação do PostgreSQL https://www.postgresql.org/download/.
* Escolha a versão do seu sistema operacional e instale-o.
* Aceite todas as opções de instalação que são exibidas na tela de instalação.
* Para facilitar o uso do banco de dados, você pode também instalar o pgAdmin em :https://www.pgadmin.org/download/.
* Nesse software ou em linha de comando, o que você preferir, crie seu usário, senha e um banco de dados para esse projeto, essas informações serão usadas no passo abaixo. 
* Na raiz do projeto, crie um arquivo chamado .env e coloque as seguintes informações:
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=<SEU USUÁRIO>
POSTGRES_PASSWORD=<SUA SENHA>
POSTGRES_DB=<SEU BANCO DE DADOS>
PORT=<PORTA>
* Acesse a pasta planos-de-saude e rode o comando npm i, que fará a instalação dos pacotes necessários, sendo eles por exemplo:

    "@hapi/joi": "^17.1.1",
    "@nestjs/common": "^8.0.0",
    "@nestjs/config": "^1.2.0",
    "@nestjs/core": "^8.0.0",
    "@nestjs/platform-express": "^7.6.15",
    "@nestjs/typeorm": "^8.0.3",
    "@types/hapi__joi": "^17.1.8",
    "pg": "^8.7.3",
    "reflect-metadata": "^0.1.13",
    "rimraf": "^3.0.2",
    "rxjs": "^7.5.5"

# Algumas requests para testes
* localhost:3000/cliente metódo post com o seguinte body : {"nome":"Tio Patinhas Bank"}

* localhost:3000/pessoa método get deve retornar o seguinte padrão: [
    {
        "id": 1,
        "cpf": "01977856039"
    },
    {
        "id": 2,
        "cpf": "01977856041"
    }
]
