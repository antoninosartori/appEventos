import PropTypes from "prop-types";

const Input = ({ labelName, name, placeholder }) => {
    return (
        <div>
            <label>
                {labelName}
                <input name={name} placeholder={placeholder} />
            </label>
        </div>
    );
};

export default Input;
