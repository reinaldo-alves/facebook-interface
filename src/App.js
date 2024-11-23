import './App.css';
import Header from "./Header";
import Stories from "./Stories";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
          <div className="side-menu left">
              <div className="menu-section com-borda">
                  <div className="menu-item">
                      <img className="img-redonda" src="./profissao-programador.jpg" />
                      <span>Profissão Programador</span>
                  </div>
                  <div className="menu-item">
                      <img src="./amigos.png" />
                      <span>Amigos</span>
                  </div>
                  <div className="menu-item">
                      <img src="./mais-recente.png" />
                      <span>Mais Recentes</span>
                  </div>
                  <div className="menu-item">
                      <img src="./grupo.png" />
                      <span>Grupos</span>
                  </div>
                  <div className="menu-item">
                      <img src="./marketplace.png" />
                      <span>Marketplace</span>
                  </div>
                  <div className="menu-item">
                      <img src="./yourvideos.png" />
                      <span>Watch</span>
                  </div>
                  <div className="menu-item">
                      <div className="button-border">
                          <img src="./arrow-down.png" />
                      </div>
                      <span>Ver mais</span>
                  </div>
              </div>
              <div className="menu-section">
                  <span className="section-title">Seus Atalhos</span>
                  <div className="menu-item">
                      <img className="img-redonda" src="./canal-astronomia.png" />
                      <span>Canal Astronomia</span>
                  </div>
                  <div className="menu-item">
                      <img src="./canal-filmes.png" />
                      <span>Canal Filmes</span>
                  </div>
                  <div className="menu-item">
                      <img src="./canal-game.png" />
                      <span>Canal Games</span>
                  </div>
                  <div className="menu-item">
                      <img src="./canal-musica.png" />
                      <span>Canal Música</span>
                  </div>
                  <div className="menu-item">
                      <img src="./canal-negocios.png" />
                      <span>Canal Negócios</span>
                  </div>
              </div>
              <div className="credits">
                  <span className="credit-item">Privacidade</span>
                  <span className="credit-item">Termos</span>
                  <span className="credit-item">Publicidade</span>
                  <span className="credit-item">Escolhas para</span>
                  <span className="credit-item">anúncios</span>
                  <span className="credit-item">Cookies</span>
                  <span className="credit-item">Mais</span>
                  <span className="credit-item">Meta © 2023</span>
              </div>
          </div>
          <div className="posts-container">
              <div className="header-posts">
                  <div className="post-input-container">
                      <img src="./profissao-programador.jpg" />
                      <div className="search-container">
                          <input placeholder="No que você está pensando, Profissão Programador?" />
                      </div>
                  </div>
                  <div className="post-options-container">
                      <div className="post-option">
                          <img src="./video.png" />
                          <span>Vídeo ao vivo</span>
                      </div>
                      <div className="post-option">
                          <img src="./photo-and-video.png" />
                          <span>Foto/vídeo</span>
                      </div>
                      <div className="post-option">
                          <img src="./rir.png" />
                          <span>Sentimento/atividade</span>
                      </div>
                  </div>
              </div>
              <Stories />
              <div className="post">
                  <div className="title-post-container">
                      <img className="post-avatar" src="./ne10.png" />
                      <div className="post-texts">
                          <span className="post-title">NE10</span>
                          <span className="post-time">2 de maio às 03:00 · Public</span>
                      </div>
                      <div className="medium-button-border"><img src="./mais-opcoes.png" /></div>
                      <div className="medium-button-border"><img src="./remover.png" /></div>
                  </div>
                  <div className="post-description">
                      <span>A grande bigtech Google está oferecendo 120 mil bolsas de estudo na área de tecnologia. Os cursos são para pessoas que ainda estão cursando o Ensino Médio, universitários ou até mesmo quem busca o primeiro emprego na área. As bolsas estão disponíveis no site do Centro de Integração Empresa Escola (CIEE) e na plataforma Bettha, que prioriza pessoas de baixa renda, mulheres, comunidades indígenas, pessoas LGBTQIAP+ e moradores das regiões Norte e Nordeste.</span>
                  </div>
                  <img className="post-image" src="./post1.png" />
                  <div className="post-info">
                      <div className="likes-container">
                          <img src="./gostar.png" />
                          <span>75</span>
                      </div>
                      <div className="com-container">
                          <span>9 comentários</span>
                          <span>12 compartilhamentos</span>
                      </div>
                  </div>
                  <div className="post-buttons">
                      <div className="post-option">
                          <img src="./gostar2.png" />
                          <span>Curtir</span>
                      </div>
                      <div className="post-option">
                          <img src="./mensagem.png" />
                          <span>Comentar</span>
                      </div>
                      <div className="post-option">
                          <img src="./compartilhar.png" />
                          <span>Compartilhar</span>
                      </div>
                      <div className="post-option">
                          <img className="img-redonda" src="./profissao-programador.jpg" />
                          <img src="./arrow-down.png" />
                      </div>
                  </div>
              </div>
              <div className="post">
                  <div className="title-post-container">
                      <img className="post-avatar" src="./pia.jpg" />
                      <div className="post-texts">
                          <span className="post-title">Portal Informativo Angolano</span>
                          <span className="post-time">5 de abril às 19:33 · Public</span>
                      </div>
                      <div className="medium-button-border"><img src="./mais-opcoes.png" /></div>
                      <div className="medium-button-border"><img src="./remover.png" /></div>
                  </div>
                  <div className="post-description">
                      <span>Segundo uma recente pesquisa da Goldman Sachs, os avanços ao nível da Inteligência Artificial podem trazer muitos benefícios significativos quanto à produtividade, mas também afetar uma grande quantidade de empregos. Em concreto, a pesquisa refere-se à possibilidade de automatizar cerca de um quarto de todo o trabalho feito nos Estados Unidos e também na zona Euro.</span>
                  </div>
                  <img className="post-image" src="./post2.jpg" />
                  <div className="post-info">
                      <div className="likes-container">
                          <img src="./gostar.png" />
                          <span>369</span>
                      </div>
                      <div className="com-container">
                          <span>31 comentários</span>
                          <span>20 compartilhamentos</span>
                      </div>
                  </div>
                  <div className="post-buttons">
                      <div className="post-option">
                          <img src="./gostar2.png" />
                          <span>Curtir</span>
                      </div>
                      <div className="post-option">
                          <img src="./mensagem.png" />
                          <span>Comentar</span>
                      </div>
                      <div className="post-option">
                          <img src="./compartilhar.png" />
                          <span>Compartilhar</span>
                      </div>
                      <div className="post-option">
                          <img className="img-redonda" src="./profissao-programador.jpg" />
                          <img src="./arrow-down.png" />
                      </div>
                  </div>
              </div>
              <div className="post">
                  <div className="title-post-container">
                      <img className="post-avatar" src="./unitel.jpg" />
                      <div className="post-texts">
                          <span className="post-title">Unitel</span>
                          <span className="post-time">10 de abril às 04:30 · Public</span>
                      </div>
                      <div className="medium-button-border"><img src="./mais-opcoes.png" /></div>
                      <div className="medium-button-border"><img src="./remover.png" /></div>
                  </div>
                  <div className="post-description">
                      <span>O fundador da gigante tecnológica, META, Mark Zuckerberg divulgou na sua conta do Facebook que a empresa está focada em mecanismos de Inteligência Artificial (AI) generativas como o ChatGPT, para textos, imagens e vídeos. O exemplo usado por Zuckerberg para as IAs de texto foram os aplicativos WhatsApp e o Messenger.</span>
                  </div>
                  <img className="post-image" src="./post3.png" />
                  <div className="post-info">
                      <div className="likes-container">
                          <img src="./gostar.png" />
                          <span>1 mil</span>
                      </div>
                      <div className="com-container">
                          <span>58 comentários</span>
                          <span>20 compartilhamentos</span>
                      </div>
                  </div>
                  <div className="post-buttons">
                      <div className="post-option">
                          <img src="./gostar2.png" />
                          <span>Curtir</span>
                      </div>
                      <div className="post-option">
                          <img src="./mensagem.png" />
                          <span>Comentar</span>
                      </div>
                      <div className="post-option">
                          <img src="./compartilhar.png" />
                          <span>Compartilhar</span>
                      </div>
                      <div className="post-option">
                          <img className="img-redonda" src="./profissao-programador.jpg" />
                          <img src="./arrow-down.png" />
                      </div>
                  </div>
              </div>
          </div>
          <div className="side-menu right">
              <div className="menu-section">
                  <div className="header-section">
                      <span className="section-title">Contatos</span>
                      <div className="contact-buttons">
                          <div className="minor-button-border"><img src="./video.png" /></div>
                          <div className="minor-button-border"><img src="./search.png" /></div>
                          <div className="minor-button-border"><img src="./mais-opcoes.png" /></div>
                      </div>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./isabel-pesce-mattos.jpg" />
                      <span>Isabel Pesce Mattos</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./mike-krieger.jpg" />
                      <span>Mike Krieger</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./paulo-da-silva.jpg" />
                      <span>Paulo da Silva</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./alex-kipman.jpg" />
                      <span>Alex Kipman</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./hugo-barra.jpg" />
                      <span>Hugo Barra</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./ron-czerny.jpg" />
                      <span>Ron Czerny</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./renato-asse-goncalves.jpg" />
                      <span>Renato Asse Gonçalves</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./davidson-laponte.jpeg" />
                      <span>Davidson Lapoint</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./gutembergue-gomes.png" />
                      <span>Gutembergue Gomes</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./leo-andrade.jpg" />
                      <span>Léo Andrade</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./cris-acosta.png" />
                      <span>Cris Acosta</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./ada-lovelace.jpg" />
                      <span>Ada Lovelace</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./grace-hopper.jpg" />
                      <span>Grace Hopper</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./alan-turing.jpg" />
                      <span>Alan Turing</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./margaret-hamilton.jpg" />
                      <span>Margaret Hamilton</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./dennis-ritchie.jpg" />
                      <span>Denis Ritchie</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./linus-torvalds.jpg" />
                      <span>Linus Torvalds</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./John-Backus.jpg" />
                      <span>John Backus</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./bill-gates.jpg" />
                      <span>Bill Gates</span>
                  </div>
                  <div className="menu-item">
                      <img className="img-redonda" src="./Tim-Berners-Lee.jpg" />
                      <span>Tim Berners-Lee</span>
                  </div>
              </div>
          </div>
      </div>    
    </div>
  );
}

export default App;
