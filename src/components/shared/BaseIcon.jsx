const BaseIcon = ({icon}) => {
    return (
        <svg role="presentation">
            <use href={`/icons.svg#${icon}`}></use>
        </svg>
    )
}

export default BaseIcon;