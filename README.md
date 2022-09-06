                              Documentação sobre o projecto:

# Comandos para Criar um Projeto: 
npx create-react-app (nome da app); 
cd my-app - Entrar dentro da pasta do projeto; 
npm start - Iniciar projeto; 

# Nome do actual projeto: 
Projeto-final (Store Fashion Online); 

# Descrição sumária: 
Criação de uma loja online utilizando React (biblioteca JavaScript para elaboração de uma single-page-application), enriquecida por duas API´s. 

API de Login - para simulação de base de dados, verificação de utilizador e entrada na web store;
# https://edit-shop-api.herokuapp.com/api/login?username="

API de Produtos – para manuseamento e espelhamento de produtos. 
# https://fakestoreapi.com/products


                              Estrutura do Projeto:

# App.js - Está descrito o roteamento das páginas; 

# App.css - Informação sobre os estilos da página principal "Listagem de Produtos"; 

# Pasta "pages" - Lógica e HTML das respectivas páginas (Login, Not Found, Product List e Product Page); 

# Pasta "components" - Inseridos os componentes criados, para serem utilizados dentro das páginas (Login, Not Found, Product List e Product Page);

# Pasta "css" - Estilos dos Componentes; 

# Pasta "assets" - Armazenada imagem utilizada no Header; 


                                Listagem de rotas:

Para navegação nesta web store, foi utilizada a seguinte lógica de roteamento:

# Inicialmente é apresentada a “Página de Login”, para validação do utilizador e posteriormente navegar para a “Página de Listagem de Produtos”); 
Exemplo: <Route path="/login" element={<Login />} />

# Dentro da “Página de Listagem de Produtos” (sendo a página principal), ao mesmo tempo que são espellhados todos os produtos, também é possível apresentar apenas produtos por “Categorias” (Homem, Mulher, Jóias e Electrónica). Em secção à parte “Sorting”, é possível refinar a pesquisa e procurar por “Nome”, “Preço” ou “Rating” (de forma ascendente ou descendente). Por fim, são apresentados produtos “de 10 em 10”, divididos pelas respectivas páginas. 
Exemplo: <Route path="/productlist" element={<ProductList />} />

# Tendo interesse em mais informações sobre um respectivo produto, é possível saber mais sobre o mesmo na “Página de Produto”. Para isso,  ao clicar em “More Details” e através do respectivo “id de produto”, somos redirecionados para a “Página de Produto”. Após apreciação, é possível retornar à “Página de Listagem de Produtos”, clicando em “Home”; 
Exemplo: <Route path="/productpage/:id" element={<ProductPage />} />

# Por fim, caso exista laspo de escrita por parte do utilizador ou tentativa de procura de um produto que não exista, é automáticamente redirecionado para a página “Not Found” – Página não encontrada. 
Exemplo: <Route path="*" exact={true} element={<NotFound />}

Exemplo total de roteamento: 

<div>
    <Router>
        <Routes>
          <Route path="*" exact={true} element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
        </Routes>
    </Router>
</div>

                            Pacotes utilizados e porquê do seu uso:

Para realização deste projecto, foram utilizados os seguintes pacotes: 

# ReactDom - O ReactDOM renderiza componentes ou elementos JSX para o DOM; 
import ReactDOM from ‘react-dom’;

# Bootstrap – É utilizado para estilizar as páginas e adicionar funcionalidades (menus de navegação – “Sorting”, formulários – “Login” e controle de “Paginação”) e layout;
import ‘bootstrap/dist/css/bootstrap.css’;
import ‘bootstrap/dist/js/bootstrap.js’;

# BrowserRouter (Router, Route, Routes) - Todas as rotas estão declaradas aqui, se não estiverem, não é possível aceder; 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

# useState e useEffect -  O “useState” permitiu criar estados num componente criado e a partir de uma função, enquanto que o “useEffect” serviu para lidar com os seus efeitos.
import React, { useState, useEffect } from "react";

# useParams – Utilizado para extraia parâmetros da API. 
import { useParams } from "react-router-dom";

# useNavigate – Utilizado para navegar para outra página, ou seja, da “Página de Login” para a “Página de Listagem de Produtos”. 
import { useNavigate } from "react-router-dom";

# NavLink – Utilizado para passar o “id” do produto a visualizar na página de produto. Na página de produto esse mesmo “id” será utilizado para fazer um fetch à API. O NavLink é também utilizado para retroceder para a Página de Listagem de Produtos; 
import { NavLink } from "react-router-dom";

# Link – Utilizado para quando se clica no botão “Latest Products” é imediatamente levado para uma parte diferente da mesma página, neste caso, ao descer, vai aparecer a Listagem de todos os Produtos. 
import { Link } from "react-scroll";
