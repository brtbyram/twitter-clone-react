import { createElement } from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

export default function Button({ as, size, variant, children }) {
    return createElement(as, {
        type: 'button',
        className: classNames("rounded-full flex items-center justify-center font-bold transition-all", {
            "px-4 h-8 text-sm": size === 'small',
            "px-4 h-9": size === 'normal',
            "px-4 text-[1.063rem] h-[3.25rem] w-full": size === 'large',
            "bg-[#1d9bf0] hover:opacity-90 text-#fff": variant === 'primary',
            "bg-#fff text-[#1d9bf0]": variant === 'white',
			"border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]": variant === 'white-outline'
        })
    }, children)
}

Button.propTypes = {
    as: PropTypes.any,
    size: PropTypes.oneOf(['small','normal','large']),
    variant: PropTypes.oneOf(['primary', 'white', 'white-outline']),
}

Button.defaultProps = {
    as: 'button',
    size: 'normal',
    variant: 'primary'
}