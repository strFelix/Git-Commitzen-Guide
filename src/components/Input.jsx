import PropTypes from 'prop-types';

const Input = ({ id, label, type, placeholder, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
            />
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Input
