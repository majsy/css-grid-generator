export function camelToTitle(name) {
  const camelToTitle = name.replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());

  return camelToTitle;
}