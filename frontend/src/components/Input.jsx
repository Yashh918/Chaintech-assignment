import PropTypes from "prop-types"

const Input = ({label, value, setValue, type = "text", disabled = false } ) => {
    return (
        <div>
            <label className="block text-lg font-medium text-gray-700">{label}</label>
            <input
              type={type}
              value={value}
              disabled={disabled}
              onChange={(e) => setValue(e.target.value)}
              className="w-full px-3 py-2 border text-lg border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
    )
}

Input.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    type: PropTypes.string,
    disabled: PropTypes.bool
}

export default Input