const Text = ({ children, as, ...rest }) => {
  const RenderedElement = as || "p";
  return <RenderedElement {...rest}>{children}</RenderedElement>;
};

export { Text };
