interface svgProps {
    width: number;
    height: number;
    fill: string;
}
const EditIcon = (props: svgProps) => {
    const { width, height, fill } = props
    return (
        <button className="flex justify-center items-center w-[42px] h-[42px] rounded-[20px] hover:border border-gray-text  bg-bg-content dark:bg-dark-bg-content">
            <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 width heigth`} fill="none">
                <path d="M13.0002 21.6666C12.4043 21.6666 11.8943 21.4544 11.47 21.0301C11.0456 20.6058 10.8335 20.0958 10.8335 19.4999C10.8335 18.9041 11.0456 18.394 11.47 17.9697C11.8943 17.5454 12.4043 17.3333 13.0002 17.3333C13.596 17.3333 14.1061 17.5454 14.5304 17.9697C14.9547 18.394 15.1668 18.9041 15.1668 19.4999C15.1668 20.0958 14.9547 20.6058 14.5304 21.0301C14.1061 21.4544 13.596 21.6666 13.0002 21.6666ZM13.0002 15.1666C12.4043 15.1666 11.8943 14.9544 11.47 14.5301C11.0456 14.1058 10.8335 13.5958 10.8335 12.9999C10.8335 12.4041 11.0456 11.894 11.47 11.4697C11.8943 11.0454 12.4043 10.8333 13.0002 10.8333C13.596 10.8333 14.1061 11.0454 14.5304 11.4697C14.9547 11.894 15.1668 12.4041 15.1668 12.9999C15.1668 13.5958 14.9547 14.1058 14.5304 14.5301C14.1061 14.9544 13.596 15.1666 13.0002 15.1666ZM13.0002 8.66659C12.4043 8.66659 11.8943 8.45443 11.47 8.03013C11.0456 7.60582 10.8335 7.09575 10.8335 6.49992C10.8335 5.90409 11.0456 5.39402 11.47 4.96971C11.8943 4.5454 12.4043 4.33325 13.0002 4.33325C13.596 4.33325 14.1061 4.5454 14.5304 4.96971C14.9547 5.39402 15.1668 5.90409 15.1668 6.49992C15.1668 7.09575 14.9547 7.60582 14.5304 8.03013C14.1061 8.45443 13.596 8.66659 13.0002 8.66659Z" fill={fill} />
            </svg>
        </button>

    )
}

export default EditIcon