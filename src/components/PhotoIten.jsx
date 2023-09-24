export const PhotoItem = ({photo, onClick}) => {
    return (
        <div onClick={onClick} className="cursor-pointer hover:opacity-80">
            <img src={`/assets/${photo.url}`} alt='' className="w-full"/>
        </div>
    )
}