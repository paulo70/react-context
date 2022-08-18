import { Container } from './styles';
import { memo, useContext } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { CartContext } from '../../common/contexts/Cart'

function Produto({
  nome,
  foto,
  id,
  valor,
  unidade
}) {

  const { cart, setCart } = useContext(CartContext)

  const handleAddProducts = (newItem) => {
    const hasItem = cart?.some(itemCar => itemCar.id === newItem.id)

    if (!hasItem) {
      newItem.count = 1
      return setCart(itemPrev => [...itemPrev, newItem])
    }

    setCart(itemPrev => itemPrev.map(itemCar => {
      if (itemCar.id === newItem.id) itemCar.count += 1
      return itemCar
    }))
  }
  return (
    <Container>
      <div>
        <img
          src={`/assets/${foto}.png`}
          alt={`foto de ${nome}`}
        />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
        >
          <RemoveIcon />
        </IconButton>

        <IconButton
          color="primary"
          onClick={() => handleAddProducts({ nome, foto, id, valor })}
        >
          <AddIcon
          />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Produto)