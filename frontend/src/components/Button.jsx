import PropTypes from "prop-types"

const Button = ({ text, type, onClick = null, isDisabled=false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            className="w-full bg-blue-700 text-xl text-white py-3 rounded-lg hover:bg-blue-600 active:bg-blue-900 transition duration-400"
        >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.any
}

export default Button