export default function Recommended(props)
{
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.image} alt={props.alt} />
                <div class="texto">
                  <div class="nome">{props.user}</div>
                  <div class="razao">{props.status}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
}
