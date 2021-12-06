import Story from './Story';
import Post from './Post';
import User from './User';
import Recommended from './Recommended';

const stories =
[
    {
        image: "assets/img/9gag.svg",
        user: "9gag",
        logo: "9gag logo"
    },
    {
        image: "assets/img/meowed.svg",
        user: "meowed",
        logo: "meowed logo"
    },
    {
        image: "assets/img/barked.svg",
        user: "barked",
        logo: "barked logo"
    },
    {
        image: "assets/img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet",
        logo: "alien drawing logo"
    },
    {
        image: "assets/img/wawawicomics.svg",
        user: "wawawicomics",
        logo: "wawawi logo"
    },
    {
        image: "assets/img/respondeai.svg",
        user: "respondeai",
        logo: "responde ai logo"
    },
    {
        image: "assets/img/filomoderna.svg",
        user: "filomoderna",
        logo: "filo moderna logo"
    },
    {
        image: "assets/img/memeriagourmet.svg",
        user: "memeriagourmet",
        logo: "memeria gourmet logo"
    }
]

const posts =
[
    {
        logo: "assets/img/meowed.svg",
        logoalt: "meowed logo",
        user: "meowed",
        image: "assets/img/gato-telefone.svg",
        firstLikeImage: "assets/img/respondeai.svg",
        firstLikeUser: "respondeai",
        likesNumber: "101.523"

    },  
    {
        logo: "assets/img/barked.svg",
        logoalt: "image of a sleeping dog",
        user: "barked",
        image: "assets/img/dog.svg",
        firstLikeImage: "assets/img/adorable_animals.svg",
        firstLikeUser: "adorable_animals",
        likesNumber: "101.523"
    }
]

const recommended =
[
    {
        image: "assets/img/bad.vibes.memes.svg",
        alt: "bad vibes user logo",
        user: "bad.vibes.memes",
        status: "Segue você"
    },
    {
        image: "assets/img/chibirdart.svg",
        alt: "chibird user logo",
        user: "chibirdart",
        status: "Segue você"
    },
    {
        image: "assets/img/razoesparaacreditar.svg",
        alt: "razoes para acreditar user logo",
        user: "razoesparaacreditar",
        status: "Novo no Instagram"
    },
    {
        image: "assets/img/adorable_animals.svg",
        alt: "adorable animals user logo",
        user: "adorable_animals",
        status: "Segue você"
    },
    {
        image: "assets/img/smallcutecats.svg",
        alt: "small cute cats user logo",
        user: "smallcutecats",
        status: "Segue você"
    }
]

export default function Body()
{
    return(
        <div class="corpo">
            <div class="esquerda">

                <div class="stories">
                    {stories.map(item => <Story image={item.image} alt={item.logo} user={item.user} />)}

                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div class="posts">
                    {posts.map(item => <Post logo={item.logo} logoalt={item.logoalt} image={item.image} user={item.user}
                    firstLikeImage={item.firstLikeImage} firstLikeUser={item.firstLikeUser} />)}
                </div>
            </div>

            <div class="sidebar">
                <User image="assets/img/catanacomics.svg" who="catanacomics" owner="Catana" />

                <div class="sugestoes">
                    <div class="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>
                    {recommended.map(item => <Recommended image={item.image} alt={item.alt} user={item.user} status={item.status} />)}
                </div>

                <div class="links">
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div class="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div>
            <div class="fundo-mobile">
                <ion-icon name="home"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
                <ion-icon name="add-circle-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="person-outline"></ion-icon>
            </div>
        </div>
    );
}