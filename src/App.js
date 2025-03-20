import { useState, useEffect } from 'react';
import { dbOrderBy, dbCollection, dbOnSnapshot, dbDoc, dbSubCollection } from "./firebase";
import './App.css';
import FeedForm from './FeedForm';
import FeedPost from './FeedPost';
import Header from "./Header";
import Stories from "./Stories";
import Contacts from './Contacts';
import { FaAngleDown, FaBookmark, FaHistory } from "react-icons/fa";
import { MdOutlineOndemandVideo, MdStorefront } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi2";
import Profile from "./resources/mark_zuckerberg.jpg"
import Ne10 from "./resources/ne10.png"
import Pia from "./resources/pia.jpg"
import Unitel from "./resources/unitel.jpg"
import Post1 from "./resources/post1.png"
import Post2 from "./resources/post2.jpg"
import Post3 from "./resources/post3.png"
import ChA from "./resources/canal-astronomia.png"
import ChN from "./resources/canal-negocios.png"
import ChM from "./resources/canal-musica.png"
import ChG from "./resources/canal-game.png"
import ChF from "./resources/canal-filmes.png"
import Fri from "./resources/amigos.png"

function App() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const dbQuery = dbOrderBy(dbCollection("posts"), 'timestamp', 'desc');
        const unsubscribe = dbOnSnapshot(dbQuery, (querySnapshot) => {
            const posts = [];
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                posts.push({ id: doc.id, info: data });
            });
            setPosts(posts);
        });
    }, [])
    
    useEffect(() => {
        console.log(posts)
    }, [posts])
    
    const PostItem = ({ post }) => {
        const [comment, setComment] = useState(0);
        const [like, setLike] = useState(0);

        useEffect(() => {
            const postsRef = dbDoc('posts', post.id);
            const commentsCol = dbSubCollection(postsRef, 'comentarios');
            const commentQuery = dbOrderBy(commentsCol, 'timestamp', 'asc');
            const unsubscribeCom = dbOnSnapshot(commentQuery, (querySnapshot) => {
                setComment(querySnapshot.size);
            });
            const likeCol = dbSubCollection(postsRef, 'curtidas');
            const likeQuery = dbOrderBy(likeCol, 'timestamp', 'desc');
            const unsubscribeLik = dbOnSnapshot(likeQuery, (querySnapshot) => {
                setLike(querySnapshot.size);
            });
            return () => {
                unsubscribeCom();
                unsubscribeLik();
            }
        }, [post.id]);

        return <FeedPost profileImage={post.info.profileImage} userName={post.info.userName} timestamp={post.info.timestamp} titulo={post.info.titulo} image={post.info.image} likes={like} comments={comment} shares={Math.ceil(Math.random() * 100)} />
    }

  return (
    <div className="App">
      <Header />
      <div className="content">
          <div className="side-menu left">
              <div className="menu-section com-borda">
                  <div className="menu-item">
                      <img className="img-redonda" src={Profile} alt='Imagem de Perfil'/>
                      <span>Mark Zuckerberg</span>
                  </div>
                  <div className="menu-item">
                      <img src={Fri} alt='Amigos' />
                      <span>Amigos</span>
                  </div>
                  <div className="menu-item">
                      <FaHistory />
                      <span>Lembranças</span>
                  </div>
                  <div className="menu-item">
                      <FaBookmark />
                      <span>Salvos</span>
                  </div>
                  <div className="menu-item">
                      <HiOutlineUserGroup />
                      <span>Grupos</span>
                  </div>
                  <div className="menu-item">
                      <MdStorefront />
                      <span>Marketplace</span>
                  </div>
                  <div className="menu-item">
                      <MdOutlineOndemandVideo />
                      <span>Vídeo</span>
                  </div>
                  <div className="menu-item">
                      <div className="button-border"><FaAngleDown /></div>
                      <span>Ver mais</span>
                  </div>
              </div>
              <div className="menu-section">
                  <span className="section-title">Seus Atalhos</span>
                  <div className="menu-item">
                      <img className="img-redonda" src={ChA} alt='Astronomia' />
                      <span>Canal Astronomia</span>
                  </div>
                  <div className="menu-item">
                      <img src={ChF} alt='Filmes' />
                      <span>Canal Filmes</span>
                  </div>
                  <div className="menu-item">
                      <img src={ChG} alt='Games' />
                      <span>Canal Games</span>
                  </div>
                  <div className="menu-item">
                      <img src={ChM} alt='Música' />
                      <span>Canal Música</span>
                  </div>
                  <div className="menu-item">
                      <img src={ChN} alt='Negócios' />
                      <span>Canal Negócios</span>
                  </div>
              </div>
              <div className="credits">
                  <span className="credit-item">Privacidade</span>
                  <span className="credit-item">Termos</span>
                  <span className="credit-item">Publicidade</span>
                  <span className="credit-item">Escolhas para anúncios</span>
                  <span className="credit-item">Cookies</span>
                  <span className="credit-item">Mais</span>
                  <span className="credit-item">Meta © 2024</span>
              </div>
          </div>
          <div className="posts-container">
              <FeedForm />
              <Stories />
              {posts.map((item) => (
                <PostItem key={item.id} post={item} />
              ))}
              <FeedPost profileImage={Ne10} userName='NE10' timestamp={{seconds: 1732817989, nanoseconds: 712000000}} titulo='A grande bigtech Google está oferecendo 120 mil bolsas de estudo na área de tecnologia. Os cursos são para pessoas que ainda estão cursando o Ensino Médio, universitários ou até mesmo quem busca o primeiro emprego na área. As bolsas estão disponíveis no site do Centro de Integração Empresa Escola (CIEE) e na plataforma Bettha, que prioriza pessoas de baixa renda, mulheres, comunidades indígenas, pessoas LGBTQIAP+ e moradores das regiões Norte e Nordeste.' image={Post1} likes={75} comments={9} shares={12} />
              <FeedPost profileImage={Pia} userName='Portal Informativo Angolano' timestamp={{seconds: 1732817989, nanoseconds: 712000000}} titulo='Segundo uma recente pesquisa da Goldman Sachs, os avanços ao nível da Inteligência Artificial podem trazer muitos benefícios significativos quanto à produtividade, mas também afetar uma grande quantidade de empregos. Em concreto, a pesquisa refere-se à possibilidade de automatizar cerca de um quarto de todo o trabalho feito nos Estados Unidos e também na zona Euro.' image={Post2} likes={369} comments={31} shares={20} />
              <FeedPost profileImage={Unitel} userName='Unitel' timestamp={{seconds: 1732817989, nanoseconds: 712000000}} titulo='O fundador da gigante tecnológica, META, Mark Zuckerberg divulgou na sua conta do Facebook que a empresa está focada em mecanismos de Inteligência Artificial (AI) generativas como o ChatGPT, para textos, imagens e vídeos. O exemplo usado por Zuckerberg para as IAs de texto foram os aplicativos WhatsApp e o Messenger.' image={Post3} likes={'1 mil'} comments={58} shares={20} />
          </div>
          <div className="side-menu right">
              <Contacts />
          </div>
      </div>    
    </div>
  );
}

export default App;
