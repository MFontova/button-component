import './Button.css'

export const Button = (
  {
    children,
    variant = 'default',
    disableShadow = false,
    disabled = false,
    startIcon = null,
    endIcon = null,
    size = 'md',
    color = 'default'
  }) => {
  return (
    <button
      className={`button ${variant} ${disableShadow ? 'disable-shadow' : ''} ${disabled ? 'disabled' : ''} ${size} color-${color}`}
      disabled={disabled}
    >
      {startIcon ? <span className='material-icons icon'>{startIcon}</span> : ''}
      {children}
      {endIcon ? <span className='material-icons icon'>{endIcon}</span> : ''}
    </button>
  )
}
