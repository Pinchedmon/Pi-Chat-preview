import React, { ButtonHTMLAttributes } from 'react'

interface svgProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    width: number;
    className: string
    height: number;
    fill: string;
}
const SunIcon = (props: svgProps) => {
    const { width, height, fill, className, onClick } = props
    return (
        <button className={className} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
                <path d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 17C10.6167 17 9.4375 16.5125 8.4625 15.5375C7.4875 14.5625 7 13.3833 7 12C7 10.6167 7.4875 9.4375 8.4625 8.4625C9.4375 7.4875 10.6167 7 12 7C13.3833 7 14.5625 7.4875 15.5375 8.4625C16.5125 9.4375 17 10.6167 17 12C17 13.3833 16.5125 14.5625 15.5375 15.5375C14.5625 16.5125 13.3833 17 12 17ZM5 13H1V11H5V13ZM23 13H19V11H23V13ZM11 5V1H13V5H11ZM11 23V19H13V23H11ZM6.4 7.75L3.875 5.325L5.3 3.85L7.7 6.35L6.4 7.75ZM18.7 20.15L16.275 17.625L17.6 16.25L20.125 18.675L18.7 20.15ZM16.25 6.4L18.675 3.875L20.15 5.3L17.65 7.7L16.25 6.4ZM3.85 18.7L6.375 16.275L7.75 17.6L5.325 20.125L3.85 18.7Z" fill={fill} />
            </svg>
        </button>
    )
}

export default SunIcon