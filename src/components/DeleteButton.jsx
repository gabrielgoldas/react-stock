import PropTypes from "prop-types"
import useStock from "../hooks/useStock"

DeleteButton.propTypes = {
  itemId: PropTypes.number,
  itemName: PropTypes.string
}

export default function DeleteButton({ itemId, itemName }) {

  const { deleteItem } = useStock()

  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja escluir ${itemName}`)) {
      deleteItem(itemId)
    }
  }

  return (
    <button
      className="button is-danger is-small"
      onClick={handleDelete}
    >
      Excluir
    </button>
  )
}