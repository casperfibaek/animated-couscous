export default function clickedRow(event, id) {
  if (event.target.hasAttributes(id)) {
    return Number(event.target.getAttribute(id));
  } else if (event.target.parentElement.hasAttributes(id)) {
    return Number(event.target.parentElement.getAttribute(id));
  }

  return Number(event.target.parentElement.parentElement.getAttribute(id));
}
