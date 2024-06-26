import './input.scss'

const Input = (props:any) => {
  return (
    <input 
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e) : undefined}
    />
  )
}

export default Input