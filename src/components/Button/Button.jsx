function Button({
    children,
    type = "button",
    onClick,
    className=""
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-md bg-primary-dark px-3 py-3 text-2xl text-white transition-colors duration-300 hover:bg-primary ${className}`}>
               {children}
            </button>
    )
}

export default Button