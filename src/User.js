export default function User(props)
{
    return(
    <div class="usuario">
        <img src={props.image} />
        <div class="texto">
            <strong>{props.who}</strong>
            {props.owner}
        </div>
    </div>
    );
}