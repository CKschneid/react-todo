export default (props, Cmp) => {
  const propTypes = Cmp.propTypes

  const domProps = { ...props }

  Object.keys(propTypes).forEach(key => {
    delete domProps[key]
  })
  return domProps
}
