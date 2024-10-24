import PropTypes from "prop-types"

const Button = ({ text, type, onClick = null }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full bg-blue-700 text-xl text-white py-3 rounded-lg hover:bg-blue-600 active:bg-blue-900 transition duration-400"
        >
            {text}
        </button>
    )
}

Button.PropTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.any
}

export default Button