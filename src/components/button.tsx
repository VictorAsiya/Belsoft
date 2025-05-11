type ButtonProps = {
    title: string;
    className?: string;
};

const Button = ({ title, className }: ButtonProps) => {
    return(
        <button
            className={`${className}`}
            type="button"
        >
            {title}
        </button>
    )
}
export default Button